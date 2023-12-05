import '../../../styles/styles.scss';
import waveblue from '../../../images/wave-blue-light.png'
import Header from '../../../components/Header';
import Sliders from '../../../components/Sliders';
import react from 'react'

function PatioSliderDoor() {

    return (
      <div className="patioSliderDoor">
        <div>
        <Header />
        <Sliders />
        </div>
        <h1>This is Patio Slider Door</h1>
        <div className='image'>
        <img src={waveblue} alt="" className="waveBlueLine"/>
        </div>       
      </div>
    )
}
export default PatioSliderDoor
