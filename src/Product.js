import React from 'react'
import './Product.css'
import { useStatevalue } from './StateProvider'
import StarIcon from '@mui/icons-material/Star';


function Product({id,title, image,price,rating}) {

  const [ {basket},dispatch] = useStatevalue();

const addToBasket = () => {

  dispatch({
    type:'ADD_TO_BASKET',
    item: {
      id:id,
      title: title,
      image:image,
      price:price,
      rating: rating,
    },
  });
}

  return (
    <div className='product'>
        <div className='product_info'>
            <p className='product_title' title={title}>{title}</p>
            <div className='price' >
                <strong>₹</strong>
                <span>{price}</span>
            </div>
            <div className='product_rating'>
              {Array(rating).fill().map((_,i) => (
                  <StarIcon />
              ))}
            </div>
            
        </div>
        <img className='product_img' src={image}></img>

        <button onClick={addToBasket} className='productToCartButton'  type='button'>Add to Cart</button> 
    </div>
  )
}

export default Product