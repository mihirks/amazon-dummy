import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStatevalue } from './StateProvider'

import CheckoutItem from './CheckoutItem';
import { Link } from 'react-router-dom';

function Checkout() {

  const [{basket},dispatch] =useStatevalue();

  return (
    <div className='checkout'>
        <div className='check_left'>
            <img className='checkout_ad' src='https://s0.2mdn.net/simgad/9434514403721605565'/>
            <div className='items_cart'>
              <div className='header_cart'>Your Shopping Cart</div>

                {basket.map((item) => (
                  <CheckoutItem title={item.title} price={item.price} image={item.image} rating={item.rating} id={item.id}/>
                ))}
                
            </div>
        </div>
        <div className='check_right'>
            <Subtotal />
            <Link to='/payment'>
            <button className='GoToBuy'>Proceed to Buy</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Checkout