import React from 'react';
import './CardDetail.css';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getVideogames, updateVg } from '../../redux/actions';


export default function CardDetail({ id, name, image, genres, released, description, rating, platforms, created }) {


  return (
    <section className="containnerCard">
      <div className='name-detail'>
        <h2 className='titleDetail'>{name}</h2>
        {/* {created=== 'created_DB'?
         <h1><Link to={`/create/videogame/${id}`}>Update</Link></h1>
          <div><button value = {name} onClick={e =>  handleUpdate(e) } className='search_button'>Update</button></div> 
         
          : null 
         }*/}
      </div>
      <div className='image-detail'>
        <img src={image} alt={name} className='imagen2' />

      </div>
      <div className='cardDetail'>


        <div className='details'>

          <div className='description-detail'>

            <div >
              <h2 className=' titulo-description'>DESCRIPTION:</h2>
            </div>
            <div className='texto-description'>
              {description}
            </div>

          </div>



</div>
          <div className='datos-desc'>
<div className='datosIzq'>
     <h4 className='datos'>Platfoms:{platforms}</h4>
</div>
       <div className='datosIzq'>
            <h4 className='datos'>Genres: {genres}</h4>

</div>
          <div  className='datosDer'>
          <div className='rating'>
            <h4 >Rating: {rating}</h4>
          </div>
          <div className='released'>
            <h4>Realeased date: {released}</h4>
          </div>
          </div>
          </div>
        </div>


      
    </section>

  )

}