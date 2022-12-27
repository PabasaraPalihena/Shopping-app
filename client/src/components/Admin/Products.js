import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../../common/MediaCard";
import "./Viewproducts.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material";

//search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.2),
  },

  width: "65%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const API = process.env.REACT_APP_API;

export default function Products() {
  const [products, setproducts] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  useEffect(() => {
    Axios.get(`${API}api/v1/product/`)
      .then((res) => {
        setproducts(res.data.data);
        products.map((products) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchedValue(e.target.value)}
            />
          </Search>
        </div>
        <div className="product_component">
          {products
            .filter(
              (row) =>
                // note that I've incorporated the searchedVal length check here
                !searchedValue.length ||
                row.productName
                  .toString()
                  .toLowerCase()
                  .includes(searchedValue.toString().toLowerCase())
            )
            .map((product) => {
              return (
                <Card
                  key={product._id.toString()}
                  product={product}
                  btn1="update"
                  btn2="delete"
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
