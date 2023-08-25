import React from 'react'
import logo from '../../images/logo/logo.png'
import Buttom from '../header/Buttom'

function Footer() {
  return (
    <div className='w-full text-sm py-8 bg-blue flex items-center justify-center gap-4 text-light relative '>
        <Buttom />
        <p>© 2023, Siwar Bracelet  <a className='underline text-indigo-400 text-sm decoration-[1px] cursor-pointer duration-300' href="https://www.linkedin.com/in/layss-kheir-555566249/" target='_blank'>Powered by LayssKheir</a></p>
        
      
    </div>
    
  )
}

export default Footer
