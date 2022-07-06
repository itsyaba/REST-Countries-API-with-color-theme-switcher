import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import { useNavigate, useParams } from "react-router-dom";

import { ThemeSwither } from "../store/context";
import { GetRegionName } from "../store/context";
import { GetCountryName } from "../store/context";
import { NewCountryName } from "../store/context";

const override = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  position: "fixed",
  top: "50%",
  right: "50%",
  left: "50%",
  overflow: "hidden",
  margin: "0 auto",
  borderColor: "red",
};

function CountryList() {
  const [countryDetail, setCountryDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
  let { crs } = useParams();

  const { themeSelector } = useContext(ThemeSwither);
  const { region } = useContext(GetRegionName);
  const { countryName, setNewCountryName } = useContext(GetCountryName);

  let url = "https://restcountries.com/v2/all";

  if (region === "All" || region === "Filter By Region") {
    url = "https://restcountries.com/v2/all";
  } else if (region !== "all" || region !== "Filter By Region") {
    url = `https://restcountries.com/v2/region/${region}`;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await Axios.get(`url`).then((res) => {
  //         setCountryDetail(res.data);
  //         console.log(data)
  //       });
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error.message);
  //       setIsLoading(true);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  useEffect(() => {
    try {
      Axios.get(url).then((res) => {
        console.log(res.data[0].name);
        setCountryDetail(res.data);
        setIsLoading(false)
      });
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  const FilteredCountry = countryDetail.filter((item) => {
    return item.name.toLowerCase().includes(countryName.toLowerCase());
  });

  return (
    <main
      className="country-list"
      style={{
        backgroundColor: themeSelector
          ? "hsl(207, 26%, 17%"
          : "hsl(0, 0%, 98%)",
      }}
    >
      {isLoading && (
        <DotLoader loading={isLoading} cssOverride={override} size={150} />
      )}
      {FilteredCountry.map((item) => (
        <div
          className="country-detail-container center"
          key={item.name}
          style={{
            color: themeSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)",
            backgroundColor: themeSelector
              ? "hsl(209, 23%, 22%)"
              : " hsl(0, 0%, 98%)",
          }}
          onClick={() => {
            // setNewCountryName(item.name);
            crs = item.name;
            navigate(`/CountryDetail/${crs}`);
          }}
        >
          <img src={item.flags.svg} alt="Country-Flag" className={item.name} />
          <div className="country-detail">
            <h1 className="country-name">{item.name}</h1>
            <p className="population">
              <span>Population:</span> {item.population.toLocaleString()}
            </p>
            <p className="region">
              <span>Region:</span> {item.region.toLocaleString()}
            </p>
            <p className="capital">
              <span>Capital:</span> {item.capital}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default CountryList;
