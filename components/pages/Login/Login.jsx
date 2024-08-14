import { React } from 'react';

import './login.css'
import LoginForm from '../../userSessions/LoginForm/LoginForm';

function Login({serverIP}) {

    return (
        <div className='body-container'>
            
            <LoginForm serverIP={serverIP}/>
        </div>
    );
}

export default Login;
