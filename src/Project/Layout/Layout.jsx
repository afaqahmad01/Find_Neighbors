import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../Sidebar";
import SideBarMbl from "../SideBarMbl";

const Layout = ({ children }) => {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <div>
        <NavBar hide={hide} setHide={setHide} />
        <div className="flex ">
          <div className="flex sm:mt-[89px] md:mt-[104px] lg:mt-24">
            <div className="sm:hidden lg:block fixed">
              <SideBar />
            </div>
            <div className="sm:block lg:hidden sm:fixed">
              <SideBarMbl hide={hide} setHide={setHide} />
            </div>
            <div className="lg:ml-[100px] xl:ml-[280px] sm:ml-[20px] mt-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
