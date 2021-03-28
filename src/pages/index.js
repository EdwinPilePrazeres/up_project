import React, {useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Sidebar from '../components/SideBar';
import VideoContainer from '../components/Home/VideoContainer';
import Nucleo from '../components/Home/Nucleo';
import InfoSection from '../components/Home/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Home/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        {/* <NavBar /> */}
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <VideoContainer />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Nucleo />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
