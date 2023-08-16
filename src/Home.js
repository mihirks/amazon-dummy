import React, { useState } from 'react'
import './Home.css'
import Product from './Product'


function Home() {

        const ImageCollection =['https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_eth_3000._CB603210873_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/Unrec-PFF-3000-1200._CB603212230_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/EOSS/UNREC/Shoes/Shoes_3000._CB603440768_.jpg'];

        const ImageCollectionSize = ImageCollection.length;
        const [index,setIndex]=useState(0);

        const goToNextSlide =()=> {

                setIndex((previndex) => {
                        if(previndex === ImageCollectionSize -1){
                                return 0;
                        }
                        else{
                                return previndex +1 ;
                        }
                })
        };

        const goToPrevSlide =()=> {

                setIndex((previndex) => {
                        if(previndex === 0){
                                return ImageCollectionSize -1;
                        }
                        else{
                                return previndex -1 ;
                        }
                })
        };

return (
    <div className='home'>
        <div className='img' >
        <img className='home_product_img'
        src={ImageCollection[index]} alt=''/>
        <span className='next' onClick={goToNextSlide}>&#10095;</span>
        <span className='prev' onClick={goToPrevSlide}>&#10094;</span>
        </div>
        

        <div className='home_product_rows' >
        
        <Product title='Fastrack New Limitless FS1 Smart Watch|Biggest 1.95" Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Upto 5 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces
' price={1995} image ='https://m.media-amazon.com/images/I/71KpoPUzJ2L._UX466_.jpg' rating={4} id={1} key={'abc'}/>

        <Product title='pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless Headphones, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)
' price={799} image ='https://m.media-amazon.com/images/I/51ZT3aMrJIL._SX522_.jpg' rating={3} id={2} key={'abd'}/>

        </div>    

        <div className='home_product_rows'>

        <Product title='pTron Volta Dual Port 12W Smart USB Charger Adapter, Multi-Layer Protection, Made in India, BIS Certified, Fast Charging Power Adaptor Without Cable for All iOS & Android Devices (Black)' price={199} image='https://m.media-amazon.com/images/I/41HKaGbYHzL._SX522_.jpg' rating={3} id={3} key={'abe'}/>

        <Product title='American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)
' price={1199} image='https://m.media-amazon.com/images/I/81KEKEDFUcL._SY879_.jpg' rating={3}id={4} key={'abd'} />
        <Product title='HUL Pureit Eco Water Saver Mineral RO+UV+MF AS wall mounted/Counter top Black 10L Water Purifier
' price={13999} image='https://m.media-amazon.com/images/I/515YvBsQPrL._SX522_.jpg'rating={3} id={5} key={'abf'}/>
        <Product title='Neutrogena Ultra sheer Sunscreen, SPF 50+, Ultra light, for oily and dry skin, 30ml
' price={208} image='https://m.media-amazon.com/images/I/61dSZR8IqbL._SX522_.jpg' rating={4} id={6} key={'abg'}/>
        </div>   
        <div className='home_product_rows'>
        <Product title='Sony Bravia 164 cm (65 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-65A80K (Black)' price={233990} image='https://m.media-amazon.com/images/I/81sFUK4Sv0L._SX522_.jpg' rating={4} id={7} key={'abh'}/>
        </div>
    </div>
  )
}

export default Home