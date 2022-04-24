
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MediaContect } from '../MediaContext';




export default function Trending() {

  let {movies , tvMedia ,trendingPepole } = useContext(MediaContect);




  
  return <>

  {/****************  display movie ************/}
<div className="container py-5 trending">
 <div className="row py-4">
    <div className="col-md-4">
      <div className='w-25 brdr my-3'></div>
    <h2>Trending<br/>Movies<br/> Right Now</h2>
    <p className='text-muted py-2'>Lorem ipsum dolor sit amet consectetur.</p>
    <div className=' brdr my-3'></div>
    </div>
      {movies.map((movie, index)=><div key={index} className='col-md-2'> 
      
      <div className="datails">
        <Link to={`../Moviedetails/${movie.media_type}/${movie.id}`} >
        <img className='w-100' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
       <h2 className='h6 py-2'> {movie.title}</h2> 
        </Link>
     
      </div>
      </div>)}
    </div>
    

  
 



{/************  display tv ******************/}

<div className="row py-4">
<div className="col-md-4">
   <div className='w-25 brdr my-3'></div>
 <h2>Trending<br/>Tv<br/> Right Now</h2>
 <p className='text-muted py-2'>Lorem ipsum dolor sit amet consectetur.</p>
 <div className=' brdr my-3'></div>
 </div>
{tvMedia.map((tv, index) => <div key={index} className='col-md-2'>

  <div className="tv">
  <Link to={`../Moviedetails/${tv.media_type}/${tv.id}`}>
  <img className='w-100' src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="" />
    <h2 className='h6 py-2'> {tv.name}</h2> 
  </Link>  
  </div>
</div>)}
</div>





{/*********** display pepole ****************/}

<div className="row py-4">
<div className="col-md-4">
   <div className='w-25 brdr my-3'></div>
 <h2>Trending<br/>people<br/> Right Now</h2>
 <p className='text-muted py-2'>Lorem ipsum dolor sit amet consectetur.</p>
 <div className=' brdr my-3'></div>
 </div>
{trendingPepole.map((person, index) => <div key={index} className='col-md-2'>

  <div className="person">
 
  <img className='w-100' src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="" />
    <h2 className='h6 py-2'> {person.name}</h2> 

  </div>
</div>)}
</div>
</div>

  </>
}
