import { useState } from 'react';
import PasswordInput from '../PasswordInput/passwordInput';
//  import EmailInput from '../EmailInput/EmailInput';
import './updateForm_style.css';

 
function UpdateForm({ serverIP }) {
    // const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmedPassword, setUserConfirmedPassword] = useState("");
    const [resultRegex, setResultRegex] = useState(false);
    const [showDifferentPasswordsError, setShowDifferentPasswordsError] = useState(false);

    const token = sessionStorage.getItem('token')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        if (userPassword === userConfirmedPassword) {
            if (resultRegex) {
                try {
                    const response = await fetch(`${serverIP}/reset-password`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': token
                        },
                        body: JSON.stringify({  password: userPassword })
                    });
 
                    if (response.ok) {
                        window.location.href = "/missoes"; 
                    } else {
                        alert("Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.");
                    }
                } catch (error) {
                    console.error('Erro ao cadastrar:', error);
                    alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
                }
            }
 
            setShowDifferentPasswordsError(false);
            setUserConfirmedPassword("");
        } else {
            setShowDifferentPasswordsError(true);
            setUserConfirmedPassword("");
        }
    };
 
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-fields">

                <h4>Altere sua senha para ter acesso ao app!</h4>

                {/* <EmailInput
                    value={userEmail}
                    onChange={setUserEmail}
                /> */}
                <PasswordInput
                    placeholder={"Insira sua senha"}
                    state={userPassword}
                    onChange={setUserPassword}
                    showRegexError={true}
                    setResultRegex={setResultRegex}
                />
                <PasswordInput
                    placeholder={"Confirme sua senha"}
                    state={userConfirmedPassword}
                    onChange={setUserConfirmedPassword}
                    showRegexError={false}
                />
            </div>
            {showDifferentPasswordsError && (
                <div className="containerAlert">
                    <h4 className='differentPasswordsError'>Senhas divergentes!</h4>
                </div>
            )}
            <button type='submit'>Redefinir Senha</button>
        </form>
    );
}
export default UpdateForm;