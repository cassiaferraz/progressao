import { useState, useEffect} from 'react'
import BoxPerfil from "../../BoxPerfil/BoxPerfil"
import Navmenu from '../../../Navbar/Navmenu'
import Swal from 'sweetalert2';
import '../../../pages/pages.css'
import './autoavaliacao.css'
import BackArrow from '/img/svgs/voltar.svg'
import { useParams } from 'react-router-dom'


export default function AutoAvaliacao({serverIP}) {

    const buttons = document.querySelectorAll('.btn');
    const token = sessionStorage.getItem('token')
    
    const technicianId = useParams();

    //const [technician, setTechnician] = useState(null)
    const [CONECTIVIDADE, setCONECTIVIDADE] = useState(0)
    const [CASA_INTELIGENTE, setCASA_INTELIGENTE] = useState(0)
    const [ELETRICA, setELETRICA] = useState(0)
    const [METALICO, setMETALICO] = useState(0)
    const [PABX_VOIP, setPABX_VOIP] = useState(0)
    const [AUDIO_VIDEO, setAUDIO_VIDEO] = useState(0)
    const [submited, setSubmited] = useState(false)


    //Modificando Data e Hora para o formato correto
    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    
    const currentDateTime = getCurrentDateTime();
    const formBodyData = {
        // technicianId: technicianId,
        CONECTIVIDADE: CONECTIVIDADE,
        CASA_INTELIGENTE: CASA_INTELIGENTE,
        ELETRICA: ELETRICA,
        METALICO: METALICO,
        PABX_VOIP: PABX_VOIP,
        AUDIO_VIDEO: AUDIO_VIDEO,
        DATA_HORA: currentDateTime
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     console.log(formBodyData)

    //     // setTechnician(null)
    //     setCONECTIVIDADE(null)
    //     setCASA_INTELIGENTE(null)
    //     setELETRICA(null)
    //     setMETALICO(null)
    //     setPABX_VOIP(null)
    //     setAUDIO_VIDEO(null)
    //     setSubmited(true)
    // }

    function handleSelection(event, setter, value, button) {
        event.preventDefault();
        setter(value)

        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
        } else {
            buttons.forEach((btn) => btn.classList.remove('selected'));
            button.classList.add('selected');
        }

    }

    const enviarDados = async () => {
        if (CONECTIVIDADE === 0 || CASA_INTELIGENTE === 0 || ELETRICA === 0 || METALICO === 0 || PABX_VOIP === 0 || AUDIO_VIDEO === 0) {
            Swal.fire({
                title: 'Erro!',
                text: 'Por favor, selecione uma opção para cada item antes de enviar.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        
            return;
        };
        
        try {

            console.log('Dados a serem enviados:', formBodyData);

            const response = await fetch(`${serverIP}/Auto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token':token
                },
                body: JSON.stringify(formBodyData),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Enviado!',
                    text: 'Clique em ok para voltar ao perfil',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {

                    window.location.href = '/perfil';
                });

            } else {
                console.error('Erro ao enviar os dados.');
            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };



    return (
        <div className="todocontainer">
            <BoxPerfil serverIP={serverIP}/>
            <Navmenu />
                <div id="titulopagina">
                    <a href="/perfil">
                        <img
                            className="btn-backPage"
                            src={BackArrow}
                            alt="Voltar"
                        />
                    </a>
                    <h2 className="titulodapagina">Auto Avaliação</h2>
                </div>

           <div id="tabela-autoavaliacao">

                        <div className='coluna-1-autoavaliacao'>
                            <h3></h3>
                            <h3>Conectividade</h3>
                            <h3>Casa Intelig</h3>
                            <h3>Áudio/Vídeo</h3>
                            <h3>Metálico</h3>
                            <h3>Elétrica</h3>
                            <h3>PABX</h3>
                        </div>
                        {technicianId && !submited && (
                    <>
                        <div className="valor-avaliacao">
                            <p>Não sei o que é</p>
                            <button
                                className={`btn ${CONECTIVIDADE === '0' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCONECTIVIDADE, '0')}>0</button>

                            <button
                                className={`btn ${CASA_INTELIGENTE === '0' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCASA_INTELIGENTE, '0')}>0</button>

                            <button
                                className={`btn ${AUDIO_VIDEO === '0' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setAUDIO_VIDEO, '0')}>0</button>

                            <button
                                className={`btn ${METALICO === '0' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setMETALICO, '0')}>0</button>

                            <button
                                className={`btn ${ELETRICA === '0' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setELETRICA, '0')}>0</button>

                            <button
                                className={`btn ${PABX_VOIP === '0' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setPABX_VOIP, '0')}>0</button>
                        </div>

                        <div className="valor-avaliacao">
                        <p>Sei o básico</p>
                        <button
                                className={`btn ${CONECTIVIDADE === '1' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCONECTIVIDADE, '1')}>1</button>

                            <button
                                className={`btn ${CASA_INTELIGENTE === '1' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCASA_INTELIGENTE, '1')}>1</button>

                            <button
                                className={`btn ${AUDIO_VIDEO === '1' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setAUDIO_VIDEO, '1')}>1</button>

                            <button
                                className={`btn ${METALICO === '1' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setMETALICO, '1')}>1</button>

                            <button
                                className={`btn ${ELETRICA === '1' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setELETRICA, '1')}>1</button>

                            <button
                                className={`btn ${PABX_VOIP === '1' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setPABX_VOIP, '1')}>1</button>
                        </div>

                        <div className="valor-avaliacao">
                        <p>Mexi algumas
                             vezes</p>
                             <button
                                className={`btn ${CONECTIVIDADE === '2' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCONECTIVIDADE, '2')}>2</button>

                            <button
                                className={`btn ${CASA_INTELIGENTE === '2' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCASA_INTELIGENTE, '2')}>2</button>

                            <button
                                className={`btn ${AUDIO_VIDEO === '2' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setAUDIO_VIDEO, '2')}>2</button>

                            <button
                                className={`btn ${METALICO === '2' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setMETALICO, '2')}>2</button>

                            <button
                                className={`btn ${ELETRICA === '2' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setELETRICA, '2')}>2</button>

                            <button
                                className={`btn ${PABX_VOIP === '2' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setPABX_VOIP, '2')}>2</button>
                        </div>

                        <div className="valor-avaliacao">
                        <p>Preciso de ajuda às vezes</p>
                        <button
                                className={`btn ${CONECTIVIDADE === '3' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCONECTIVIDADE, '3')}>3</button>

                            <button
                                className={`btn ${CASA_INTELIGENTE === '3' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCASA_INTELIGENTE, '3')}>3</button>

                            <button
                                className={`btn ${AUDIO_VIDEO === '3' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setAUDIO_VIDEO, '3')}>3</button>

                            <button
                                className={`btn ${METALICO === '3' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setMETALICO, '3')}>3</button>

                            <button
                                className={`btn ${ELETRICA === '3' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setELETRICA, '3')}>3</button>

                            <button
                                className={`btn ${PABX_VOIP === '3' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setPABX_VOIP, '3')}>3</button>
                        </div>

                        <div className="valor-avaliacao">
                        <p>Conheço bastante</p>
                        <button
                                className={`btn ${CONECTIVIDADE === '4' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCONECTIVIDADE, '4')}>4</button>

                            <button
                                className={`btn ${CASA_INTELIGENTE === '4' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCASA_INTELIGENTE, '4')}>4</button>

                            <button
                                className={`btn ${AUDIO_VIDEO === '4' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setAUDIO_VIDEO, '4')}>4</button>

                            <button
                                className={`btn ${METALICO === '4' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setMETALICO, '4')}>4</button>

                            <button
                                className={`btn ${ELETRICA === '4' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setELETRICA, '4')}>4</button>

                            <button
                                className={`btn ${PABX_VOIP === '4' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setPABX_VOIP, '4')}>4</button>
                        </div>

                        <div className="valor-avaliacao">
                        <p>Tenho domínio total</p>
                        <button
                                className={`btn ${CONECTIVIDADE === '5' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCONECTIVIDADE, '5')}>5</button>

                            <button
                                className={`btn ${CASA_INTELIGENTE === '5' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setCASA_INTELIGENTE, '5')}>5</button>

                            <button
                                className={`btn ${AUDIO_VIDEO === '5' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setAUDIO_VIDEO, '5')}>5</button>

                            <button
                                className={`btn ${METALICO === '5' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setMETALICO, '5')}>5</button>

                            <button
                                className={`btn ${ELETRICA === '5' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setELETRICA, '5')}>5</button>

                            <button
                                className={`btn ${PABX_VOIP === '5' ? 'selected' : ''}`}
                                onClick={(event) => handleSelection(event, setPABX_VOIP, '5')}>5</button>
                        </div>
                        </>
    )}
           </div>
           <div id="obs-enviar">
                <label>
                    <p>
                        Obs: Avalie seus conhecimentos técnicos com sinceridade,
                        eles serão utilizados para seu desenvolvimento pessoal e também
                        atribuição de atividades.
                    </p>
                </label>
                <button type="button" id="enviar-avaliacao" onClick={enviarDados}>Enviar</button>
            </div>
        </div>

    )
}