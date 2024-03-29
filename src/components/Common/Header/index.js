import React from "react";
import "./header.scss";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    </header>
  );
};

export default Header;
