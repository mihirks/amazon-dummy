import React from 'react'
import './CheckoutItem.css'
import { useStatevalue } from './StateProvider';
import StarIcon from '@mui/icons-material/Star';

function CheckoutItem({id,title, image,price,rating,hidebutton}) {

    const [ {basket},dispatch] = useStatevalue();
    const RemoveItem = () => {
      dispatch({
        type:'REMOVE_FROM_BASKET',
        item: {
          id:id,
        }
    });
    }

  return (
    <div className='checkoutitem'>
        <img className='product_img' src={image}></img>
      <div className='checkoutitem_right'>
        <div className='product_info'>
            <p className='checkout_product_title' title={title}>{title}</p>
            <div className='price'>
                <strong>₹</strong>
                <span>{price}</span>
            </div>
            <div className='product_rating'>
              {Array(rating).fill().map((_,i) => (
                  <StarIcon />
              ))}
            </div>
        </div>
        {!hidebutton && <button onClick={RemoveItem} className='removeitembtn'  type='button'>Remove Item</button>}
        
      </div>
    </div>
  )
}

export default CheckoutItem