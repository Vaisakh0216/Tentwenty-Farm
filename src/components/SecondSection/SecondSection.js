import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import "./SecondSection.scss";
import DragIcon from "../../../assets/icons/DragIcon.png";
import useMediaQuery from "@mui/material/useMediaQuery";

gsap.registerPlugin(Draggable);

const CardCarousel = ({ images }) => {
  const isLargeScreen = useMediaQuery("(max-width: 767px)");
  const pickerRef = useRef(null);
  const cellsRef = useRef([]);
  const [transformedIndex, setTransformedIndex] = useState(2);

  useEffect(() => {
    const picker = pickerRef.current;
    const cells = cellsRef.current;

    gsap.defaults({
      ease: "none",
    });

    const proxy = document.createElement("div");
    const cellWidth = 250;
    const rotation = -90;
    const numCells = cells.length;
    const cellStep = 1 / numCells;
    const wrapWidth = cellWidth * numCells;
    const wrapIndex = gsap.utils.wrap(0, cells.length);

    const baseTl = gsap.timeline({ paused: true });

    gsap.set(picker, {
      perspective: 1100,
      width: isLargeScreen ? "90%" : "100%",
    });

    cells.forEach((cell, index) => {
      initCell(cell, index);
    });

    const animation = gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 2))
      .progress(1);

    const draggable = new Draggable(proxy, {
      allowContextMenu: true,
      type: "x",
      trigger: picker,
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX,
      },
      onDragEnd: function () {
        const i = wrapIndex((-this.endX / wrapWidth) * cells.length - 5);
        if (i === 0) {
          setTransformedIndex(i);
        } else {
          setTransformedIndex(i + 1);
        }
      },
    });

    function snapX(x) {
      return Math.round(x / cellWidth) * cellWidth;
    }

    function updateProgress() {
      let newProg = this.x / wrapWidth;
      newProg = newProg - Math.floor(newProg);
      animation.progress(newProg);
    }

    function initCell(element, index) {
      gsap.set(element, {
        width: cellWidth,
        scale: 0.9,
        opacity: isLargeScreen ? 0 : 0.5,
        rotation: rotation,
        x: -cellWidth,
      });

      const tl = gsap
        .timeline({ repeat: 1 })
        .to(element, 1, { x: `+=${wrapWidth}`, rotation: -rotation }, 0)
        .to(
          element,
          cellStep,
          { scale: 1, opacity: 1, repeat: 1, yoyo: true },
          0.5 - cellStep
        );

      baseTl.add(tl, index * -cellStep);
    }

    return () => {
      animation.kill();
      baseTl.kill();
      draggable.kill();
    };
  }, []);

  console.log(Math.round(transformedIndex));

  return (
    <div className="main">
      <img
        src={DragIcon}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: "55%",
          zIndex: 9,
        }}
      />

      <div ref={pickerRef} className="picker">
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (cellsRef.current[index] = el)}
            className="cell"
          >
            <div className="cell-content">
              <img src={image.src} alt={`Image ${index + 1}`} />
              {Math.round(transformedIndex) === index && (
                <>
                  <span className="client">{image.client}</span>
                  <span className="client-info">{image.clientAddress}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
