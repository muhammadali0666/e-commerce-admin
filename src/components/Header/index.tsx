import "./header.css"
import Logo from "../../assets/images/logo-store.png"
// import { FaRegUserCircle } from "react-icons/fa";
import Profile from "../../assets/images/images.png"

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-logo-link">
            <img src={Logo} alt="logo" className="header-logo" width={200} height={40}/>
          </a>

          <a href="#" className="header-profile">
            {/* <FaRegUserCircle className="header-profile-img"/> */}
            <img src={Profile} alt="img" className="header-img"width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  )
}
