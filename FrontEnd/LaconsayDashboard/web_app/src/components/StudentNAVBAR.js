import { Component } from "react";
import "./StudentNavbarStyle.css"
import { MenuItems } from "./StudentMenuItems";
import { Link } from "react-router-dom";

class StudentNavbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src={require("./assets/logo111.png")} alt="logo" />
        </h1>

        <ul className="nav-menu">
          {StudentMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default StudentNavbar;