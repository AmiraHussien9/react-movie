import { createContext } from "react";
import  axios  from 'axios';
import React, { useEffect, useState } from 'react'

export let MediaContect = createContext();



export function MediaCreateContext(props) {
    

    const [movies, setMovies] = useState([]);
    const [tvMedia, setTvMedia] = useState([]);
    const [trendingPepole, setTrendingPepole] = useState([]);
  
    async function getTrending(mediaType,  callback) {
  
     let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
  
  
    callback(data.results.slice(0,10))
    }
  
   useEffect( ()=> {
     getTrending('movie' ,  setMovies) ;
     getTrending('tv' ,  setTvMedia);
    getTrending('person' ,  setTrendingPepole);
  
   }, []); 


    return <MediaContect.Provider value = {{movies , tvMedia , trendingPepole}}>
        {props.children}

    </MediaContect.Provider>
}