import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";

export const List = () => {

  const [info, setInfo] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:4001/all_product", {
      method: "GET",
      headers: {
        Content_type: "pplication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="navbar"><Header/></div>
      <div className="container wrapper">
        <Sidebar/>
        <ProductList info={info}/>
      </div>
    </>
  );
};
