import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CountryList from "../components/CountryList";

import { ThemeSwither } from "../store/context";
import { GetRegionName } from "../store/context";
import { GetCountryName } from "../store/context";

function CountryDetail() {
  const [themeSelector, setThemeSelector] = useState(true);
  const [region, setRegion] = useState("Filter By Region");
  const [countryName, setCountryName] = useState("");

  return (
    <div
      style={{
        backgroundColor: themeSelector
          ? "hsl(207, 26%, 17%"
          : "hsl(0, 0%, 98%)",
      }}
    >
      <ThemeSwither.Provider value={{ themeSelector, setThemeSelector }}>
        <GetRegionName.Provider value={{ region, setRegion }}>
          <Header />
          <GetCountryName.Provider value={{ countryName, setCountryName }}>
            <Search />
            <CountryList />
          </GetCountryName.Provider>
        </GetRegionName.Provider>
      </ThemeSwither.Provider>
    </div>
  );
}

export default CountryDetail;
