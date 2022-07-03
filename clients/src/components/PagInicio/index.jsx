import React from 'react'
import { Link } from 'react-router-dom'
import './pagInicio.css'

function PagInicio() {
  return (

  <section className='background'>
    <div >
      <div className='texto-inicio'>
<h1 className='texto'>Welcome..!!</h1>
      </div>
        
        <div className='btn-inicio'>
                  <Link to='/home'><button className='inicio_button'>Start</button></Link>

        </div>
    </div>

  </section>
      

  )
}

export default PagInicio