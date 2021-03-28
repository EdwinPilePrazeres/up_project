import React, { useState } from "react";
import Footer from "../components/Footer";
import CustomizedTables from "../components/Investigations/Table";
import Navbar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/SideBar";

const Investigations = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CustomizedTables />
      {/* <Footer /> */}
    </>
  );
};

export default Investigations;
