import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/dist/font-awesome.min.css'
import './styles/App.css'

export default props =>
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>