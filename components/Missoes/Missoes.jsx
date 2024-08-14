import Navmenu from "../Navbar/Navmenu"
import '../meu-perfil/Perfil/Perfil'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"

import Laudos from "./Laudos"
import Postura from "./Postura"
import Veiculo from "./Veiculo"
import Assiduidade from "./Assiduidade"
import QualityProgressIcon from "./QualityProgresso/QualityProgressIcon"

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg" 
import flechaEsquerda from "/img/svgs/Flecha-direita.svg" 
import flechaDireita from "/img/svgs/flecha-esquerda.svg" 

import { useState, useEffect, useContext} from 'react'

import '../Missoes/missoes.css'
import '../pages/pages.css'
import LogoutButton from "../userSessions/Logout/LogoutButton"
import { Tooltip } from 'react-tooltip'
    

export default function Missoes ({ serverIP }) {
    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }


    const [TDNA, setTDNA] = useState('');
    const [IFI, setIFI] = useState('');
    const [IRR, setIRR] = useState('');
    const [FISCALIZACAO, setFISCALIZACAO] = useState('');
    const [DATA, setDATA] = useState('')
    const [FISCALIZACAO1, setFISCALIZACAO1] = useState('');
    const [DATA1, setDATA1] = useState('')
    const [FISCALIZACAO2, setFISCALIZACAO2] = useState('');
    const [DATA2, setDATA2] = useState('')

    const FISCALIZACAOnull = "null";
     

    useEffect(() => {
      async function pegarDadosQualidade() {
          try {
              const response = await fetch(`${serverIP}/indicadores`, { 
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }           
            });
              const data = await response.json();
              //console.log(data)
              setTDNA(data[0].TDNA);
              sessionStorage.setItem('usertdna', data.TDNA)
              setIFI(data[0].IFI);
              sessionStorage.setItem('userifi', data.IFI)
              setIRR(data[0].IRR);
              sessionStorage.setItem('userirr', data.IRR)
            //   console.log(data);
          } catch (error) {
              console.log('Erro ao buscar dados', error);
          }
      }
      pegarDadosQualidade();
  }, [serverIP]);

  useEffect(() => {
    async function pegarDadosFiscalizacao() {
        try {
            const response = await fetch(`${serverIP}/avaliacao/user`, { 
              method: 'GET', 
              headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token
              }           
          });
            const data = await response.json();

            setFISCALIZACAO(data[0].FISCALIZACAO);
            sessionStorage.setItem('userfiscalizacao', data.FISCALIZACAO)
            setDATA(data[0].DATA)
            sessionStorage.setItem('veiculodata', data.DATA)
            setFISCALIZACAO1(data[1].FISCALIZACAO);
            sessionStorage.setItem('userfiscalizacao1', data.FISCALIZACAO)
            setDATA1(data[1].DATA)
            sessionStorage.setItem('veiculodata', data.DATA)
            setFISCALIZACAO2(data[2].FISCALIZACAO);
            sessionStorage.setItem('userfiscalizacao2', data.FISCALIZACAO)
            setDATA2(data[2].DATA)
            sessionStorage.setItem('veiculodata', data.DATA)

            // console.log(data);
        } catch (error) {
            console.log('Erro ao buscar dados', error);
        }
    }
    pegarDadosFiscalizacao();
}, [serverIP]);

 
  return (
      <>
          <Navmenu serverIP={serverIP}/>
          <div className="todocontainer">
              <BoxPerfil serverIP={serverIP}/>
              <div id="paginamissoes">
                  <h2 className="titulodapagina">Missões</h2>
                  <LogoutButton />
              </div>

              <div className="temporada-atual">
                <img className = "voltar-temporadas" src={flechaDireita} />
                <h5> Temporada 2 (Maio - Julho/ 2024)</h5>
                <img className = "voltar-temporadas" src={flechaEsquerda}/>
              </div>

              <Laudos serverIP={serverIP}/>
              <div className="todo">
                  <div className="atributodeavaliacao">
                      <h3>Qualidade</h3>
                      <img className="check" src={check} />+250
                      <img className="moeda-roxa" src={coin} />+250 EXP
                  </div>
              </div>
              <div className="todo">
                  <h5 className="atribuicao">TDNA:<QualityProgressIcon value={TDNA} realMax="5" referenceValue="5" /></h5>
              </div>
              <div className="todo">
                  <h5 className="atribuicao">IFI: <QualityProgressIcon value={IFI} referenceValue="1" percent="true" style={{ backgroundColor: IFI >= 1 ? 'blue' : 'yellow' }} /></h5>
              </div>
              <div className="todo">
                  <h5 className="atribuicao">IRR: <QualityProgressIcon value={IRR} referenceValue="1" percent="true" /></h5>
              </div>


              <div className="todo">
                  <h5 className="atribuicao">Fiscalização</h5>
                  <div                
                    data-tooltip-id="tooltipdata"
                    data-tooltip-content={status ? status : DATA}
                    data-tooltip-place="top"> {FISCALIZACAO === true ? (
                    <button className="finish-todo"></button>) : 
                    FISCALIZACAO === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}</div>

                    <div                
                    data-tooltip-id="tooltipdata"
                    data-tooltip-content={status ? status : DATA1}
                    data-tooltip-place="top"> {FISCALIZACAO1 === true ? (
                    <button className="finish-todo"></button>) : 
                    FISCALIZACAO1 === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}</div>

                    <div                
                    data-tooltip-id="tooltipdata"
                    data-tooltip-content={status ? status : DATA2}
                    data-tooltip-place="top"> {FISCALIZACAO2 === true ? (
                    <button className="finish-todo"></button>) : 
                    FISCALIZACAO2 === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}</div>

                    <Tooltip id="tooltipdata" />

                  {/* {FISCALIZACAOnull === 'null' ? <button className="null"></button> : 
                  <NotNullButton FISCALIZACAO={FISCALIZACAOnull} />} */}
              </div>
              <Postura serverIP={serverIP}/>
              <Veiculo serverIP={serverIP} />
              <Assiduidade serverIP={serverIP}/>
          </div>
      </>
  );
}

function NotNullButton({ FISCALIZACAO }) {
  return (
      <>
          {FISCALIZACAO ? <button className="finish-todo"></button> : <button className="remove-todo"></button>}
      </>
  );
}

{/*                   
                <div id="toolbar">
                        <h3>Filtrar: <i className="fa-solid fa-list-check"></i></h3>
                            
                        <select id="filter-select">
                            <option value="all">Todos</option>
                            <option value="done">Feito</option>
                            <option value="todo">A fazer</option>
                            <option value="todo">Incompleto</option>
                        </select>
                </div> */}
