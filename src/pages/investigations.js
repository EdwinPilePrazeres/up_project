import React, {useState} from "react";
import Footer from '../components/Footer';
import Table from "../components/Investigations/Table";
import Navbar from '../components/NavBar';
import Sidebar from '../components/SideBar';

const Investigations = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Table/>
      <Footer />
    </>
  );
};

export default Investigations;
