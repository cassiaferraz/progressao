import { Tooltip } from 'react-tooltip'
import Navmenu from "../Navbar/Navmenu"
import coin from '/img/svgs/moedaroxa.svg'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"

import '../Recompensas/recompensas.css'

export default function Recompensas ({serverIP}) {

    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }

    return(
        <div className="todocontainer">
            <Navmenu />
            <BoxPerfil serverIP={serverIP}/>
                <div className="tablerecompensas">
                <div className='coluna-tabela-recompensas'>
                    <li>Recompesa</li>
                    <li>Nível</li>
                    <li>Preço</li>
                    <li></li>
                    <li></li>
                </div>

                <div className='corpodatabela'>
                    <div className='linha-tabela-recompensa'>
                        <h4>Consultoria Excel</h4>
                        <p>Req. Nível 10</p>
                        <p>300 <img className= "moeda-roxa" src={coin} /></p>
                        <button className="solicitar-recompensa">Solicitar</button>
                    </div>
                    <div className='linha-tabela-recompensa'>
                        <h4                     
                        data-tooltip-id="nomeItem"
                        data-tooltip-content={status ? status : 'Consultoria'}
                        data-tooltip-place="top">Con. Casa Inteligente</h4>
                        <Tooltip id="nomeItem" />
                        <p>Req. Nível 10</p>
                        <p>300 <img className= "moeda-roxa" src={coin} /></p>
                        <button className="solicitar-recompensa">Solicitar</button>
                    </div>

                    <div className='linha-tabela-recompensa'>
                        <h4>Cons.Power Point</h4>
                        <p>Req. Nível 20</p>
                        <p>400 <img className= "moeda-roxa" src={coin} /></p>
                        <button className="solicitar-recompensa">Solicitar</button>
                    </div>

                    <div className='linha-tabela-recompensa'>
                        <h4> Quick Massage</h4>
                        <p>Req. Nível 25</p>
                        <p>500 <img className= "moeda-roxa" src={coin} /></p>
                        <button className="solicitar-recompensa">Solicitar</button>
                    </div>

                    <div className='linha-tabela-recompensa'>
                        <h4> Sala Gaming </h4>
                        <p>Req. Nível 30</p>
                        <p>600 <img className= "moeda-roxa" src={coin} /></p>
                        <button className="solicitar-recompensa">Solicitar</button>
                    </div>
                </div>

                </div>
        </div>
    )
}