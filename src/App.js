
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import { MediaCreateContext } from './MediaContext';
import Moviedetails from './Moviedetails/Moviedetails';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import Tv from './Tv/Tv';
import Register from './Register/Register';
import Trending from './Trending/Trending';
import Footer from './Footer/Footer';
import Notfound from './Notfound/Notfound';
import TvDetails from './TvDetails/TvDetails';
import $ from 'jquery'



//*********protectedRoute*********



//*****************/



function App() {


 

const [userData, setUserData] = useState(null);
let navigate = useNavigate();



function getUserData() {
 
 let decode = jwtDecode(localStorage.getItem('userToken'));

 setUserData(decode)

 console.log(decode)

}

useEffect(()=>{
  if(localStorage.getItem('userToken')) {
    getUserData() 
  }
  },[])
  

//***************** */

function logOut() {
localStorage.removeItem('userToken');
setUserData(null);
navigate('./Login');


}



function ProtectedRoute({children}) {

  if(!localStorage.getItem('userToken')) {
    return <Navigate to='./Login'/>;
  }else {
    return children;
  }
}



  return<> <Navbar  userData = {userData} logOut ={logOut}/>


   <MediaCreateContext>
   <Routes>
  <Route path='/' element = { <Register/> } />
  <Route path='home' element = { <ProtectedRoute><Home /></ProtectedRoute> } />
 
  <Route path='trending' element = { <ProtectedRoute><Trending /></ProtectedRoute> } />
  <Route path='movies' element = {  <ProtectedRoute><Movies/></ProtectedRoute>}/>
  <Route path='about' element = {<ProtectedRoute><About/></ProtectedRoute> }/>
  <Route path='tv' element = {<ProtectedRoute><Tv/></ProtectedRoute> } />
  <Route path='tv' element = {<ProtectedRoute><TvDetails/></ProtectedRoute> } />


  <Route path='tvDetails' element = { <TvDetails/>} ></Route>


  <Route path='moviedetails' element = {<ProtectedRoute> <Moviedetails/></ProtectedRoute>} >
  
  <Route path=':type/:id' element = { <Moviedetails/>} ></Route>

  </Route>
  <Route path='login' element = {<Login  userData ={getUserData}/>} />
  <Route path='register' element = {<Register/>}/>
  <Route path='*' element = {<Notfound/>}/>

</Routes>

   </MediaCreateContext>

  
<Footer/>



  
  </>
}
export default App;
