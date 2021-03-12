import React from 'react'

import '../../styles/template/Nav.css'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar para componente depois como NavItem os icones */}
      <a href="#/">
        <i class="fa fa-home" aria-hidden="true"></i> Início
      </a>
      <a href="#/users">
        <i class="fa fa-users" aria-hidden="true"></i> Usuários
      </a>
    </nav>
  </aside>