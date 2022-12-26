import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../../common/MediaCard";
import "./Viewproducts.css";

const API = process.env.REACT_APP_API;

export default function Products() {
  const [products, setproducts] = useState([]);
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
        <div className="product_component">
          {products.map((product) => {
            return (
              <Card
                key={product._id.toString()}
                product={product}
                btn1="buy"
                btn2="update"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
