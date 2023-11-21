import '../../../styles/styles.scss';

import waveblue from '../../../images/wave-blue-light.png'
import Header from '../../../components/Header';
import Sliders from '../../../components/Sliders';
import react from 'react'

function TiltTurnWindow() {

    return (
      <div className="tiltTurnWindow">
        <div>
        <Header />
        <Sliders />
        </div>
        <h1>This is TiltTurnWindow</h1>
        <div className='image'>
        <img src={waveblue} alt="" className="waveBlueLine"/>
        </div>       
      </div>
    )
}
export default TiltTurnWindow
