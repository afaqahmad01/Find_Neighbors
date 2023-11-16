import { Route, Routes } from "react-router-dom";
import Profile from "./Project/Profile";
import Countries from "./Project/Countries";
import Neighbours from "./Project/Neighbours";
import About from "./Project/About";
import Contact from "./Project/Contact";
import { useState } from "react";
import HomePage from "./Project/Home";
import CountryDetail from "./Project/CountryDetails";
import {
  ABOUT,
  CONTACT,
  COUNTRIES,
  COUNTRIESDETAILS,
  NEIGHBORS,
  PROFILEDETAILS,
} from "./Project/Consants/Links";

const Router = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className="w-[98vw]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={PROFILEDETAILS} element={<Profile />} />
          <Route path={COUNTRIES}>
            <Route index element={<Countries />} />
            <Route
              path="countriesdetails/:name/:id"
              element={<CountryDetail />}
            />
          </Route>
          <Route path={NEIGHBORS}>
            <Route index element={<Neighbours />} />
            <Route
              path="countriesdetails/:name/:id"
              element={<CountryDetail />}
            />
          </Route>
          <Route path={ABOUT} element={<About />} />
          <Route path={CONTACT} element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
