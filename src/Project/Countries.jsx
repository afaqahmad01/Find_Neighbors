import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";
import { COUNTRIES, COUNTRIESDETAILS } from "./Consants/Links";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [organizedCountries, setOrganizedCountries] = useState({});
  const [selectedContinent, setSelectedContinent] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.ok) {
        const data = await response.json();
        const firstTwentyCountries = data.slice(0, 20);

        setCountries(firstTwentyCountries);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const organizeByContinent = (countries) => {
    return countries.reduce((acc, country) => {
      const continent = country.continents;
      if (!acc[continent]) {
        acc[continent] = [];
      }
      acc[continent].push(country);
      return acc;
    }, {});
  };

  useEffect(() => {
    const organized = organizeByContinent(countries);
    setOrganizedCountries(organized);
  }, [countries]);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  return (
    <div>
      <Layout>
        <div className="lg:ml-16 xl:ml-0">
          <h1 className="font-bold text-3xl">List of Countries</h1>
          <div className="p-3">{isLoading ? "Loading........" : ""}</div>

          <div className="flex flex-wrap">
            {Object.keys(organizedCountries).map((continent, index) => (
              <button
                key={index}
                className="border bg-black text-white rounded-2xl w-[150px] p-2 focus:bg-blue mb-4 md:mr-4"
                onClick={() => handleContinentClick(continent)}
              >
                {continent}
              </button>
            ))}
          </div>

          <div className="lg:flex lg:flex-wrap">
            {selectedContinent
              ? organizedCountries[selectedContinent].map(
                  (country, countryIndex) => (
                    <Link
                      key={countryIndex}
                      to={`${COUNTRIES}${COUNTRIESDETAILS(
                        country.name.official
                      )}`}
                    >
                      <div className="p-3 md:mr-2 sm:w-full md:w-72 lg:w-full ">
                        <div className="h-40">
                          <img
                            src={country.flags.png}
                            alt=""
                            className="h-full w-[320px] object-cover"
                          />
                        </div>
                        <div>
                          <strong>Name:</strong> {country.name.official}
                        </div>
                        <div>
                          <strong>Continent:</strong> {country.continents}
                        </div>
                      </div>
                    </Link>
                  )
                )
              : countries.map((country, countryIndex) => (
                  <Link
                    key={countryIndex}
                    to={`${COUNTRIES}${COUNTRIESDETAILS(
                      country.name.official
                    )}`}
                  >
                    <div className="p-3 md:mr-2 sm:w-full md:w-72 lg:w-full ">
                      <div className="h-40">
                        <img
                          src={country.flags.png}
                          alt=""
                          className="h-full w-[320px] object-cover"
                        />
                      </div>
                      <div>
                        <strong>Name:</strong> {country.name.official}
                      </div>
                      <div>
                        <strong>Continent:</strong> {country.continents}
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Countries;
