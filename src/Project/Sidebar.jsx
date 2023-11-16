import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COUNTRIES, NEIGHBORS } from "./Consants/Links";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const location = useLocation();

  return (
    <div className={`sm:h-screen md:h-screen lg:h-screen bg-sideBarColor`}>
      <div className={`lg:w-[14vw] lg:pl-[10px] sm:ml-0 text-xl`}>
        <Link to="/">
          <h4
            onClick={() => {
              setOpen(!open);
              setHide(!hide);
            }}
            className={`sm:text-[12px] lg:text-[20px] lg:block mt-[0] lg:mb-[10px] lg:ml-[5px] sm:ml-[5px] hover:text-blue ${
              location.pathname == "/" && "text-red-400"
            }`}
          >
            Home
          </h4>
        </Link>
        <div>
          <Link to={COUNTRIES}>
            <h4
              onClick={() => {
                setOpen(!open);
                setHide(!hide);
              }}
              className={` sm:text-[12px] lg:text-[20px] sm:leading-none  lg:block mt-[20px]  lg:ml-[5px] sm:ml-[5px] hover:text-blue ${
                location.pathname === "/countries" && "text-red-400"
              }`}
            >
              All Countries
            </h4>
          </Link>
        </div>
        <div>
          <Link to={NEIGHBORS}>
            <h4
              onClick={() => {
                setOpen(!open);
                setHide(!hide);
              }}
              className={` sm:text-[12px] lg:text-[20px] sm:leading-none lg:block mt-[30px]   lg:ml-[5px] sm:ml-[5px] hover:text-blue ${
                location.pathname === "/neighbours" && "text-red-400"
              }`}
            >
              Find Neighbours
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
