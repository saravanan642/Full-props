import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Nave from './Nave'

const Firstpage = () => {
  return (
    <div>
      <div className=' bg-pink-950  p-[100px] text-center text-3xl  '>Firstpage</div>
      <Home />
      <Contact/>
      <Nave />
    </div>
  )
}

export default Firstpage
