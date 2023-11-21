// import '../../../../styles/styles.scss';
import '../../../styles/styles.scss';

import waveblue from '../../../images/wave-blue-light.png'
import Header from '../../../components/Header';
import Sliders from '../../../components/Sliders';
import react from 'react'

function SlidingWindow() {

    return (
      <div className="slidingWindow">
        <div>
        <Header />
        <Sliders />
        </div>
        <h1>This is SlidingWindow</h1>
        <div className='image'>
        <img src={waveblue} alt="" className="waveBlueLine"/>
        </div>       
      </div>
    )
}
export default SlidingWindow
