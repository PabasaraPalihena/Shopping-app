import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import "../components/Admin/Viewproducts.css";

export default function MediaCard({ product, btn1, btn2, image }) {
  const history = useHistory();

  const updateproduct = () => {
    history.push({ pathname: "/editproduct", product });
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
          // onClick={() => history.push("/student/creategroup")}
          style={{ color: "green" }}
        >
          {btn1}
        </Button>
        <Button size="small" onClick={() => updateproduct()}>
          {btn2}
        </Button>
      </CardActions>
    </Card>
  );
}
