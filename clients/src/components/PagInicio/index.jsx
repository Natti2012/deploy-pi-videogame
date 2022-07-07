import React from 'react'
import { Link } from 'react-router-dom'
import './pagInicio.css'

function PagInicio() {
  return (

  <div className='background'>
    <div className='inicio' >
      {/* <div className='texto-inicio'>
<h1 className='texto'>Welcome..!!</h1>

      </div> */}
        
        <div className='btn-inicio'>
                  <Link to='/home'><button className='inicio_button'>START</button></Link>

        </div>
    </div>

  </div>
      

  )
}

export default PagInicio