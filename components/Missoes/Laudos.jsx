import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

import { useState, useEffect} from 'react'
import { Tooltip } from 'react-tooltip'
 
export default function Laudos({serverIP}) {
      const [LAUDOS_PREENCHIDOS, setLAUDOS_PREENCHIDOS] = useState('');
      const [LAUDOS_PREENCHIDOS1, setLAUDOS_PREENCHIDOS1] = useState('');
      const [LAUDOS_PREENCHIDOS2, setLAUDOS_PREENCHIDOS2] = useState('');
      const [DATA, setDATA] = useState('')
      const [DATA1, setDATA1] = useState('')
      const [DATA2, setDATA2] = useState('')

      const LAUDOS_PREENCHIDOSnull = "null";

      const token = sessionStorage.getItem('token')

      useEffect(() => {
        async function pegarDadosLaudos() {
          try {
            const response = await fetch(`${serverIP}/avaliacao/user`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }          
            });

            const data = await response.json();
            // console.log(data)
            setLAUDOS_PREENCHIDOS(data[0].LAUDOS_PREENCHIDOS);
            sessionStorage.setItem('userlaudo', data.LAUDOS_PREENCHIDOS)

            setLAUDOS_PREENCHIDOS1(data[1].LAUDOS_PREENCHIDOS);
            sessionStorage.setItem('userlaudo1', data.LAUDOS_PREENCHIDOS)

            setLAUDOS_PREENCHIDOS2(data[2].LAUDOS_PREENCHIDOS);
            sessionStorage.setItem('userlaudo2', data.LAUDOS_PREENCHIDOS)

            setDATA(data[0].DATA);
            sessionStorage.setItem('data', data.DATA)
            setDATA1(data[1].DATA);
            sessionStorage.setItem('data', data.DATA)
            setDATA2(data[2].DATA);
            sessionStorage.setItem('data', data.DATA)
          } catch (error) {
            console.log('Erro ao buscar dados', error);
          }
        }

        pegarDadosLaudos();
      }, [serverIP]);

      return (
        <>
          <div className="todo">
            <div className="atributodeavaliacao">
              <h3>Laudos</h3>
              <img className="check" src={check} />
              +100<img className="moeda-roxa" src={coin} /> +100 EXP
            </div>
          </div>

          <div className="todo">
            <h5 className="atribuicao">Preenchidos</h5>
            
            <div                
            data-tooltip-id="laudos"
            data-tooltip-content={status ? status : DATA}
            data-tooltip-place="top">{LAUDOS_PREENCHIDOS === true ? (
              <button className="finish-todo"></button>) : 
              LAUDOS_PREENCHIDOS === false ? 
              (<button className="remove-todo"></button>) : 
              (<button className="null"></button>)} </div>
           
                        
            <div                
            data-tooltip-id="laudos"
            data-tooltip-content={status ? status : DATA1}
            data-tooltip-place="top">{LAUDOS_PREENCHIDOS1 === true ? (
              <button className="finish-todo"></button>) : 
              LAUDOS_PREENCHIDOS1 === false ? 
              (<button className="remove-todo"></button>) : 
              (<button className="null"></button>)}</div>
            

            <div                
            data-tooltip-id="laudos"
            data-tooltip-content={status ? status : DATA2}
            data-tooltip-place="top">{LAUDOS_PREENCHIDOS2 === true ? (
              <button className="finish-todo"></button>) : 
              LAUDOS_PREENCHIDOS2 === false ? 
              (<button className="remove-todo"></button>) : 
              (<button className="null"></button>)}  </div>
                                                  
            <Tooltip id="laudos" />

            {/* {(LAUDOS_PREENCHIDOSnull == 'null') ? <button className="null"></button> : <NotNullButton LAUDOS_PREENCHIDOS={LAUDOS_PREENCHIDOSnull}/>} */}

          </div>
              {/* <div className="todo">
                <div id="botao-laudospendentes">
                  <a style={{ textDecoration: 'none' }} href="laudospendentes">
                      Laudos Pendentes
                  </a>
                </div>           
              </div> */}

        </>
      );
    }
