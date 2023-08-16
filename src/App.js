import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes,Link, Route } from 'react-router-dom';
import Login_Signin from './Login_Signin';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStatevalue } from './StateProvider';
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from './Orders';
import Footer from './Footer';


const stripePromise = loadStripe("pk_test_51NFfKvSEYf3SA4uAeOo4y71iz8jHXPhyHVZ3QcyG4s4vyrXpEV5gGjLDbRtMynIfgar40RLIqgNsQYa3eiJdsG5n00izhh1XBY");

function App() {

  const [{basket,user},dispatch] =useStatevalue();

  useEffect(() =>{
    auth.onAuthStateChanged(auth_usr => {
            // console.log('The user is',auth_usr.email);
            if(auth_usr){
                dispatch({
                  type:'SET_USER',
                  user: auth_usr
                })
            }else{
              dispatch({
                type:'SET_USER',
                user: null
              })
            }
        });

  },[])

  return (
    <Router>
    <div className="App">
      
      <Routes>
      <Route path="/" element={<><Header /> <Home /><Footer /></>}/>
      <Route path="/checkout" element={<><Header /><Checkout/> <Footer /></>}/>
      <Route path='/login' element ={<Login_Signin/>} />
      
      <Route path='/payment' element ={
      <Elements stripe={stripePromise}>
      <Header /><Payment /><Footer />
      </Elements>
      } />

      <Route path='/orders' element={
        <>
        <Header/>
        <Orders />
        <Footer />
        </>
      }/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
