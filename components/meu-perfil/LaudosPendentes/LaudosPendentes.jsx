import Navmenu from "../../Navbar/Navmenu"
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import { useState, useEffect } from "react"
import './laudospendentes.css'

import BackArrow from "/img/svgs/voltar.svg"

export default function LaudosPendentes() {
    // deve conter esse cod abaixo em todas as pag para exigir login
    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }

    const [data, setData] = useState ('');
    const [tipo, setTipo] = useState ('');
    const [cidade, setCidade] = useState ('');
    const [bairro, setBairro] = useState ('');

    useEffect 

    return (
        <div className="todocontainer">
            <BoxPerfil />
            <Navmenu />
            <div id="titulopagina">
                <a href="/perfil">
                    <img
                        className="btn-backPage"
                        src={BackArrow}
                        alt="Voltar"
                    />
                </a>
                <h2 className="titulodapagina">Laudos Pendentes</h2>
            </div>

            <div id="laudo-pendente">
                <ul className="cabecalho-tabelalaudo">
                    <li>Data</li>
                    <li>Tipo</li>
                    <li>Cidade</li>
                    <li>Bairro</li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="lista-pendente">
                    <li>10/06/2024</li>
                    <li>Instalação</li>
                    <li>São Paulo</li>
                    <li>Moema</li>
                    <a href="/PreenchimentoLaudo">
                    <button type="submit">Preencher</button></a>
                </div>

                <div className="lista-pendente">
                    <li>18/06/2024</li>
                    <li>Instalação</li>
                    <li>São Paulo</li>
                    <li>B. Funda</li>
                    <a href="/PreenchimentoLaudo">
                    <button type="submit">Preencher</button></a>
                </div>

                <div className="lista-pendente">
                    <li>19/06/2024</li>
                    <li>Reparo</li>
                    <li>São Paulo</li>
                    <li>Lapa</li>
                    <a href="/PreenchimentoLaudo">
                    <button type="submit">Preencher</button></a>
                </div>

                <div className="lista-pendente">
                    <li>19/06/2024</li>
                    <li>Reparo</li>
                    <li>São Paulo</li>
                    <li>Lapa</li>
                    <a href="/PreenchimentoLaudo">
                    <button type="submit">Preencher</button></a>
                </div>

                <div className="lista-pendente">
                    <li>19/06/2024</li>
                    <li>Reparo</li>
                    <li>São Paulo</li>
                    <li>B.  Funda</li>
                    <a href="/PreenchimentoLaudo">
                    <button type="submit">Preencher</button></a>
                </div>
            </div>
        </div>
    )
}