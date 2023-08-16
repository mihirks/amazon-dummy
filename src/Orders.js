import React, { useState } from 'react'
import { db } from './firebase'
import { useStatevalue } from './StateProvider';
import { useEffect } from 'react';
import CheckoutItem from './CheckoutItem';
import moment from 'moment/moment';
import './Orders.css'
import CurrencyFormat from 'react-currency-format';

function Orders() {

  const [{basket,user},dispatch] =useStatevalue();
  const [orders_list,setOrders] =useState([]);

  useEffect(() => {
    if (user)
    {
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => {
      // console.log(snapshot.docs)
      setOrders(snapshot.docs.map (doc => ({
          id:doc.id,
          data:doc.data()
      })))
  })
    }
    else{
      setOrders([]);
    }
  },[user])
  
  console.log(orders_list)

  if(!user){
    return(
      <div className='orders_page no_orders'>
        Please Login to view your orders
      </div>
    )
  }

  if(orders_list.length === 0){
    return(
      <div className='orders_page no_orders'>
        You haven't placed any order yet
      </div>
    )
  }

  return (

    
    <div className='orders_page'>
      {
        orders_list.map(order => (
          <div className='order_section'>
          <div className='order_item_head'>
          <div>Order Id : <strong>{order.id}</strong></div>
          <CurrencyFormat
          renderText={(value) =>(
              <div>Total Amount:<strong>{value}</strong></div>
          )}
          decimalScale={2}
          value={order.data.amount/100.0}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₹'}
          />  
          <div>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}</div>
          </div>

          {
            order.data.basket.map(item => (
              <CheckoutItem 
              id={item.id}
              price={item.price}
              title={item.title}
              image={item.image}
              rating={item.rating}
              hidebutton={1}
              />
            ))
          }
          </div>
        ))
      }
    </div>
  )
}

export default Orders
