import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";

const Abiotics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Footer />
    </>
  );
};

export default Abiotics;
