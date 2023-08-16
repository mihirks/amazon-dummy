import React from 'react'
import './Subtotal.css'
import CurrencyFormat  from 'react-currency-format'
import { useStatevalue } from './StateProvider';

function Subtotal() {

  const [{basket},dispatch] =useStatevalue();
  const length =basket?.length;
  var totalPrice=0;
  if (length >0) {
    for (let index = 0; index < basket.length; index++) {
      const itemPrice = basket[index]?.price;
      totalPrice += itemPrice;
    }
  } else {
    totalPrice=0;
  }

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) =>(
                <span>Subtotal ({length} items):{value}</span>
            )}
            decimalScale={2}
            value={totalPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
        />

    <div className='check_div'>
    <input type='checkbox' className='checkbox'/>
    <label className='checkbox_text' htmlFor='checkbox'>This order contains gift</label>
    </div>
    

    </div>

  )
}

export default Subtotal