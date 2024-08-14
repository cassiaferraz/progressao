import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Desafios from '../components/Desafios/Desafios';
import Perfil from "../components/meu-perfil/Perfil/Perfil";
import Missoes from '../components/Missoes/Missoes';
import Recompensas from '../components/Recompensas/Recompensas';
import Login from "../components/pages/Login/Login";
import Update from "../components/pages/Update/Update"
import Config from '../components/meu-perfil/Config/Config'
import LaudosPendentes from "../components/meu-perfil/LaudosPendentes/LaudosPendentes";
import AutoAvaliacao from "../components/meu-perfil/Habilidades/AutoAvaliacao/AutoAvaliacao";
import PreenchimentoLaudo from '../components/meu-perfil/LaudosPendentes/PreenchimentoLaudo'
import BoxPerfil from "../components/meu-perfil/BoxPerfil/BoxPerfil";

export default function Router() {
    
    const port = '3000'
    const ipAddress = 'localhost';
    const serverIP = `http://${ipAddress}:${port}`;

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login serverIP={serverIP} />} />
                    <Route path="/Missoes" element={<Missoes serverIP={serverIP} />} />
                    <Route path="/Desafios" element={<Desafios serverIP={serverIP} />} />
                    <Route path="/Recompensas" element={<Recompensas serverIP={serverIP}/>} />
                    <Route path="/Perfil" element={<Perfil serverIP={serverIP} />} />
                    <Route path="/Update" element={<Update serverIP={serverIP} />} />
                    <Route path="/BoxPerfil" element={<BoxPerfil serverIP={serverIP} />} />
                    <Route path="/Config" element={<Config serverIP={serverIP}/>} />
                    <Route path="/LaudosPendentes" element={<LaudosPendentes serverIP={serverIP} />} />
                    <Route path="/PreenchimentoLaudo" element={<PreenchimentoLaudo serverIP={serverIP} />} />
                    <Route path="/AutoAvaliacao" element={<AutoAvaliacao serverIP={serverIP} />} />
                </Routes>
            </BrowserRouter>
    )
}

