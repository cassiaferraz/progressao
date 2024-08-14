import usuario from '/img/svgs/avatarfeminino.png';
import novoAvatar from '/img/svgs/avatarmasculino.png';
import BarraProgresso from '../Progresso/BarraProgresso'
import coin from '/img/svgs/Dolar_Dinero_Moneda_1Light.svg'


import { Link } from 'react-router-dom'
 import { useState, useEffect} from 'react'

import '../BoxPerfil/boxperfil.css'


export const handleAvatarChange = (currentAvatar, setAvatar, defaultAvatar, newAvatar) => {
  const newAvatarState = currentAvatar === defaultAvatar ? newAvatar : defaultAvatar;
  setAvatar(newAvatarState);
  sessionStorage.setItem('avatar', newAvatarState);
};


function BoxPerfil ({ serverIP }) {
   // const [notificationCount, setNotificationCount] = useState(0); 
  const [nivel, setNivel] = useState('')
  const [xp, setXp] = useState('')
  const [moedas, setMoedas] = useState('')
  const [userName, setUsername] = useState('')
  const [avatar, setAvatar] = useState(sessionStorage.getItem('avatar') || usuario);

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${serverIP}/getUserData`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }
        });
        const data = await response.json();
        setUsername(data.NOME);
        sessionStorage.setItem('username', data.NOME);
        setMoedas(data.MOEDAS);
        sessionStorage.setItem('usermoedas', data.MOEDAS);
        setNivel(data.NIVEL);
        sessionStorage.setItem('usernivel', data.NIVEL);
        setXp(data.XP);
        sessionStorage.setItem('userxp', data.XP);
      } catch (error) {
        console.log('Erro ao buscar os dados:', error);
      }
    }
  
    fetchData();
  }, [serverIP]);


  // const handleNotificationClick = () => {
      
  //     setNotificationCount(notificationCount + 1);
  // };

 return(
  <div>
  <Link to="/Perfil" style={{ textDecoration: 'none' }}>
      <header className="header-perfil">
          <img className="icon-usuario" src={avatar} alt="usuario" 
          onClick={() => handleAvatarChange(avatar, setAvatar, usuario, novoAvatar)}/>
          <div className="info">
              <div className="nome-e-nivel">
              <h2 className="subinfo typing-effect">{userName}</h2>
                  <h4 className="subinfo">Nível {nivel}</h4>
              </div>
              <div className='subinfo-progresso'>
                  <h4 className="subinfo">EXP </h4>
                   <BarraProgresso xp={xp} />
              </div>
              <div className="coin-valor">
                  <img className='coin' src={coin} alt="Ícone de Moedas" />
                  {moedas}
              </div>
          </div>
      </header>
  </Link>
 
</div>
);
}

 export default BoxPerfil
