import '../styles/styles.scss';

import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';

function Doors() {

  return (
    <div className="doors">
      <div>
      <Header />
      <Sliders />
      </div>
      <h1>This is Door Page.</h1>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>       
    </div>
  )
}

export default Doors
