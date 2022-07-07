import React from 'react'
import './paginado.css'
export default function  Paginado({VGperPage,allVideoGame,paginado ,currentPage}){
    const  numberPage =[]
    for (let i = 1; i < Math.ceil(allVideoGame/VGperPage); i++){
        numberPage.push(i )
    }
    return(
        <nav>
            <ul className='pagination'>
                <li>
                {currentPage >= 3 ? (
              <button
                className="button-pag"
                onClick={() => paginado(currentPage - 2)}
              >
                {" "}
                {"<<"}
              </button>
            ) : null}
            </li>
             <li >
            {currentPage !== 1 ? (
              <button
                className="button-pag"
                onClick={() => paginado(currentPage - 1)}
              >
                {" "}
                {currentPage - 1}
              </button>
            ) : null}
          </li>
          <li >
            <button
              className="button-pag"
              onClick={() => paginado(currentPage)}
            >
              {currentPage}
            </button>
          </li>
                
          <li >
            {currentPage > numberPage.length ? null : (
              <button
                className="button-pag"
                onClick={() => paginado(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
            )}
          </li>
          <li >
            {currentPage > numberPage.length - 1 ? null : (
              <button
                className="button-pag"
                onClick={() => paginado(currentPage + 2)}
              >
                {">>"}
              </button>
            )}
          </li>
            </ul>
        </nav>
    )
    
}