import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Moviedatails.css';


export default function Moviedetails() {
    const [movieDetails, setMovieDrtails] = useState({});

    let { type, id } = useParams();

    async function getMovieDetails() {

        let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
        setMovieDrtails(data)

    }

    useEffect(() => {

        getMovieDetails();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    let { poster_path } = movieDetails;
    return <>
        <div className="container moviePage pt-5 ">
            {/* <h2 className='pt-5'>Movie Detalis</h2> */}


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
                        <h2>{movieDetails.title ? movieDetails.title : movieDetails.name}</h2>
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
                        <p>{movieDetails.overview}</p>
                        <div className="movie-details-prime">
                            <ul>
                                <li className="share"><p><i className="fas fa-share-alt"></i> Share</p></li>
                                <li className="streaming">
                                    <h6>Prime Video</h6>
                                    <span>Streaming Channels</span>
                                </li>
                                <li className="watch"><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="btn popup-video"><i className="fas fa-play"></i> Watch Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    </>
}
