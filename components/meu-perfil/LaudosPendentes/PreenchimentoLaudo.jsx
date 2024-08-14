import Navmenu from "../../Navbar/Navmenu"
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import './laudospendentes.css'

import BackArrow from "/img/svgs/voltar.svg"

export default function PreenchimentoLaudo() {

    return (
        <div className="todocontainer">
            <BoxPerfil />
            <Navmenu />
            <div id="titulopagina">
                <a href="/LaudosPendentes">
                    <img
                        className="btn-backPage"
                        src={BackArrow}
                        alt="Voltar"
                    />
                </a>
                <h2 className="titulodapagina">Preenchimento de Laudos</h2>
            </div>

            <div className="preenchimento-laudo">
                <div className="info-preenchimento-laudo">
                    <ul className="principais-dados-laudo">
                        <li>Data:</li>
                        <li>Tipo:</li>
                        <li>Cidade:</li>
                        <li>Bairro:</li>
                        <li>Detalhe:</li>
                    </ul>

                    <ul>
                        <li>10/06/2024</li>
                        <li>Instalação</li>
                        <li>São Paulo</li>
                        <li>Moema</li>
                        <li></li>
                    </ul>  
                </div>

                <hr />

                <form className="caixadetextolaudo">
                    <>
                    <label>Defeito</label>
                    <input className="inputlaudo" type="text" />
                    </>

                    <>
                    <label>Causa</label>
                    <input className="inputlaudo" type="text" />                    
                    </>

                    <>
                    <label>Solução</label>
                    <input className="inputlaudo" type="text" />                    
                    </>
                    <button type="submit">Preencher</button>
                </form>
            </div>

        </div>
    )
}