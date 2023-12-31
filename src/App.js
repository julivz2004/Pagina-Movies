import publicity from './img/ea8461fe-ee50-4758-85c1-a2e1f490ac14___926b10cb53519828efec262e0e5a3adc.webp';

import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css';
import Product from './product/product';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faLocationDot, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';



function App() { 

  const bag=()=>{
   document.querySelector('body').style.overflow='hidden'
   document.getElementById('bag').style.display = 'block';
  }

  const MouseEnter=()=>{                    
      document.getElementById('submenu').style.display='block'
  }

  const openMenu=()=>{
    document.getElementById('menu').style.display="grid"
  }

  const closeMenu=()=>{
    document.getElementById('menu').style.display="none"
  }

  const closeSubmenu=()=>{
    document.getElementById('submenu').style.display="none"
  }
  
  return (
    <div>
      <header>
        <img src={publicity} alt="publicity" className='publicity'/>
        <nav>
          <div className='icon-bar' >
          <FontAwesomeIcon icon={faBars} onClick={openMenu} />
          </div>
         
          <div className='logo'>
            <img src='https://pbs.twimg.com/media/DUvTYQrWAAIPrQ-.jpg' alt="asdasd"/>
          </div>
            <ul className="menu" id='menu'>
              <div className='menu-close'>
                <p>¡HOLA!</p>
              <FontAwesomeIcon icon={faXmark}  className='cross-icon' onClick={closeMenu}/>
              </div>
                <li onMouseEnter={MouseEnter}><b>MUJER</b></li>
                <li><b>HOMBRE</b></li>
                <li><b>NUEVOS</b></li>
                <li><b>OFERTAS</b></li>
            </ul>
            <div className='icons'>
            <div className='message'><FontAwesomeIcon icon={faMessage} /></div>
            <div className='user'><FontAwesomeIcon icon={faUser} /></div>
            <div className='heart'><FontAwesomeIcon icon={faHeart} /></div>
            <div className='location'><FontAwesomeIcon icon={faLocationDot} /></div>
            <div className='shoping' onClick={bag}><FontAwesomeIcon icon={faBagShopping} /></div>
            </div>
            <div>
            </div>
        </nav>
        <div id='submenu' onMouseLeave={e=>{document.getElementById('submenu').style.display='none'}}>

        <div className='submenu-close'>
                <p>¡HOLA!</p>
              <FontAwesomeIcon icon={faXmark}  className='cross-icon' onClick={closeSubmenu}/>
              </div>

         <div className='categoria' >
            <h3>MUJER</h3>
            <p>Ver todo</p>
         </div>
        
        <ul>
            <li>Camisas</li>
            <li>Camisetas</li>
            <li>Pijamas</li>
            <li>Chaquetas y buzos</li>
            <li>Ropa Interior</li>
            <li>Joggers, pantalones y shorts</li>
            <li>Calzado</li>
            <li>Accesorios</li>
        </ul>
    </div>
    </header>
    <Product  />
    </div>

  );
}

export default App;
