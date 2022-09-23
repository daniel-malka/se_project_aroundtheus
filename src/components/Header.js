import React from "react";
import logo from "../images/header__logo";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="AROUND the us logo" class="header__logo" />
    </header>
  );
}
export default Header;
