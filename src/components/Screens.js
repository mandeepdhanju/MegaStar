import '../styles/styles.scss';
import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';
// import '../styles'
// my-app\src\styles\styles.scss

function Screens() {

    return (
      <div className="screens">
      <div>
      <Header />
      <Sliders />
      </div>
      <h1>This is Screens Page</h1>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>  
    </div>
    )
}

export default Screens
