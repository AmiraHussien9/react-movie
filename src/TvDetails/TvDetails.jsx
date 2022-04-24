/* eslint-disable jsx-a11y/anchor-is-valid */

import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import './TvDetails.css'


export default function TvDetails() {

// eslint-disable-next-line no-unused-vars
let [searchParam , setSearchParam] = useSearchParams();

let myId=searchParam.get("id")
console.log(myId)



const [tvDetails, setTvDetails] =useState({});

   async function getDetails() {

    let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${myId}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
    console.log(data)
    setTvDetails(data);
   
   }

   useEffect(()=> 
   getDetails()
 

   // eslint-disable-next-line react-hooks/exhaustive-deps
   ,[])


//     const [tvTrailer , setTvTrailer] = useState({});

//    async function getTrailer() {
      
//     let {data} = await axios(`https://api.themoviedb.org/3/tv/${myId}/videos?api_key=d9ff7466094abb3e03e2e85b479230a9&language=en-US`);
//     let tv  = data.results[0]
//     setTvTrailer(tv)
//     console.log(tvTrailer.key)
   

//    }

   
// //    console.log( mykey)
// console.log(tvTrailer)
// let [myKey, setMyKey] = useState('Hol3UfkVFzw');

// useEffect(() => {
//  setMyKey(tvTrailer.key)

 
// }, [tvTrailer])


//    useEffect(()=> 
   
//    getTrailer()

//    // eslint-disable-next-line react-hooks/exhaustive-deps
//    ,[])


   
   let { poster_path } = tvDetails;
//    let {key} = tvTrailer;
//    console.log(key)
//    console.log(tvTrailer)
  return<>

{/* {console.log(tvTrailer)} */}
<div className="container moviePage pt-5 ">
            {/* <h2 className='pt-5'>Movie Detalis</h2> */}


           


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {/* <iframe width="500" height="315" src={`https://www.youtube.com/embed/${myKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>




{/**************/}
            <div className="row align-items-center position-relative py-3 mt-5">
                <div className="col-xl-3 col-lg-4">
                    <div className="movie-details-img">

                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />


                        <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video">
                            <img src="img/images/play_icon.png" alt="" />
                        </a>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-8">
                    <div className="movie-details-content">
                        <h2>{tvDetails.title ? tvDetails.title : tvDetails.name}</h2>
                        {/* <h2>The Easy <span>Reach</span></h2> */}
                        <div className="banner-meta ">
                            <ul className='list-unstyled '>
                                <li className="quality ">
                                    <span>Pg 18</span>
                                    <span>hd</span>
                                </li>
                                <li className="category ">
                                    <p>Romance,</p>
                                    <p>Drama</p>
                                </li>
                                <li className="release-time ">
                                    <span><i className="far fa-calendar-alt pe-2"></i>  2021</span>
                                    <span><i className="far fa-clock ps-2"></i>  128 min</span>
                                </li>
                            </ul>
                        </div>
                        <p>{tvDetails.overview}</p>
                        <div className="movie-details-prime">
                            <ul>
                                <li className="share"><p><i className="fas fa-share-alt"></i> Share</p></li>
                                <li className="streaming">
                                    <h6>Prime Video</h6>
                                    <span>Streaming Channels</span>
                                </li>
                                <li className="watch">
                                    
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 

                                    <i className="fas fa-play"></i> Watch Now </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>

  </>
}

