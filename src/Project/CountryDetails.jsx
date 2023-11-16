import { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { Link, useLocation, useParams } from "react-router-dom";
import { BACKWARD_IMAGE } from "./Consants/Consant";

const CountryDetail = () => {
  const { id, name } = useParams();
  const loc = useLocation();
  const link = loc.pathname.split("/")[1];
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const NODATA = "No Data Available";

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/${name}/${id}/`
      );
      if (response.ok) {
        const data = await response.json();
        setCountries(data);
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

  return (
    <>
      <Layout>
        <Link to={`/${link}`}>
          <img src={BACKWARD_IMAGE} alt="" className="w-12 h-12 ml-4 " />
        </Link>
        <div className="flex">
          <div className="flex flex-wrap w-[80vw] sm:ml-[1%] md:ml-[5%] lg:ml-[5%]">
            {isLoading ? (
              <div className="sm:p-2 md:p-3 sm:mt-2 md:m-2 md:ml-[10%] sm:ml-6">
                Loading........
              </div>
            ) : (
              countries.map((country, key) => (
                <div className="sm:p-2 md:p-3  sm:mt-2 md:m-2 md: lg: sm:ml-6 sm:w-[80vw] md:w-[50vw] lg:w-[300px]">
                  <img
                    src={country.flags.png}
                    alt=""
                    className="h-40 border border-black w-full"
                  />
                  <br />
                  <strong>Name:</strong>{" "}
                  {country.name.common ? country.name.common : NODATA}
                  <br />
                  <strong>Official Name:</strong>{" "}
                  {country.name.official ? country.name.official : NODATA}
                  <br />
                  <strong>Continent:</strong>{" "}
                  {country.continents ? country.continents : NODATA}
                  <br />
                  <strong>Capital:</strong>
                  {country.capital ? country.capital : NODATA}
                  <br />
                  <strong>Currencies:</strong>
                  {country.currencies
                    ? country.currencies &&
                      Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : NODATA}
                  <div className="break-all">
                    <strong>Location:</strong>
                    {country.maps
                      ? country.maps && country.maps.googleMaps
                      : NODATA}
                  </div>
                  <strong>Languages:</strong>
                  {country.languages
                    ? country.languages &&
                      Object.values(country.languages).map(Object).join(", ")
                    : NODATA}
                  <br />
                  <strong>Region:</strong>
                  {country.region ? country.region : NODATA}
                  <br />
                  <strong>Sub Region:</strong>
                  {country.subregion ? country.subregion : NODATA}
                  <br />
                  <strong>Neighbours:</strong>
                  {country.borders ? country.borders.join(", ") : NODATA}
                  <br />
                  <strong>Area:</strong> {country.area ? country.area : NODATA}
                  <br />
                  <strong>Population:</strong>
                  {country.population ? country.population : NODATA}
                  <br />
                  <strong>Time Zones:</strong>
                  {country.timezones ? country.timezones : NODATA}
                </div>
              ))
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CountryDetail;
