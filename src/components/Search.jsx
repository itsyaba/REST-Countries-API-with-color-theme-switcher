import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";


import { ThemeSwither } from "../store/context";
import {GetRegionName} from "../store/context"
import {GetCountryName} from "../store/context"



function Search(props) {
  const [change, setChange] = useState(false);
  const [model, setModel] = useState(false);

  
  const { themeSelector } = useContext(ThemeSwither);
  const {region , setRegion} = useContext(GetRegionName)
  const {countryName , setCountryName}  = useContext(GetCountryName)


  useEffect(() => {
    if (countryName === " " || countryName === "") {
      setChange(false);
    }
  }, [countryName]);

  return (
    <div
      className="search center"
      style={{
        backgroundColor: themeSelector
          ? "hsl(207, 26%, 17%"
          : "hsl(0, 0%, 98%)",
      }}
    >
      <div
        className="search-bar center"
        style={{
          color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
          backgroundColor: themeSelector
            ? "hsl(209, 23%, 22%)"
            : "hsl(0, 0%, 98%)",
        }}
      >
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a country"
          value={countryName}
          onChange={(e) => {
            setCountryName(e.target.value);
            setChange(true);
          }}
          style={{
            color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
          }}
        />
        <button className="cancel-btn" onClick={() => setCountryName("")}>
          {change && (
            <CancelIcon
              style={{
                color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
              }}
            />
          )}
        </button>
      </div>
      <div
        className="search-selector"
        style={{
          color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
          backgroundColor: themeSelector
            ? "hsl(209, 23%, 22%)"
            : "hsl(0, 0%, 98%)",
          transition: "all ease-in 0.4s",
        }}
        onClick={() => setModel(!model)}
      >
        <summary className="summary-selector">
          <span>{region} </span>
          <span className="arrow">
            {" "}
            <ArrowBackIosIcon />{" "}
          </span>
        </summary>
        <div
          className="region-list"
          style={{
            color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
            backgroundColor: themeSelector
              ? "hsl(209, 23%, 22%)"
              : "hsl(0, 0%, 98%)",
            transform: model ? "translateY(0%)" : "translateY(-500%)",
            transition: "all ease-on 0.2s",
          }}
        >
          <li
            value="All"
            onClick={() => {
              setRegion("All");
              setModel(!model);
            }}
          >
            All
          </li>
          <li
            value="africa"
            onClick={() => {
              setRegion("Africa");
              setModel(!model);
            }}
          >
            Africa
          </li>
          <li
            value="america"
            onClick={() => {
              setRegion("America");
              setModel(!model);
            }}
          >
            america
          </li>
          <li
            value="asia"
            onClick={() => {
              setRegion("Asia");
              setModel(!model);
            }}
          >
            asia
          </li>
          <li
            value="europe"
            onClick={() => {
              setRegion("Europe");
              setModel(!model);
            }}
          >
            europe
          </li>
          <li
            value="oceania"
            onClick={() => {
              setRegion("Oceania");
              setModel(!model);
            }}
          >
            oceania
          </li>
        </div>
      </div>
    </div>
  );
}

export default Search;
