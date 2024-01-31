import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div>
              <img className="images" src={menuItem.image} />
              <h1>
                {menuItem.name} {menuItem.price}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

/*{MenuList.map((menuItem, key) => {
  return (
    <MenuItem
      key={key}
      name={menuItem.name}
      price={menuItem.price}
      image={menuItem.image}
    />
  );
})}*/
