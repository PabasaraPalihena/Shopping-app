import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function Header({ title }) {
  const history = useHistory();
  return (
    <>
      <header>
        <div className="header__component">
          <div className="header__left">
            <div>
              <p>Layout Index</p>
              <p>{title}</p>
            </div>
            <div className="header__buttonGroup">
              <Button
                variant="outlined"
                className="header__button"
                onClick={() => history.goBack()}
                startIcon={<ArrowBackRoundedIcon />}
              >
                Back
              </Button>
              <Button
                variant="outlined"
                className="header__button"
                onClick={() => history.push("/")}
                style={{ width: "100px" }}
              >
                Home
              </Button>
              <Button
                variant="outlined"
                className="header__button"
                onClick={() => history.push("/addproduct")}
                style={{ width: "150px" }}
              >
                Add Products
              </Button>

              <Button
                variant="outlined"
                className="header__button"
                onClick={() => history.push("/allproducts")}
                style={{ width: "160px" }}
              >
                View Products
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
              click
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
