import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, 
      Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const App =() => {

  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Hero/>
          </div>
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Works></Works>
          
          <div className='relative z-0'>
            <Contact></Contact>
            <StarsCanvas></StarsCanvas>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
