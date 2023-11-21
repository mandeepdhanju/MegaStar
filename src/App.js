//import logo from './logo.svg';
//import Nav from './components/Nav';
import Header from './components/Header';
import './styles/styles.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sliders from './components/Sliders';
import Main from './components/Main';
// import About from './components/About';
import MediaPlayer from './components/MediaPlayer';
import Newsletter from './components/Newsletter';
import MoreInfo from './components/Moreinfo';
import Footer from './components/Footer';
import Blinds from './components/Blinds';
import AboutUs from './components/AboutUs';
import Doors from './components/Doors';
import Screens from './components/Screens';
import {useState} from "react";
import Contact from './components/Contact';
import Home from './components/Home';
import CompanyInfo from './components/CompanyInfo';
import BookConsultation from './components/BookConsultation';
import Curtains from './components/Curtains';
// import Windows from './components/Windows';
import ZebraBlinds from './components/dropdownsBlinds/ZebraBlinds';
import RollerBlinds from './components/dropdownsBlinds/RollerBlinds';
import FauxWoodBlinds from './components/dropdownsBlinds/FauxWoodBlinds';
import HoneyCombBlinds from './components/dropdownsBlinds/HoneyCombBlinds';
import ViennaBlinds from './components/dropdownsBlinds/ViennaBlinds';
import SolarBlinds from './components/dropdownsBlinds/SolarBlinds';

import HandlePushOut from './components/dropdownsScreens/windows/HandlePuchOut';
import LipBarScreen from './components/dropdownsScreens/windows/LipBarScreen';
import SlidingWindow from './components/dropdownsScreens/windows/SlidingWindow';
import TiltTurnWindow from './components/dropdownsScreens/windows/TiltTurnWindow';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <body>
    <BrowserRouter>
    <div>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    </div>
      <div className='wrapper'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="slider" element={<Sliders />} />
        <Route path="companyInfo" element={<CompanyInfo />} />       
        <Route path="main" element={<Main />} />
        <Route path="mediaPlayer" element={<MediaPlayer />} />
        <Route path="newsLetter" element={<Newsletter />} />
        <Route path="moreInfo" element={<MoreInfo />} />
        <Route path="footer" element={<Footer />} />
        <Route path="aboutUs" element={<AboutUs />} />

        <Route path="blinds" element={<Blinds />} />
        <Route path="zebraBlinds" element={<ZebraBlinds/>} />
        <Route path="rollerBlinds" element={<RollerBlinds />} />
        <Route path="fauxWoodBlinds" element={<FauxWoodBlinds />} />
        <Route path="honeyCombBlinds" element={<HoneyCombBlinds />} />
        <Route path="solarBlinds" element={<SolarBlinds />} />
        <Route path="ViennaBlinds" element={<ViennaBlinds />} />

        <Route path="screens" element={<Screens />} />
        {/* <Route path="doors" element={<Doors />} /> */}
        {/* <Route path="windows" element={<Windows />} /> */}

        <Route path="handlePushOut" element={<HandlePushOut />} />
        <Route path="lipBarScreen" element={<LipBarScreen/>} />
        <Route path="slidingWindow" element={<SlidingWindow />} />
        <Route path="tiltTurnWindow" element={<TiltTurnWindow />} />

        
        <Route path="curtains" element={<Curtains />} />    
        <Route path="contact" element={<Contact />} />
        <Route path="bookConsultation" element={<BookConsultation />} />
        </Routes>
       
      </div>
      <Footer />
    </BrowserRouter>
    </body>
  );
}

export default App;
