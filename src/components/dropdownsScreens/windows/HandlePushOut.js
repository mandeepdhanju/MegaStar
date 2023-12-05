import "../../../styles/styles.scss";
import waveblue from "../../../images/wave-blue-light.png";
import Header from "../../Header";
import Sliders from "../../Sliders";
import react from "react";
import Zebra from "../../../images/Blinds/ZebraShade.jpg";
function HandlePushOut() {
  return (
    <div className="lipBarScreen">
      <div>
      <Header />
      <Sliders />
      </div>
      <h1>This is Handle Push Out page</h1>
      <div className='image'>
      <img src={waveblue} alt="" className="waveBlueLine"/>
      </div>       
    </div>
  )
}
export default HandlePushOut;
