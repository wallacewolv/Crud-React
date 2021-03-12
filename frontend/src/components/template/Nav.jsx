import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/template/Nav.css'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar para componente depois como NavItem os icones */}
      <Link to="/">
        <i class="fa fa-home" aria-hidden="true"></i> Início
      </Link>
      <Link to="/users">
        <i class="fa fa-users" aria-hidden="true"></i> Usuários
      </Link>
    </nav>
  </aside>