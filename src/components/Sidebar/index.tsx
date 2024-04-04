import "./sidebar.css"
import { FaShoppingBasket } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <NavLink  to="/" className="sidebar-link">
            <FaShoppingBasket className="sidebar-icon"/> 
            <p className="sidebar-text">
              Add Product
            </p>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to='/list' className="sidebar-link">
            <FaListAlt className="sidebar-icon"/> 
            <p className="sidebar-text">
              Product List
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
