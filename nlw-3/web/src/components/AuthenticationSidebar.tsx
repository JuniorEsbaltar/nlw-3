import React from 'react';
import '../styles/components/authentication-sidebar.css'
import logoIMG from '../imgs/logo-tipo.svg'

function AuthenticationSidebar() {
  return (
    <aside className="authentic-sidebar">
      <div className="logo-tipo">
        <img src={logoIMG} alt="LogoHappy"/>
      </div>
      <div className="location">
        <strong>Anápolis</strong>
        <span>Goiás</span>
      </div>
    </aside>
  );
}

export default AuthenticationSidebar;