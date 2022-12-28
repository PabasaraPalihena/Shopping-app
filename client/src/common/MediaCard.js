import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
import "../components/Admin/Viewproducts.css";
const API = process.env.REACT_APP_API;

export default function MediaCard({ product, btn1, btn2, image }) {
  const history = useHistory();
  const [products, setproducts] = useState([]);
  const updateproduct = () => {
    history.push({ pathname: "/editproduct", product });
  };

  //get all products from the database
  const getAllTProducts = () => {
    Axios.get(`${API}api/v1/product/`).then((res) => {
      setproducts(res.data.data);
    });
  };
  useEffect(() => {
    getAllTProducts();
  }, []);

  //refersh
  const refresh = () => {
    history.push("/allproducts");
  };

  //delete products
  const deleteproduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`${API}api/v1/product/${id}`).then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          // getAllTProducts();
          refresh();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };
  return (
    <Card sx={{ maxWidth: 200, minWidth: 190 }}>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={product.sampleImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {product.productName}
        </Typography>
        <Typography
          variant="body2"
          color="#ff7961"
          style={{ textAlign: "left" }}
        >
          {"Rs." + product.price}
        </Typography>
        <br />
        <Typography
          variant="body4"
          color="#64dd17"
          style={{ textAlign: "left" }}
        >
          {"Available Qty : " + product.qty}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => updateproduct()}
          style={{ color: "green" }}
        >
          {btn1}
        </Button>
        <Button size="small" onClick={() => deleteproduct(product._id)}>
          {btn2}
        </Button>
      </CardActions>
    </Card>
  );
}
