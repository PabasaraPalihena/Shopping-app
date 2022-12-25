import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <header>
        <div className="header__component">
          <div className="header__left">
            <div>
              <p>LayoutIndex Shopping App</p>
              <p>{title}</p>
            </div>
            <div className="header__buttonGroup">
              <Button variant="outlined" className="header__button">
                Click
              </Button>
              <Button variant="outlined" className="header__button">
                Click
              </Button>
              <Button variant="outlined" className="header__button">
                Click
              </Button>
              <Button variant="outlined" className="header__button">
                Click
              </Button>
            </div>
          </div>
          <div className="header__right">
            <Button
              variant="contained"
              style={{
                borderRadius: "20px",
                width: "100px",
                backgroundColor: "rgb(60, 60, 60)",
              }}
              className="header__button"
            >
              Click
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
