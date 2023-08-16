import React from 'react'
import './Footer.css'
import img1 from './header_amazon_logo.png'


function Footer() {
    const goToTop = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  return (
    <div className='Footer'>
    <div className='to_top' >
        <span onClick={goToTop}>Back to top</span></div>
    <div className='Amazon_details'>
        <div className='footer_section'>
            <p className='section_header'>
            Get to Know Us
            </p>
            <div className='section-data'>
                <div>About us</div>
                <div>Careers</div>
                <div>Press Release</div>
                <div>Amazon Science</div>
            </div>
        </div>
        <div className='footer_section'>
            <p className='section_header'>
            Connect with Us
            </p>
            <div className='section-data'>
                <div>Facebook</div>
                <div>Twitter</div>
                <div>Instagram</div>
            </div>
        </div>
        <div className='footer_section'>
            <p className='section_header'>
            Make Money with Us
            </p>
            <div className='section-data'>
                <div>Sell on Amazon</div>
                <div>Sell under Amazon Accelerator</div>
                <div>Protect and Build Your Brand</div>
            </div>
        </div>
        <div className='footer_section'>
            <p className='section_header'>Let Us Help You
            </p>
            <div className='section-data'>
                <div>COVID-19 and Amazon</div>
                <div>Your Account</div>
                <div>Help</div>
            </div>
        </div>
    </div>
    <div className='footer_logo'><img className='footer_amazon_img' src={img1}/></div>
    </div>

  )
}

export default Footer