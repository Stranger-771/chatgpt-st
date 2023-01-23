import React from 'react'

import {Footer, Blogs, Header, Feature, Possibility, WhatGPT3 } from './containers'
import {Cta, Navbar, Brand } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient_bg">
            <Navbar/>
            <Header/>

        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <Cta/>
        <Blogs/>
        <Footer/>

    </div>
  )
}

export default App