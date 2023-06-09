import React from 'react'
import "./index.css"
import "./App.css"
import {Footer,Blog,Possibility,Features,WhatGpt3,Header} from "./containers"
import { Cta,Brand,Navbar} from "./components"



export default function App() {
  return (
   <>
    <div className="App">
        <div className="gradient__bg">
         <Navbar/>
         <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
        </div>
   </>
  )
}
