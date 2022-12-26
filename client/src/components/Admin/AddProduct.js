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
import FileUpload from "react-material-file-upload";
import { useHistory } from "react-router";

export default function AddProduct() {
  const [productID, setproductID] = useState("");
  const [productName, setproductName] = useState("");
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [price, setprice] = useState("");
  //   const [productSize, setproductSize] = useState("");
  const [sampleImage, setsampleImage] = useState("");

  const API = process.env.REACT_APP_API;
  const history = useHistory();

  //using axios send product details to api
  const sendProductToAPI = () => {
    Axios.post(`${API}api/v1/product`, {
      productID,
      productName,
      category,
      subcategory,
      price,
      sampleImage,
    }).then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      //   history.push("/theaters");
    });
  };
  return (
    // data form
    <div className="res_component">
      <div className="form_frame">
        <div className="Product_details">
          <div className="Product_details__title">
            <h1>Product Registration</h1>
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

              {/* <div className="Product_details__input">
                <p>Product size</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Product_txt"
                    label="Productsize"
                    variant="outlined"
                    value={productSize}
                    onChange={(e) => setproductSize(e.target.value)}
                  />
                </FormControl>
              </div> */}

              <div className="Product_details__input">
                <p>Upload image</p>

                {/* <FileUpload value={sampleImage} onChange={setsampleImage} /> */}

                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button variant="raised" component="span" width="200px">
                    Upload
                  </Button>
                </label>
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
                    onClick={sendProductToAPI}
                  >
                    Register
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
