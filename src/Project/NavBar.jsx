import { Link, useLocation } from "react-router-dom";
import { ABOUT, CONTACT, PROFILEDETAILS } from "./Consants/Links";
import { useContext } from "react";
import AppContext from "./Context/AppContext";
import { LOGO, PROFILE_IMAGE } from "./Consants/Consant";
const NavBar = ({ hide, setHide }) => {
  const location = useLocation();
  const { userName } = useContext(AppContext);
  return (
    <>
      <div className="bg-burlyWood  lg:h-24 w-screen fixed !overflow-hidden">
        <ul className=" list-none">
          <li className="flex justify-between">
            <li className="flex">
              <img
                className="sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px]  lg:w-[90px] lg:h-[90px] p-[10px] sm:ml-[-7px] sm:mt-[5px]  rounded-full"
                src={LOGO}
                alt="Logo"
              />
              <li className="sm:text-[12px] sm:w-20 sm:mt-[20px] md:w-auto sm: ml-[-7px] md:text-[18px] md:mt-[28px]  lg:text-[25px]  lg:mt-[33px] text-word">
                <Link to="/" className="hover:text-brown">
                  Find Country Details
                </Link>
              </li>
            </li>
            <li className="w-30 flex sm:gap-1 md:gap-2">
              <li className=" sm:mt-[20px] sm:text-[12px] text-xl md:text-[18px] md:mt-[25px] lg:text-[25px] lg:mt-[38px] text-word ">
                <Link
                  to={ABOUT}
                  className={`hover:text-brown ${
                    location.pathname === "/about" && "text-red-400"
                  } `}
                >
                  About
                </Link>
              </li>
              <li className="sm:mt-[20px] sm:text-[12px] text-xl md:text-[18px] md:mt-[25px] lg:text-[25px] lg:mt-[38px] text-word ">
                <Link
                  to={CONTACT}
                  className={`hover:text-brown ${
                    location.pathname === "/contact" && "text-red-400"
                  }`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link to={PROFILEDETAILS}>
                  <div className="flex">
                    <div className="sm:mt-[20px] sm:text-[12px] mr-2 text-xl md:text-[18px] md:mt-[25px] lg:text-[25px] lg:mt-[38px] text-word ">
                      {userName}
                    </div>
                    <img
                      className="rounded-full sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] md:mt-[16px] lg:h-[60px] lg:w-[60px] lg:mt-[20px] sm:mt-[14px] sm:mr-1 md:mr-3 "
                      src={PROFILE_IMAGE}
                    />
                  </div>
                </Link>
              </li>
            </li>
          </li>
        </ul>
        <button
          className="sm:ml-[4px] md:ml-[10px] !h-[20px]"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <div className="border-[1px] border-black w-[15px]  mb-[2.5px] sm:block lg:hidden"></div>
          <div className="border-[1px] border-black w-[15px] mb-[3px] sm:block lg:hidden"></div>
          <div className="border-[1px] border-black w-[15px]  sm:block lg:hidden"></div>
        </button>
      </div>
    </>
  );
};

export default NavBar;
