import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Note Keeper
      </h1>
    </header>
  );
}

export default Header;
