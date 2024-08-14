import React, { useState } from 'react';

import "./register_style.css"

import BackArrow from "/img/svgs/voltar.svg"

import UpdateForm from '../../userSessions/UpdateForm/UpdateForm';

function Update({serverIP}) {

    return (

        <div className='body-container'>

            <div className="register-container">
              
                <a href="/missoes">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>
                <div className='subtitulo-cadastro'>

                </div>
                <UpdateForm serverIP={serverIP}/>

            </div>
        </div>
    );
}

export default Update;
