import React from "react";
import Axios from "axios";
import "./Product.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useHistory, useLocation } from "react-router";

export default function UpdateProduct() {
  const location = useLocation();
  const [productID, setproductID] = useState(location.product.productID);
  const [productName, setproductName] = useState(location.product.productName);
  const [category, setcategory] = useState(location.product.category);
  const [subcategory, setsubcategory] = useState(location.product.subcategory);
  const [price, setprice] = useState(location.product.price);
  const [sampleImage, setsampleImage] = useState(location.product.sampleImage);
  const [qty, setqty] = useState(location.product.qty);
  const API = process.env.REACT_APP_API;
  const history = useHistory();

  //using axios update product details
  const sendupdatedProductToAPI = () => {
    // e.preventDefault();
    // if (
    //   productID == null ||
    //   productName == null ||
    //   category == null ||
    //   subcategory == null ||
    //   price == null
    // ) {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "error",
    //     title: "Please filled the required details!",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    //   return;
    // }
    const data = {
      productName,
      category,
      subcategory,
      price,
      sampleImage,
      qty,
    };

    //update product details
    Axios.put(`${API}api/v1/product/${location.product._id}`, data)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // data form
    <div className="res_component">
      <div className="form_frame">
        <div className="Product_details">
          <div className="Product_details__title">
            <h1>Product Details Update</h1>
            <div>
              <br />

              <div className="Product_details__input">
                <p>Product ID</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Product_txt"
                    label="Product ID"
                    variant="outlined"
                    value={productID}
                    onChange={(e) => setproductID(e.target.value)}
                    disabled
                  />
                </FormControl>
              </div>

              <div className="Product_details__input">
                <p>Product Name</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Product_txt"
                    label="Product Name"
                    variant="outlined"
                    value={productName}
                    onChange={(e) => setproductName(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Product_details__input">
                <p>Category</p>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Type"
                    onChange={(event) => {
                      setcategory(event.target.value);
                    }}
                    style={{ width: "360px" }}
                  >
                    <MenuItem value={1}>Women's Fashion</MenuItem>
                    <MenuItem value={2}>Men's Fashion</MenuItem>
                    <MenuItem value={3}>Kid's Fashion</MenuItem>
                    <MenuItem value={4}>Accesories</MenuItem>
                    <MenuItem value={5}>Beauty Products</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="Product_details__input">
                <p>Sub Category</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Product_txt"
                    label="Sub Category"
                    variant="outlined"
                    value={subcategory}
                    onChange={(e) => setsubcategory(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Product_details__input">
                <p>Price (LK)</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Product_txt"
                    label="Price"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Product_details__input">
                <p>Available Qty</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Product_txt"
                    label="quantity"
                    variant="outlined"
                    value={qty}
                    onChange={(e) => setqty(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Product_details__input">
                <p>Upload image</p>
                {/* <label
                  onChange={(e) => {
                    setsampleImage(e.target.files[0].name);
                  }}
                /> */}
                <br />
                <br />

                <input
                  id="contained-button-file"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    console.log(event.target.files[0].name);
                    // Get a reference to the file
                    const file = event.target.files[0];
                    // Encode the file using the FileReader API
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
                      setsampleImage(reader.result);
                      console.log(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </div>
              <div className="res_details__input">
                <FormControl fullWidth>
                  <Button
                    variant="contained"
                    style={{
                      width: "400px",
                      height: "40px",
                      margin: "20px 0px 0px 100px",
                    }}
                    onClick={sendupdatedProductToAPI}
                  >
                    Update
                  </Button>
                  <br />
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
