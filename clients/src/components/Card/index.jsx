import React from 'react';
import './Card.css';
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteVg, getVideogames, updateVg } from '../../redux/actions';


export default function Card ({name, image, id, genres,rating,created }) {
  const history= useHistory()
  const dispatch= useDispatch()

  function handleDelete(e) {
  
    e.preventDefault();
    dispatch(deleteVg(id))
   
    dispatch(getVideogames())
    history.push('./home')
     alert('juego borrado')
  }

  
    return (
       <Link to={`/videogame/${id}`} className="linkCard">
        <div className="card">
         
            <div className="card-title" >
            <h1 >{name}</h1>
          </div>
          <div className="imagen">
            <img  src={image} width="100%" alt={name} />
          </div>
         <div className='card-date'>
           <h3>Genres : {genres} </h3>
            <h3>Rating: {rating}</h3>
         </div>
         {created=== 'created_DB'?
         
         <div><button value = {name} onClick={e =>  handleDelete(e) } className=' search_button'>Delete</button></div> 
         
          : null
         }

        </div>
     </Link>
    );
};
// name: DataId.name,
//            image : DataId.background_image,
//             genres: DataId.genres.map(e => e.name),
//             descrption: DataId.description,
//             released: DataId.released,
//             rating: DataId.rating,
//             platforms