import React, { useState } from 'react';
import AuthenticationSidebar from '../components/AuthenticationSidebar';
import api from '../services/api';
import '../styles/global.css'
import '../styles/pages/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [completData, setCompletData] = useState(true);

  function handleEnterButton() {

    const data = { email, password }

    api.post('/users',data).then(response => {
      console.log(response);
    })
  }

  function handleInputData(e: HTMLInputElement) {

    e.type === 'email' ? setEmail(e.value) : setPassword(e.value);
    
    if(email !== '' && password !== ''){
      setCompletData(false);
    }else{
      setCompletData(true);
    }
  }
  return (
    <div className="login-page">
      <div className="side-login">
        <AuthenticationSidebar/>
      </div>
      
      <main>
        <div className="login-content">
          <h2>Fazer Login</h2>
          <span>E-mail</span>
          <input 
            type="email"
            value={email}
            onChange={e => {handleInputData(e.target)}}
          />

          <span>Senha</span>
          <input 
            type="password"
            value= {password}
            onChange={e => {handleInputData(e.target)}}
          />

          <div className="account-settings">
            <div>
              <input type="checkbox"/>
              <span>Lembrar-me</span>
            </div>
            <a href="/">Esqueci minha senha</a>
          </div>  

          <button
            type="submit" 
            onClick={handleEnterButton}
            className={completData ? '' : 'active'}
            disabled={completData}
          >
            Entrar
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login