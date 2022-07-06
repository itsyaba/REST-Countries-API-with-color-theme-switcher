import React, { useState } from "react";
import Header from "../components/Header";
import CountryInfo from "../components/CountryInfo";
// import { useParams } from "./react-router-dom";
import { ThemeSwither } from "../store/context";

function CountryDetail() {
  const [themeSelector, setThemeSelector] = useState(true);


  return (
    <div
      style={{
        color: themeSelector ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
        backgroundColor: themeSelector
          ? " hsl(207, 26%, 17%)"
          : "hsl(0, 0%, 98%)",
      }}
    >
      <ThemeSwither.Provider value={{ themeSelector, setThemeSelector }}>
        <Header />
        <CountryInfo />
      </ThemeSwither.Provider>
    </div>
  );
}

export default CountryDetail;
