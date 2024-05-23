import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const LoginSignup = () => {
    
    const [action,setAction] = useState("Entrar");
    
    return ( 
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
               {action==="Entrar"?<div></div>: <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name"/>
                </div>}
               
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Senha"/>
            </div>
           </div>
           {action==="Cadastrar"?<div></div>:<div className="forgot-password">Esqueceu a senha? <span>Click aqui, vamos te ajudar!</span></div>}
        <div className="submit-container">
            <div className={action=="Entrar"?"submit gray":"submit"} onClick={()=>{setAction("Cadastrar")}}>Cadastrar</div>
            <div className={action=="Cadastrar"?"submit gray":"submit"} onClick={()=>{setAction("Entrar")}}>Entrar</div>
        </div>
        </div>
    )
};

export default LoginSignup