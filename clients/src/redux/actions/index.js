import axios from 'axios'
import { CLEAR_PAGE, GET_DETAILS_VIDEOGAMES, GET_VIDEOGAMES, FILTER_GENRES, ALL_GENRES, FILTER_CREATED, ORDER_NAME, ORDER_RATING, CREATE_VIDEOGAME, DELETE, UPDATE_VG } from "./actionsTypes";

export function getVideogames(name){
    return async dispatch=>{
        try {
            if(name){
             const resName = await axios.get(`/videogames?name=${name}`);  
               return dispatch({ type: GET_VIDEOGAMES, payload: resName.data })
            }else{
                 const res = await axios.get(`/videogames`)
            return dispatch({ type: GET_VIDEOGAMES,payload: res.data  });
            }
           
        } catch (e) {
         alert('The requested video game was not found')
        }
    }
}
export function getDetails(id){
    return async dispatch=>{
    try { console.log('holaaaaa')
            const res = await axios.get(`/videogame/${id}`);
            console.log('aaaaaaaa', res)
            return dispatch({ type: GET_DETAILS_VIDEOGAMES, payload: res.data });
        } catch (e) {
            return console.log(e);
        }

    }

}
export function clearPage(){
    return{
        type: CLEAR_PAGE
    }
}
export function getAllGenres(){
    return async dispatch=>{
        try { 
        const res = await axios.get(`/genres`);
        
        return dispatch({ type: ALL_GENRES , payload: res.data });
    } catch (e) {
        return console.log(e);
    }
}
}

export function filterByGenres(payload){
    return{
        type: FILTER_GENRES,
        payload
    }
}
export function filterByCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_NAME,
        payload
    }
}

export function orderByRating(payload){
    return{
        type: ORDER_RATING,
        payload
    }
}
export function CreateVideogame(payload){
    return async dispatch => {
        try {
        const res = await axios.post(`/videogame`, payload);
        return dispatch({ type: CREATE_VIDEOGAME , payload: res.data});
        
        } catch (res) {
        return dispatch({ type: CREATE_VIDEOGAME , payload: res.data})
        }
        
 } 
}

export function deleteVg(id ,payload){
    return async dispatch => {
        try {
        const res = await axios.delete(`/videogame/${id}`, payload);
        return dispatch({ type: DELETE , payload: res.data}, );
        
        } catch (e) {
        console.log(e); 
        }
        
 } 
}
export function updateVg(id,payload){
    return async dispatch => {
        try {
        const res = await axios.put(`/videogame/${id}`, payload);
        return dispatch({ type: UPDATE_VG , payload: res.data}, );
        
        } catch (e) {
        console.log(e); 
        }
        
 } 
}

