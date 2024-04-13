import React from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../assets/data/NavListData";
import "./header.css";
import Search from "../components/Search";
const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {/* Mapping */}
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
        {/* Mapping */}
      </ul>
      <Search />
    </header>
  );
};

export default Header;
