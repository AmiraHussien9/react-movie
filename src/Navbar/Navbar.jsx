import React from 'react'
import { Link} from 'react-router-dom'
import $ from 'jquery'




export default function Navbar(props) {

  //****** change navBar Background ***** 
  $(window).scroll(function() {
    let navScroll = window.scrollY;
    if(navScroll > 150 ) {
      $("nav").addClass("navBg")
    }else {
      $("nav").removeClass("navBg")
    }
  })


  //***** add and remove active class ****
    $('.nav-link').click(function() {

      $(this).addClass("active");
      $(this).parent().siblings().children().removeClass("active");
    })

  return <>
<header>
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-2">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder " to="home"><span className='logo'> Noxe</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {
          props.userData? <>

<li className="nav-item">
          <Link className="nav-link active"  to = "home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "trending">Trending</Link  >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "tv">Watch Tv</Link  >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "movies">Movies</Link  >
        </li>
        
          </> : ''
        }
      
     
    
      </ul>



      <ul className="navbar-nav  mb-2 mb-lg-0">
        {
          props.userData? <>
           <li className="nav-item me-4 d-flex align-items-center">
        <i className='fab mx-2 fa-instagram'></i>
        <i className='fab mx-2 fa-facebook'></i>
        <i className='fab mx-2 fa-youtube'></i>
        <i className='fab mx-2 fa-spotify'></i>
      </li>
          </> :''
        }

        {

          props.userData? <>
          <li className="nav-item">
          <span className="nav-link register" onClick={props.logOut}>LogOut</span >
        </li> 
          </> :<>

          <li className="nav-item">
          <Link className="nav-link" to = "login">Login</Link  >
        </li>
  
     
        <li className="nav-item">
          <Link className="nav-link " to = "register">Register</Link  >
        </li>    

          </>
        }

     
         
    
      </ul>
   
    </div>
  </div>
</nav>
</header>
  </>
    

}
