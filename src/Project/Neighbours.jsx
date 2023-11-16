import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";
import { COUNTRIESDETAILS, NEIGHBORS } from "./Consants/Links";

const Neighbours = () => {
  const [countries, setCountries] = useState([]);
  const [neighbour, setNeighbour] = useState([]);
  const [countryCard, setCountryCard] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [renderedNeighbours, setRenderedNeighbours] = useState([]);

  const checkSpecialChar = (input) => {
    return input.replace(/[^a-zA-Z\s]/g, "");
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.ok) {
        const data = await response.json();
        setCountries(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = async () => {
    setNeighbour([]);
    setCountryCard(null);

    const trimmedInput = searchInput.trim();

    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${trimmedInput}`
      );
      if (res.ok) {
        const data = await res.json();
        setCountryCard(data);
        setIsLoading(false);

        const arrayData = data?.[0]?.borders;

        for (let j = 0; j < arrayData.length; j++) {
          if (arrayData[j]) {
            try {
              const res = await fetch(
                `https://restcountries.com/v3.1/alpha/${arrayData[j]}`
              );
              if (res.ok) {
                const neighborData = await res.json();
                setNeighbour((prevNeighbour) => [
                  ...prevNeighbour,
                  neighborData,
                ]);
              }
            } catch (error) {
              console.error("Error fetching neighbor data:", error);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  const mapNeighbours = () => {
    return (
      <div className="flex flex-wrap">
        {neighbour.map((neighbours, index) => (
          <div key={index}>
            {neighbours.map((country, index) => (
              <div
                key={index}
                className="sm:p-2 md:p-3 sm:mt-2 h-[30vh] md:m-2 sm:w-[250px] md:w-[335px]"
              >
                <Link
                  to={`${NEIGHBORS}${COUNTRIESDETAILS(country.name.official)}`}
                >
                  <div className="h-40 w-full">
                    <img
                      src={country.flags.png}
                      alt=""
                      className="h-40 w-full"
                    />
                  </div>
                  <div>
                    <strong>Name:</strong> {country.name.official}
                    {country.flag}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    setRenderedNeighbours(mapNeighbours());
  }, [neighbour]);

  return (
    <div>
      <Layout>
        <div className="lg:ml-10">
          <h1 className="sm:ml-2 md:ml-8 sm:mt-20 sm:mb-5 font-bold text-3xl">
            Neighbours List
          </h1>
          <div className="sm:ml-2 md:ml-8 mb-5">
            Please Enter Country's Official Name
          </div>

          <div className="flex flex-wrap sm:ml-2 md:ml-8">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(checkSpecialChar(e.target.value))}
              placeholder="Search Country to look for its neighbours"
              className="border p-2 sm:w-50 md:w-96 mb-5"
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-500 mb-5 text-white bg-black rounded"
              onClick={handleSearch}
              disabled={!searchInput.trim()}
            >
              Search
            </button>
          </div>
        </div>

        <div className="sm:ml-0 md:ml-0 lg:ml-24 flex flex-wrap">
          {renderedNeighbours}
        </div>
      </Layout>
    </div>
  );
};

export default Neighbours;
