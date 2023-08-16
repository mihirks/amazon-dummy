/* eslint-disable no-lone-blocks */
import React from 'react'
import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useStatevalue } from './StateProvider';
import axios from 'axios';
import getBasketTotal from './getBasketTotal';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';

function StripeMagic() {

const navigate =useNavigate();

const [{basket,user},dispatch] =useStatevalue();
const stripe = useStripe();
const elements = useElements();

const [message, setMessage] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [isDisabled, setDisabled] = useState(true);
const [isGuestUser, setGuestUser] = useState(false);
const [clientSecret,setClientSecret] =useState(false);

useEffect(() => {
    // generate the special stripe secret that allows us to charge customer

        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`,
                headers:{
                    Accept: '*'
                },
                baseURL: 'http://localhost:5001/clone-6618c/us-central1/api'
            });
    
            setClientSecret(response.data.clientSecret)
        }

        {(basket?.length > 0 ) && getClientSecret()}
        {((basket?.length === 0) || (user === null)) && setGuestUser(true)}
    },[basket,user]);

const handleSubmit = async(e) => {
    // fancy stripe
    e.preventDefault();
    setIsLoading(true);

    const payload = stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:elements.getElement(CardElement),
            billing_details:{
                name:user.email,
                email:user.email,
            }
        }
    }).then((result) => {
        if (result.error)
        {
            alert(result.error.message);
            setIsLoading(false);
            setDisabled(false);
        }
        else{
            // paymentIntent success response
            setMessage(null);
            alert('Order Placed');
            
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(result.paymentIntent.Id)
            .set({
                basket: basket,
                amount: result.paymentIntent.amount,
                created: result.paymentIntent.created,
            })

            dispatch({
                type:'EMPTY_BASKET'
            })

            navigate('/orders')
        }
    })
}

const handleChange = e => {

    if(e.error)
    {
        setMessage(e.error.message);
        setDisabled(true);
    }
    else{
        setDisabled(false);
        setMessage(null);
    }
    
}
  return (
    <div style={{justifyContent:'center',justifyItems:'center',alignItems:'center'}}>
        <form id="payment-form" >
            <CardElement onChange={handleChange}/>       
            {message && <div>{message}</div>} 
            {(user === null) && <h5>Please Login to Buy Items</h5>}
        </form>
        <button disabled={isLoading || isDisabled || isGuestUser}
            className='GoToBuy'
            style={{width:'40%',justifySelf:'center',alignItems:'center',justifyItems:'center'}}
            onClick={handleSubmit}
            >Buy Now</button>
    </div>
  )
}

export default StripeMagic