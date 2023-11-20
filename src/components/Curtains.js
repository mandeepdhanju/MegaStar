import '../styles/styles.scss';
import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';

function Curtains() {

  return (
    <div className="curtains">
      <div>
      <Header />
      <Sliders />
      </div>
      <h1>Customised Curtains (add some pictures and design them )</h1><br></br>
      <p>Open this link and design like this  //https://www.indekostudio.com.au/curtains/</p>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>       
    </div>
  )
}

export default Curtains
