import axios from 'axios';
import Joi from 'joi';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




export default function Login(props) {


//**********data for user********* 
const [user, setUser] = useState({
password:'',
email:'',

});


function getUser(e) {
  let myUser = {...user};
  myUser[e.target.name] = e.target.value;
  setUser(myUser);

  

}


let navigate = useNavigate();
//*******validation error********

const [listErorr, setlistErorr] = useState([]);

//loadingSpinner
const [isLoading, setIsLoading] = useState(false)

//massege for error 

const [error, setError] = useState('');





//************submit function , send data********
 async function submitLogin(e) {

  e.preventDefault()
  setIsLoading(true)
  let valResult =  validationForm(user);


 if(valResult.error) {
  setIsLoading(false)
  setlistErorr(valResult.error.details);
 }
 else {
  setIsLoading(true)
  let {data} = await  axios.post('https://route-egypt-api.herokuapp.com/signin', user);
 //  console.log(data.message);
 
  if ( data.message  === 'success') {
    // console.log(data)
    setIsLoading(false);
  
    localStorage.setItem('userToken',data.token);

    props.userData();

    navigate('../Home');
  }
    else {
     setIsLoading(false)
       setError(data.message);
 
    }
  

 }



}
//validation by joico
function validationForm(user) {

  let scheme = Joi.object({
   
    email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(/^[A-Za-z]\w{7,14}$/),
     });

     return scheme.validate(user , {abortEarly: false});

}



  
  return <>
  <div className="container">
  <h2 className='py-3'>Login Now</h2>
    <form  onSubmit={submitLogin}>
      <div className="form-list">
   


  < label className='mb-2' htmlFor='email'>email:</label>
  <input onChange={getUser} type="email" className='form-control' name='email' id='email' />
  {listErorr ? listErorr.filter( error => error.context.key === 'email' ).map((fiteredError, index) => 
           <small className='text-danger d-block mt-0 mb-1 pt-1' key={index}>{fiteredError.message}</small>
          ) : ''}


  < label className='mb-2' htmlFor='password'>password:</label>
  <input onChange={getUser} type="password" className='form-control' name='password' id='password' />
  {listErorr ? listErorr.filter( error => error.context.key === 'email' ).map((fiteredError, index) => 
           <small className='text-danger d-block mt-0 mb-1 pt-1' key={index}>password must contain at least 7 characters</small>
          ) : ''}
  <button className='btn Btn' type='submit'>
    {isLoading? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
  </button>

  </div>
    </form>
    </div>
  </>


 
}
