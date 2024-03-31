import { AddProduct } from "../components/AddProduct";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <>
      <div className="navbar"><Header/></div>
      <div className="container wrapper">
        <Sidebar/>
        <AddProduct/>
      </div>
    </>
  );
};
