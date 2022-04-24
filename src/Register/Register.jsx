/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
import axios from 'axios';
import Joi from 'joi';

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';



export default function Register() {

  //**********data for user********* 
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    password: '',
    email: '',

  });

  // let myInput = data.getAttribute('name');
  // console.log(myInput);

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }



  //*********navigation to Login*********
  let navigate = useNavigate();

  //*******validation error********
  const [listErorr, setlistErorr] = useState([]);

  //loadingSpinner
  const [isLoading, setIsLoading] = useState(false)

  //massege for error 

  const [error, setError] = useState('');





  //************submit function , send data********
  async function submitRegister(e) {

    e.preventDefault()
    let valResult = validationForm(user);
    console.log(valResult)


    if (valResult.error) {
      setIsLoading(false)
      setlistErorr(valResult.error.details);
     
    }
    else {
      setIsLoading(true)
      let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', user);


      if (data.message === 'success') {

        setIsLoading(false);
        navigate('../Login');
      
      }
      else {
        setIsLoading(false)
        setError(data.message);

      }


    }

  }


 

//  let myName = copyUser[e.target.name];
//  console.log(myName)






  //*********validation by joi**********
  function validationForm(user) {

    let scheme = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(8).required(),
      last_name: Joi.string().alphanum().min(3).max(8).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(/^[A-Za-z]\w{7,14}$/),
    });

    return scheme.validate(user, { abortEarly: false });

  }



  return <>
    <div className="container">
      <h2 className='py-3 m-auto text-center'>Register Now</h2>

      <form onSubmit={submitRegister} >
        <div className="form-list m-auto">
         
          {error ? <div className='alert alert-danger'>{error}</div> : ''}


          < label className='mt-2 mb-1' htmlFor='first_name'>First_name:</label><br />
          <input onChange={getUser} type="text" name='first_name' id='first_name' /><br />
         
   
        
          {listErorr ? listErorr.filter( error => error.context.key === 'first_name' ).map((fiteredError , index) => 
           <small className='text-danger d-block mt-0 mb-1 pt-1' key={index}>{fiteredError.message}</small>
          ) : ''}


          < label className='mt-2 mb-1' htmlFor='first_name'>Last_name:</label><br />
          <input onChange={getUser} type="text"  name='last_name' id='last_name' /><br />

          {listErorr ? listErorr.filter( error => error.context.key === 'last_name' ).map((fiteredError , index) => 
           <small className='text-danger d-block mt-0 mb-1 pt-1 ' key={index}>{fiteredError.message}</small>
          ) : ''}

          < label className='mt-2 mb-1' htmlFor='first_name'>Age:</label><br />
          <input onChange={getUser} type="number"  name='age' id='age' /><br />
          
          {listErorr ? listErorr.filter( error => error.context.key === 'age' ).map((fiteredError, index) => 
           <small className='text-danger d-block mt-0 mb-1 pt-1' key={index}>{fiteredError.message}</small>
          ) : ''}


          < label className='mt-2 mb-1' htmlFor='email'>Email:</label><br />
          <input onChange={getUser} type="email"  name='email' id='email' /><br/>
          
          {listErorr ? listErorr.filter( error => error.context.key === 'email' ).map((fiteredError, index) => 
           <small className='text-danger d-block mt-0 mb-1 pt-1' key={index}>{fiteredError.message}</small>
          ) : ''}


          < label className='mt-2 mb-1' htmlFor='password'>Password:</label><br />
          <input onChange={getUser} type="password"  name='password' id='password' /><br />
          
          {listErorr ? listErorr.filter( error => error.context.key === 'password' ).map((fiteredError , index) => 
        <small className='text-danger d-block mt-0 mb-1 pt-1' key={index}>password must contain at least 7 characters</small>
          ) : ''}
          <button className='btn Btn register' type='submit'>
            {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
          </button>

        </div>
      </form>
    </div>

  </> 

}
