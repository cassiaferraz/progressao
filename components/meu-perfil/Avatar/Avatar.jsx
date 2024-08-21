import BoxPerfil from "../BoxPerfil/BoxPerfil"
import Navmenu from "../../Navbar/Navmenu"

import React, { useState } from 'react';
import AvatarSelector from './AvatarSelector';

export default function Avatar ({serverIP}) {

    const [avatar, setAvatar] = useState(null);

    const handleAvatarSelect = (selectedAvatar) => {
      setAvatar(selectedAvatar);
      
      fetch('/api/set-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ avatar: selectedAvatar })
      });
    };
    return(
        <div className="todocontainer">
            <BoxPerfil serverIP={serverIP}/>  
                <div>
                    <h1>Selecione seu Avatar</h1>
                    <AvatarSelector onSelect={handleAvatarSelect} />
                    {avatar && <p>Avatar selecionado: {avatar}</p>}
                </div>
     </div>

 
    )
}