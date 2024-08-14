import React, { useState } from 'react';

import "./register_style.css"

import BackArrow from "/img/svgs/voltar.svg"

import RegisterForm from '../../userSessions/RegisterForm/RegisterForm';

function Register({serverIP}) {

    return (

        <div className='body-container'>

            <div className="register-container">
              
                <a href="/perfil">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>
                <div className='subtitulo-cadastro'>

                </div>
                <RegisterForm serverIP={serverIP}/>

            </div>
        </div>
    );
}

export default Register;
