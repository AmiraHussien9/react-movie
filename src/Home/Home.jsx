import React from 'react';
import {  useNavigate } from 'react-router-dom';



import './Home.css'

export default function Home() {

  let navigate = useNavigate();

 function navigation() {
   navigate('../Trending')
 }



  return <>
 


  <div className="home-page py-4">

    <div className="home-title d-flex justify-content-center align-items-center">
      <div className="overlay"></div>
      <div className="heading">
      <h4>Welcome Back!</h4>
      <h1 className='fw-bold py-3'>
      Unlimited movies, TV<br/> shows, and more.
      </h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <button className='btn mybtn px-3 py-2' onClick={navigation}>Trending Tv</button>
      </div>
    </div>
    
    <div className="container homeContent">
   
      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-6">
        <div className="home-text">
      <h1 className='fw-bold py-2'>Enjoy on your TV.</h1>
      <p className='h3'>Watch on Smart TVs, Playstation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players, and<br/> more.</p>
    </div>
        </div>


        <div className="col-md-6 mb-5">
        <div className="tv">
     
     <img  alt="" className="our-story-card-img w-100" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"/>
   

     <div className="our-story-card-animation animation ">
       <video className="our-story-card-video w-100" autoPlay="autoplay"  
       loop="loop">
       <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
       </video>
       <div className="our-story-card-animation-text"></div>
     </div>
          </div>
        </div>

    {/*****************/}
    <div className="line mb-5"></div>


        <div className="col-md-6">
      <div className="watch">
      <img alt="" className="our-story-card-img w-100" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" data-uia="our-story-card-img"/>

      <div className="our-story-card-animation animation-watch ">
        <video className="our-story-card-video w-100" autoPlay="autoplay"  
        loop="loop">
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
          </video>
      <div className="our-story-card-animation-text"></div></div>
      </div>
        </div>


        
        <div className="col-md-5 ms-5">
        <div className="home-text">
      <h1 className='fw-bold py-2'>Watch everywhere.</h1>
      <p className='h3'>Stream unlimited movies and TV shows on<br/> your phone, tablet, laptop, and TV without<br/> paying more.</p>
    </div>
        </div>

      </div>
</div>
  </div>

  </>
}
