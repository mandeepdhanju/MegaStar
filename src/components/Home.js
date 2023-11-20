import React, { useState } from "react";
import "../styles/styles.scss";

import Header from "./Header";
import Sliders from "./Sliders";
import Main from "./Main";
import CompanyInfo from "./CompanyInfo";
import MediaPlayer from "./MediaPlayer";
import Newsletter from "./Newsletter";
import MoreInfo from "./Moreinfo";

// import MoreInfo from './components/Moreinfo';


function Home(){
    return (

    <div className="home">
         <Header />
         <Sliders />
         <Main /> 
         <CompanyInfo />
         {/* <MediaPlayer /> */}
         {/* <Newsletter /> */}
         <MoreInfo /> 
     </div>
       

      
    );
}

export default Home;