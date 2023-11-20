
import '../styles/styles.scss';
// import '../styles'
// my-app\src\styles\styles.scss
import waveblue from '../images//wave-blue-light.png'
import Header from '../components/Header';
import Sliders from '../components/Sliders';

function Windows() {

    return (
      <div className="windows">
        <div>
        <Header />
        <Sliders />
        </div>
        <h1>This is Window Page</h1>
        <div className='image'>
        <img src={waveblue} alt="" className="waveBlueLine"/>
        </div>       
      </div>
    )
}

export default Windows
