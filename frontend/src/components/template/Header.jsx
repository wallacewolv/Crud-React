import React from 'react'

import '../../styles/template/Header.css'

export default props =>
  <header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
    <i class="fa fa-home" aria-hidden="true"></i> {props.title}
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
  </header>