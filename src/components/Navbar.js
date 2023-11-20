
import React from 'react'
import "../styles/styles.scss"
import {Person, Mail} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import logo from '../images/MD1.png';
// import logo from '../images/logo2-250w.png';

function topbar({menuOpen, setMenuOpen}) {
  return (
    <header className={menuOpen ? 'topbar active' : 'topbar'} >
        <div className='header-wrapper'>
          <div className='header-left'>
            <div className="logo">
              <Link to="/">
                 <img src={logo} alt="Mandeep Dhanju" />
              </Link>
            </div>
            <div className='itemContainer phone-header'>
              <Person className='phone' />
              <span>+1 604 727 5761</span>
            </div>
            <div className='itemContainer email-header'>
              <Mail className='email' />
              <span>dhanju.mandeep92@gmail.com</span>
            </div>
            
          </div>
          <div className='header-right'>
            <div className="hamburger"onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
          </div>
        </div>
    </header>
  )
}

export default topbar







// import React from 'react'
// import {Person, Mail} from "@material-ui/icons"

// export default function topbar({ menuOpen, setMenuOpen}) {
//   return (
//         <div className={menuOpen ? 'topbar active' : 'topbar'} >
//         <div className='wrapper'>
//           <div className='left'>
//             <a href="" className='logo'>Logo.</a>  

//              <div className='itemContainer'>
//                <Person className='icon' />
//                <span>604 555 555</span>
//              </div>
//              <div className='itemContainer'>
//                <Mail className='icon' />
//                <span>mandy@gmail.com</span>
//              </div>

//           </div>
//           <div className='right'>
//             <div className="hamburger"onClick={()=>setMenuOpen(!menuOpen)}>
//               <span className='line1'></span>
//               <span className='line2'></span>
//               <span className='line3'></span>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

