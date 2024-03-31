import "./header.css"
import Logo from "../../assets/images/logo-store.png"
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-logo-link">
            <img src={Logo} alt="logo" className="header-logo" width={200} height={40}/>
          </a>

          <a href="#" className="header-profile">
            <FaRegUserCircle className="header-profile-img"/>
          </a>
        </div>
      </div>
    </div>
  )
}
