import React from 'react'
import './Footer.css'


export default function Footer() {
  return <>
  <div className="footer py-5">
    <h3 className='logo py-2'>Noxe</h3>
    <div className="row g-2  ">
  
          <div className="col-md-3">
            <ul className='footerList'>
              <li>Questions? Contact us.</li>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>


          <div className="col-md-3">
            <ul className='footerList'>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
          
            </ul>
          </div>
 

    

      <div className="col-md-3">
        <ul className='footerList'>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
       
        </ul>
      </div>


      <div className="col-md-3">
        <ul className='footerList'>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
       
        </ul>
      </div>
     
    </div>
  </div>
  </>
}
