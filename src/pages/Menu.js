import React from "react";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        <ul>
          {MenuList.map((menuItem, index) => (
            <li key={index}>
              <div className="menuItem">
                <img src={menuItem.image} alt={menuItem.name} />
                <h3>{menuItem.name}</h3>
                <p>${menuItem.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
