import React from 'react'

import Header from './Header'
import '../../styles/template/Main.css'

export default props => 
  <React.Fragment>
    <Header {...props} />
    <main className="content">
      Conteúdo
    </main>
  </React.Fragment>