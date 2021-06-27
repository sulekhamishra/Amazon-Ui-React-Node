import React, { useEffect, useState } from "react";
// import Data from "../Data";
import axios from 'axios';
import Product from "./Product";

function HomeScreen() {
  const [Products,setProducts] = useState([])
useEffect(() => {
  const fetchData = async () =>{
    const { data } = axios.get("/api/product");
    setProducts(data)
  }
  fetchData()
}, [])

  return (
    <div className="row center">
      {Products && Products.length ? Products.map((product) => (
        <Product product={product} key={product.id} />
      )):null}
    </div>
  );
}

export default HomeScreen;
