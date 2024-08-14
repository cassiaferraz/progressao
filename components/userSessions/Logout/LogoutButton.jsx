import './logout.css'

import React from 'react';

const handleLogout = () => {
    
    sessionStorage.removeItem('token'); 
    // sessionStorage.removeItem('username'); 

    window.location.href = '/'; 
};

function LogoutButton () {

    return (
        <button className= "logout" onClick={handleLogout}>Sair</button>
    );
};

export default LogoutButton;
