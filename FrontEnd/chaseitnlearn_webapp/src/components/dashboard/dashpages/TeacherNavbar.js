import { Component } from "react";
import "../dashdesigns/TeacherNavbar.css";
import { TeacherMenuItems } from "./TeacherMenuItems";
import { Link } from "react-router-dom";

class TeacherNavbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img src={require("../../frontpage/assets/logo111.png")} alt="logo" />
        </h1>
        
        <ul className="nav-menu">
          {TeacherMenuItems.map((item, index) => {
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

export default TeacherNavbar;
