import React from 'react'
import './Header.css'
import img1 from './header_amazon_logo.png'
import img2 from './title_amazon_img.png'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BrowserRouter as Router, Routes,Link, Route, useNavigate } from 'react-router-dom';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';
import { FiShoppingCart } from 'react-icons/fi'
import styled from '@emotion/styled';


function Header() {

  const [{basket,user},dispatch] =useStatevalue();
  let length =basket.length;

  const StyledLink = styled(Link)`
  text-decoration:none;
  `
  
  const navigate =useNavigate();
  const UserSignOut = ()=> {
    if(user){
      auth.signOut();
      navigate('/');
      window.location.reload();
    }
  }

  return (
    <div className='header'>
        <StyledLink to='/'>
          <img className='header_amazon_img' src={img1} alt =''></img>
          <img className='header_amazon_img1' src={img2} alt =''></img>
        </StyledLink>
        
        <div className='header_locate'>
            <LocationOnIcon style={{ fontSize: "20px" }} className='locate_img'/>
            <div className='locate_text'>
            <span className='locate_1'>Hello</span><span className='locate_2'>Select your address</span>
            </div>
        </div>
        
        <div className='header_search'>
        <input className='header_search_Inp' type='text' placeholder='Search Amazon.in' />
        <SearchIcon style={{ fontSize: "28px" }}  className='header_search_icon'></SearchIcon>
        </div>

        <div className='header_left_nav'>
        <div className='header_options'>
        {user ?
        ( <>
          <span className='op_1'>Hi,{user.email.split("@")[0]}</span>
          <span className='op_2' onClick={UserSignOut} style={{cursor : 'pointer'}}>Sign Out</span>
          
          </>
        )

        :
        ( <>
          <span className='op_1'>Hi,Guest</span>
          <StyledLink to='/login'>
          <span className='op_2' >Sign In</span>
          </StyledLink>
          </>
        )
        }
 
        </div>
        
        <div className='header_options'>
            <span className='op_1'>Returns</span>
            <StyledLink to='/orders'>
            <span className='op_2'>& Orders</span>
            </StyledLink>
        </div>    
        
        <StyledLink to='/checkout'>
        <div className='header_options_cart'>
        <FiShoppingCart size={36} color='white' className='cartIcon'/>
        <span className={`
        
        ${length > 9 ? 'cart_count_sm':'cart_count'}
        `}>{length}</span>
        </div>     
        </StyledLink>
        </div>

    </div>
  )
}

export default Header