import React from 'react'
import { useStatevalue } from './StateProvider';
import { BrowserRouter as Router, Routes,Link, Route, useNavigate } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import './Payment.css'
import CurrencyFormat from 'react-currency-format';
import StripeMagic from './StripeMagic';
import getBasketTotal from './getBasketTotal';


function Payment() {

const [{basket,user},dispatch] =useStatevalue();
var length =basket?.length;

  return (
    <div className='payment_page'>
        
        <div className='payment_header'>Checkout (
            <Link to='/checkout'>{length} items)</Link>
        </div>
        <div className='payment_body'>
        <div className='payment_address'>
            <p className='payment_bold'>Delivery Address</p>
            <p className='align_items_width'>24, Samruddhi Bldg, M G Road, Kandivali (west){<br/>}Mumbai{<br/>} India</p>
        </div>
    
        <div className='payment_items'>
            <p className='payment_bold'>Review name and delivery</p>
            <div className='payment_items_list align_items_width '>
            {basket.map((item) => (
                  <CheckoutItem title={item.title} price={item.price} image={item.image} rating={item.rating} id={item.id}/>
                ))}
            </div>
        </div>

        <div className='payment_method'>
            <p className='payment_bold'>Payment Method</p>
            <div className='payment_details align_items_width'>

                <div className='make_payment'>
                    <CurrencyFormat
                        renderText={(value) =>(
                            <div className='payment_bold'>Orders Total :{value}</div>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₹'}
                    />
                    
                </div>
                <div className='the_stripe_magic'>
                    <StripeMagic/>     
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Payment
