import Navmenu from "../../Navbar/Navmenu"
import Habilidades from '../Habilidades/Habilidades'
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import { Tooltip } from 'react-tooltip'

import { useState, useEffect } from "react";

import '../Perfil/perfil.css'
// import '../tabela.css'

import Ajustes from '/img/svgs/Ajustes.svg'
import Premio from '/img/svgs/Premio.svg'

import { Link } from "react-router-dom"

function Perfil ({serverIP}) {

    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }
    
    const [NOME_MEDALHAS1, setNOME_MEDALHAS1] = useState('')
    const [NOME_MEDALHAS2, setNOME_MEDALHAS2] = useState('')
    const [NOME_MEDALHAS3, setNOME_MEDALHAS3] = useState('')
    const [NOME_MEDALHAS4, setNOME_MEDALHAS4] = useState('')
   

    useEffect(() => {
 
        async function pegarDadosNomeMedalhas(){
          try {
            const response = await fetch (`${serverIP}/medalhas`, {method: 'GET'
          // headers:{
          //   'Content-Type': 'application/json',
          //     }
            })
 
            const data = await response.json()
            setNOME_MEDALHAS1(data[0].NOME_MEDALHAS)
            setNOME_MEDALHAS2(data[1].NOME_MEDALHAS)
            setNOME_MEDALHAS3(data[2].NOME_MEDALHAS)
            setNOME_MEDALHAS4(data[3].NOME_MEDALHAS)
         
            console.log(data[0].LAUDOS)
 
            console.log(data)
            console.log(data[0])
         } catch (error){
           console.log('Erro ao buscar dados',error)
           }
       }
       pegarDadosNomeMedalhas();
 
   }, [serverIP]);
 
 

     
   
    return (

     <div className="todocontainer">
         <Navmenu /> 
         <BoxPerfil serverIP={serverIP}/>
            
            <div id="titulo-config">
            <h2 className="titulodapagina">Meu Perfil</h2>
                <div id="config">
                    <Link to="/Config"  
                    data-tooltip-id="nomeItem"
                    data-tooltip-content={status ? status : 'Configurações'}
                    data-tooltip-place="top">
                    <img src={Ajustes} alt="config"/>
                   </Link> <Tooltip id="config" />
                </div>
            </div>
         <Habilidades serverIP={serverIP}/>
        
        
        <div className="tabela-medalhas-recompensas">
        
            <div className="cabecalho-medalhas">Medalhas</div>
             <div className="medalhas-adquiridas">
                <div className="coluna-medalhas">
                <img className= "icon-medalhas-perfil" src={Premio}/> 
                    <h4>{NOME_MEDALHAS1}</h4>
                    <p>Temporada 1</p>
                </div>

                 <div className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                   <h4>{NOME_MEDALHAS2}</h4>
                    <p>Temporada 1</p>
                 </div>
                
                 <div className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                    <h4>{NOME_MEDALHAS3}</h4>
                    <p>Temporada 2</p>
                 </div>
                  
                 <div  className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                   <h4>{NOME_MEDALHAS4}</h4>
                    <p>Temporada 3</p>
                </div> 
            </div>
        </div>
       
        {/* <div id="botao-laudospendentes">
        <a style={{ textDecoration: 'none' }} href="laudospendentes">
            Laudos Pendentes
        </a>
        </div> */}


     </div>
    )
}

export default Perfil