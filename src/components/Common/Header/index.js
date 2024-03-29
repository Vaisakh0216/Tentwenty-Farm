import React from "react";
import "./header.scss";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MobileMenu from "../../../../assets/icons/responsiveMenu.png";

const Header = ({ HeaderLabels }) => {
  return (
    <header>
      <nav>
        <ul>
          {HeaderLabels.map((labels) => (
            <li>
              <a href={"#" + labels}>{labels}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        style={{
          textTransform: "inherit",
          backgroundColor: "white",
          border: "1px solid black",
          color: "black",
          fontFamily: "Work Sans, sans-serif",
          fontSize: "16px",
          fontWeight: "400",
          borderRadius: "1px",
          height: "36px",
          width: "148px",
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Continue us
      </Button>
      <img src={MobileMenu} className="icon-menu" />
    </header>
  );
};

export default Header;
