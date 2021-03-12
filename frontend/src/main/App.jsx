import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/dist/font-awesome.min.css'
import './styles/App.css'

export default props =>
  <div className="app">
    <Logo />
    <Nav />
    <Main 
      icon="home" 
      title="Início" 
      subtitle="Projeto utilizando React Js"
    />
    <Footer />
  </div>