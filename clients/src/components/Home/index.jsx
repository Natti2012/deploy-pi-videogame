import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import { deleteVg, filterByCreated, filterByGenres, getAllGenres, getVideogames, orderByName } from '../../redux/actions'
import Card from '../Card'
import Paginado from '../Paginado';
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import Footer from '../Footer'


function Home() {

  const dispatch = useDispatch();
  const allVideoGame = useSelector(state => state.videogames)
  const allGenres = useSelector(state => state.genres)
  const [currentPage, setCurrentPage] = useState(1)
  const [VGperPage] = useState(16)
  const indexLastVG = currentPage * VGperPage   //  1 * 15
  const indexFirstVG = indexLastVG - VGperPage  //   15 - 15 
  const currentsVG = allVideoGame.slice(indexFirstVG, indexLastVG)


  const paginado = (numberPage) => (
    setCurrentPage(numberPage)
  )
  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllGenres())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideogames())
  }
  function handleFilterGenres(e) {
    e.preventDefault();
    dispatch(filterByGenres(e.target.value))

  }
  function handleFilterByCreation(e) {
    e.preventDefault();
    dispatch(filterByCreated(e.target.value))

  }
  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
  }
  function handleOrderRating(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
  }

  return (

    <div className='backgroundHome'>
      <div className='navTotal'>
       
          <NavBar />
       




       

        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid" >

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">

                  <select onChange={e => { handleOrderRating(e) }} class="form-select" aria-label="Default select example">
                    <option value='all' selected>Rating</option>
                    {/* <selectclass="nav-link active" aria-current="page"> */}
                    {/* <option >Rating</option> */}
                    <option value='ascRating'>Ascendent</option>
                    <option value='descRating'>Descendent</option>
                  </select>
                </li>

                <li class="nav-item">

                  <select onChange={e => { handleFilterGenres(e) }} class="form-select" aria-label="Default select example">

                    <option value='genres'>Genres</option>
                    {allGenres.map(e => {
                      return (
                        <option key={e} value={e}>{e}</option>
                      )
                    }
                    )}

                  </select>
                </li>
                <li class="nav-item">

                  <select onChange={e => { handleFilterByCreation(e) }} class="form-select" aria-label="Default select example">
                    <option value='all' >Creation</option>

                    <option value='created_DB'>Created</option>
                    <option value='created_Api'>Existing</option>

                  </select>
                </li>
                <li class="nav-item">

                  <select onChange={e => { handleOrderName(e) }} class="form-select" aria-label="Default select example">
                    <option value='all' >Alphabetic</option>
                    <option value='ascABC'>Ascendent</option>
                    <option value='descABC'>Descendent</option>

                  </select>
                </li>
                <li class="nav-item">
<button onClick={e => { handleClick(e) }} className=' boton_refresh'><Link to='/home' >Refresh</Link></button>
</li>
              </ul>
              <span class="navbar-text">
                   <SearchBar />
                
              </span>
            </div>
          </div>
        </nav>
      </div> 
      <div className='banner' >
        <h3 className='bannerText'>VIDEOGAMES APP</h3>
      <img src="https://www.xtrafondos.com/wallpapers/resoluciones/21/squid-game-minimal_2560x1440_8873.jpg" width="100%" className='bannerImg'/>

          </div>
      <div className='inicioEspacio'>
        <Paginado
        currentPage={currentPage}
          VGperPage={VGperPage}
          allVideoGame={allVideoGame.length}
          paginado={paginado}
          className='pagination'
        />
        <div className='cards'>


          {currentsVG.length !== 0 ?

            currentsVG.map((v) => {
              return (
                <div key={v.id} >

                  <Card

                    id={v.id}
                    rating={v.rating}
                    name={v.name}
                    image={v.image}
                    genres={v.genres.join(' ')}
                    created={v.created}

                  />
                </div>
              )
            })

            :
            (
              <div className='cargando'>

                <h1 >Cargando...</h1>
              </div>

            )
          }
         
        </div>
        <Paginado
        currentPage={currentPage}
          VGperPage={VGperPage}
          allVideoGame={allVideoGame.length}
          paginado={paginado}
          className='pagination'
        />

        <div>
         <Footer/>
        </div>
      </div>
    </div>
  )
}


export default Home
 //   https://i.gifer.com/origin/a9/a90e81a8457d02b6a7f6fa188bf9ca4c_w200.webp
