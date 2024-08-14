import { React } from 'react';

import './emailInput_style.css'

function EmailInput({onChange, value}) {
    return (
        <input 
            className='loginEmail-input'
            required
            type="email" 
            placeholder='Insira seu e-mail'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default EmailInput;