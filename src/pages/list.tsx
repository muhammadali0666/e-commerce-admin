import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Sidebar } from "../components/Sidebar";

export const List = () => {

  return (
    <>
      <div className="navbar"><Header/></div>
      <div className="container wrapper">
        <Sidebar/>
        <ProductList/>
      </div>
    </>
  );
};
