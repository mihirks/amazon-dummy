import React, { useState } from 'react'
import './Login_Signin.css'
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


function Login_Signin() {
   

   const navigate = useNavigate();
   const [isValidPwd,setValidPwd] =useState(1);
   const [isValidEmail,setValidEmail] =useState(1);

   const password_check = (password) => {
    var re = {
        capital: /(?=.*[A-Z])/,
        length: /(?=.{7,13}$)/,
        specialChar: /[!@#\$%\^&\*.]/,
        digit: /(?=.*[0-9])/,
    };
    setValidPwd (
        re.capital.test(password) &&
        re.length.test(password) &&
        re.specialChar.test(password) &&
        re.digit.test(password)
    );
};

  const email_check = (email)=>{

    var re_email ={
      com_check : /(?=.*@.*\.com)/,
      in_check: /(?=.*@.*\.in)/,
      specialChar:  /^[!@#\$%\^&\*.]/

    };
    setValidEmail ( (re_email.com_check.test(email) || re_email.in_check.test(email)) && !re_email.specialChar.test(email))
  }

    const signUp = e => {

      
      var usr_email =document.getElementsByClassName('email_input')[0].value;
      var usr_pwd = document.getElementById('pwd_data').value;
      
      e.preventDefault();

      auth.
      createUserWithEmailAndPassword(usr_email, usr_pwd)
      .then((userCredential) => {
          // console.log(userCredential);
          navigate('/');
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
    
    }

    const signIn = e => {

      var usr_email =document.getElementsByClassName('email_input')[0].value;
      var usr_pwd = document.getElementById('pwd_data').value;

      e.preventDefault();

      auth.
      signInWithEmailAndPassword(usr_email, usr_pwd)
      .then((userCredential) => {
          console.log(userCredential);
          navigate('/');
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
    
    }
    
  
  return (
    <div className='login_page'>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'/>
        <div className='login_box'>
            <span className='Signin_text'>Sign in</span>
            <div className='email_login'>        
            <label className='email_text' htmlFor='email_input' required >Email</label><br/>
            <input type='text' onChange={(e) => email_check(e.target.value)} className='email_input'/>
            </div>
            {!isValidEmail && <div className='validate_text'>Please enter valid email</div>}
            <div className='password_login'>
            <label className='password_text' htmlFor='pwd'>Password</label><br/>
            <input type='password' 
            id='pwd_data'
            autoComplete='off'
            minLength={8}
            maxLength={15}
            size={15}
            onChange={(e)=> password_check(e.target.value)}
            required />
            </div>
            {!isValidPwd && <div className='validate_text'>Passwords must have at least 8 characters and contain at least one uppercase letter, lowercase letter, number, and special character</div>}
            <div className='login_button'>
            <button type='submit' disabled={!isValidEmail || !isValidPwd} className='Signin_btn' onClick={signIn}>Sign in</button>
            <div className='sign_desc'>By signing-in you agree to Amazon's Dummy Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</div>
            <button type='submit'  disabled={!isValidEmail || !isValidPwd} className='register_btn' onClick={signUp}>Create your Amazon Account</button>
            </div>
        </div>
    </div>
  )
}

export default Login_Signin