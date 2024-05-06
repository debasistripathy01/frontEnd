import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const FetchData = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  var [error, setError] = useState(false);
  console.log(data);
  //   const dataRef = useRef(data);
  const FetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    FetchData();
  }, []);
  //   console.log("This is data ====>", data);
  return loader ? (
    <h1>Data is Loading....</h1>
  ) : error ? (
    <h1>Error while Loading data...</h1>
  ) : (
    <div className="data">
      {data.map((Product) => (
        <div key={Product.id}>
          <h1>ID: {Product.id}</h1>
          <h2>Category: {Product.category}</h2>
          <img className="image" src={Product.image} alt="Element data" />
          <h2>{Product.title}</h2>
        </div>
      ))}
    </div>
  );
};
