import { Component } from "react";
import "../designs/NavbarStyles.css";
import { NavbarMenu } from "./NavbarMenu";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">

        <ul className="nav-menu">
          {NavbarMenu.map((item, index) => {
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

export default Navbar;
