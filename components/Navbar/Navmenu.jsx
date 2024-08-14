import { Link } from 'react-router-dom'
import './navmenu.css'
import alvo from '/img/svgs/alvo.svg'
import Trofeu from '/img/svgs/trofeu.svg'
import desafios from '/img/svgs/desafios.svg'

import React, { useState } from 'react';


function Navmenu () {

    const [activePage, setActivePage] = useState(''); 
    const handleSetActive = (page) => {
      setActivePage(page); 
    };


    return (
        <div className='Navmenu'> 
            <li className='botoesdenavegacao' style={activePage == 'Missoes' ? { backgroundColor: 'rgb(178, 128, 204)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Missoes')}>
            
             <Link to= "/missoes" style={{ textDecoration: 'none' }}> 
             <img className= "icon" src={alvo} />Missões </Link>
            </li>

             <li className='botoesdenavegacao' style={activePage === 'Desafios' ? { backgroundColor: 'rgb(178, 128, 204)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Desafios')}>
            
              <Link to= "/Desafios" style={{ textDecoration: 'none' }}>
                 <img className= "icon"  src={desafios} />Desafios</Link>
             </li>

             <li className='botoesdenavegacao' style={activePage === 'Recompensas' ? { backgroundColor: 'rgb(178, 128, 204)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Recompensas')}>

              <Link to= "/Recompensas" style={{ textDecoration: 'none' }}> 
              <img className= "icon" src={Trofeu}/> 
                 Recompensas </Link>
             </li>
        </div>
    )
}

export default Navmenu
