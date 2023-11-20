import '../styles/styles.scss';

import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';
import bgimage from '../images/Blinds1.jpg'
import paraImg from '../images/3.jpg'
import react from 'react'

function AboutUs() {

    return (
      <div className="aboutUs">
        <div>
        <Header />
        <Sliders />
        </div>
        <h1>This is About (Add here any picture and some content whatever looks nice page for about, later I'll change it)

        </h1>
        <div className='image'>
        <img src={waveblue} alt="" className="waveBlueLine"/>
        </div>       
      </div>
    )
}
export default AboutUs
