import React, {useContext} from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {ThemeSwither} from '../store/context'


function Header() {

  const {themeSelector , setThemeSelector}  = useContext(ThemeSwither)

  return (
    <nav
      className="center nav"
      style={{
        color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
        backgroundColor: themeSelector
          ? "hsl(209, 23%, 22%)"
          : " hsl(0, 0%, 98%)",
      }}
    >
      <div className="logo">
        <h1>Where In The World?</h1>
      </div>
      <div className="theme-switcher ">
        <p className="center" onClick={() => setThemeSelector(!themeSelector)}>
          <span>{themeSelector ? <DarkModeIcon /> : <LightModeIcon /> }</span>
          <span>{themeSelector ? "Dark " : "Light "}Mode</span>
        </p>
      </div>
    </nav>
  );
}

export default Header;
