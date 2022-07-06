import React, { useState, useEffect, useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

import { NewCountryName } from "../store/context";
import { ThemeSwither } from "../store/context";
import CountryDetail from "../pages/CountryDetail";

function CountryInfo() {
  let navigate = useNavigate();
  let { crs } = useParams();

  const { themeSelector } = useContext(ThemeSwither);
  const { newCountryName } = useContext(NewCountryName);

  const [countryDetails, setCountryDetails] = useState([]);

  let new_url = "https://restcountries.com/v2/name/" + crs;
  // console.log(new_url)

  useEffect(() => {
    try {
      Axios.get(new_url).then((res) => {
        setCountryDetails(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [countryDetails, new_url]);

  return (
    <div
      className="country-info"
      style={{
        color: themeSelector ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
        backgroundColor: themeSelector
          ? " hsl(207, 26%, 17%)"
          : "hsl(0, 0%, 98%)",
      }}
    >
      <button
        className="btn center"
        style={{
          color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
          backgroundColor: themeSelector
            ? "hsl(209, 23%, 22%)"
            : "hsl(0, 0%, 98%)",
        }}
        onClick={() => navigate("/")}
      >
        <span className="back-arrow">
          <ArrowBackIosIcon />
        </span>{" "}
        Back{" "}
      </button>

      {countryDetails.map((item) => (
        <div
          className="info-container center"
          style={{
            color: themeSelector ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
            backgroundColor: themeSelector
              ? " hsl(207, 26%, 17%)"
              : "hsl(0, 0%, 98%)",
          }}
          key={item.name}
        >
          <div className="img-container">
            <img src={item.flags.svg} alt={item.name} />
          </div>
          <div className="detail-container">
            <div className="title">
              <h1>{item.name}</h1>
            </div>
            <div className="display ">
              <div className="country-info-container one">
                <ul>
                  <li>
                    <span>Native Name: </span>
                    <span>{item.nativeName}</span>
                  </li>
                  <li>
                    <span>Population: </span>
                    <span>{item.population.toLocaleString()}</span>
                  </li>
                  <li>
                    <span>Region: </span>
                    <span>{item.region}</span>
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    <span>{item.subregion}</span>
                  </li>
                  <li>
                    <span>Capital: </span>
                    <span>{item.capital}</span>
                  </li>
                </ul>
              </div>
              <div className="country-info-container two">
                <ul>
                  <li>
                    <span>Top Level Domain: </span>
                    <span>{item.topLevelDomain}</span>
                  </li>
                  <li>
                    <span>Currencies: </span>
                    <span>{item.currencies[0].name}</span>
                  </li>
                  <li>
                    <span>Language: </span>
                    <span>{item.languages[0].name} </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-countries center">
              <h2>Border Countries: </h2>
              <ul
                className="center"
                style={{
                  color: themeSelector
                    ? "hsl(0, 0%, 100%)"
                    : " hsl(200, 15%, 8%)",
                  backgroundColor: themeSelector
                    ? " hsl(207, 26%, 17%)"
                    : "hsl(0, 0%, 98%)",
                }}
              >
                {item.borders?.map((brd) => (
                  <li
                    style={{
                      color: themeSelector
                        ? "hsl(0, 0%, 100%)"
                        : " hsl(200, 15%, 8%)",
                      backgroundColor: themeSelector
                        ? "hsl(200, 15%, 8%)"
                        : "hsl(0, 0%, 98%)",
                    }}
                  >
                    {brd}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryInfo;
