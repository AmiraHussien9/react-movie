import React from 'react'
import { useNavigate } from 'react-router-dom'
import'./Notfound.css'


export default function Notfound() {

  let navigate = useNavigate();
  function goToHome() {
    navigate('../Home');
   
  }
  return <>
  <div className="container">
      <div className="notFound text-center">
      <div className="row h-100 align-items-center justify-content-center">
         
             <div className="col-md-6">
             <div className="errorText">
                          <h1>404</h1>      
                    <h2 className='text-muted'>PAGE NOT FOUND</h2>
                  <p className='text-muted'>We're sorry. The page you are looking for cannot be found.</p>
                </div>
                <button className='btn homeBtn' onClick={()=> goToHome()}>back to home</button>
             </div>
         
          </div>

        
      </div>
  </div>

  
  
  </>
}

