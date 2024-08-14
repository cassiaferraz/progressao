import { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import Navmenu from '../Navbar/Navmenu'
import LogoutButton from '../userSessions/Logout/LogoutButton'

import '../Desafios/desafios.css'
import "../Navbar/navmenu.css"

import BoxPerfil from '../meu-perfil/BoxPerfil/BoxPerfil'

import coin from "/img/svgs/moedaroxa.svg"


export default function Desafios ({serverIP}) {
    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }

    //FECH DESAFIOS
    const [ID_DESAFIOS, setID_DESAFIOS] = useState('')
    const [NOME_DESAFIOS, setNOME_DESAFIOS] = useState('')
    const [xp, setXp] = useState('')
    const [moedas, setMoedas] = useState('')
    const [descricao, setDescricao] = useState('')
   

   useEffect(() => {
 
     async function pegarDadosDesafios(){
       try {
         const response = await fetch (`${serverIP}/desafios`, {method: 'GET'
       // headers:{
       //   'Content-Type': 'application/json',
       //     }
         })
 
         const data = await response.json()
         // setTecnico(data[0].tecnico.ID_TECNICO);
         setID_DESAFIOS(data[0].ID_DESAFIOS)
         
         setNOME_DESAFIOS(data[0].NOME_DESAFIOS);
         setXp(data[0].XP);
         setMoedas(data[0].MOEDAS);
         setDescricao(data[0].DESCRICAO);
 
         console.log(data)
         console.log(data[0])
      } catch (error){
        console.log('Erro ao buscar dados',error)
        }
 
      
     }
     pegarDadosDesafios({serverIP});
 
   }, [serverIP])


    return (
    <div className="todocontainer">
          <Navmenu />
          <BoxPerfil serverIP={serverIP}/>

          <div id="pag-desafios">
                <div id="sair-app">
                        <h2 className="titulodapagina">Meus Desafios</h2>
                        <LogoutButton />
                </div>

             <div className='coluna-tabela-desafios'>
                    <li>Desafios</li>
                    <li>Moedas</li>
                    <li>XP</li>
             </div>

                <div className='corpodatabela-desafios'>
                    <div className='linha-tabela-desafios'>
                        <h4                     
                        data-tooltip-id="nomeItem"
                        data-tooltip-content={status ? status : 'Mentalidade de Crescimento'}
                        data-tooltip-place="top">Mentalidade de Cresc...</h4>
                        <Tooltip id="nomeItem" />
                        <div>
                          <p>300 <img className= "moeda-roxa" src={coin} /></p>                          
                        </div>
                        <div>
                         <p>+250 EXP</p>     
                        </div>
                    </div>
                    <p>Apresentar certificado de algum curso; worshop; palestra ou atividades realizadas em 2024. </p>

                    <div className='linha-tabela-desafios'>
                        <h4>Empático</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                <p>+250 EXP</p>
                            </div>
                    </div>
                     <p>Pesquise sobre e pratique a escuta ativa e empatia cognitiva</p>

                     <div className='linha-tabela-desafios'>
                        <h4>Questionador</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                <p>+250 EXP</p>
                            </div>
                    </div>
                     <p>Deve propor novas formas de fazer as coisas, 
                        questione as práticas atuais da empresa e buscar soluções inovadoras</p>

                        <div className='linha-tabela-desafios'>
                        <h4>Curiosidade</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                <p>+250 EXP</p>
                            </div>
                        
                    </div>
                     <p>Elaborar um projeto inovador que resolva um problema real, ou gere oportunidade de negócio.
                        Também pode ser sugestão de produtos, serviços, 
                        ou tecnologias que poderiam ser realizados pela equipe Elite.</p>

                        <div className='linha-tabela-desafios'>
                        <h4>Ambidestria</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                <p>+250 EXP</p>
                            </div>
                        
                    </div>
                     <p>Apresentar algum certificado desse ano de algum curso, workshop, 
                        palestra ou atividade que não esteja relacionada com suas atividades atuais no trabalho.</p>

                        <div className='linha-tabela-desafios'>
                        <h4>Agil e Eficiente</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                 <p>+250 EXP</p>
                            </div>
                       
                    </div>
                     <p>Crie uma lista de todas as tarefas e pendências 
                        que você possui das suas atividades</p>

                        <div className='linha-tabela-desafios'>
                        <h4>Conectado</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                 <p>+250 EXP</p>
                            </div>
                       
                    </div>
                     <p>Participe de um programa de voluntariado para conhecer novas pessoas. 
                        Ou envie uma mensagem para um colega de trabalho que foi importante pra você, 
                        e que faz algum tempo que não se falam, diga que está fazendo participando dessa dinâmica</p>

                        <div className='linha-tabela-desafios'>
                        <h4>Protagonista</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                <p>+250 EXP</p>
                            </div>
                        
                    </div>
                     <p>pegar contato de pessoas que podem te 
                        ajudar e ser independente, exemplo: comercial,implantação, etc. Você irá acioná-los quando for necessário</p>

                        <div className='linha-tabela-desafios'>
                        <h4>Corajoso</h4>
                            <div>
                             <p>300 <img className= "moeda-roxa" src={coin} /></p>           
                            </div>
                            <div>
                                 <p>+250 EXP</p>
                            </div>
                       
                    </div>
                     <p>Você irá liderar uma instalação/projeto, enquanto o colega irá te auxiliar nas demandas.</p>
                </div>

          </div>
    </div>

        )
}