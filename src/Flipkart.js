import React from 'react'
import './Flipkart.css'
//react icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CgChevronRightO } from "react-icons/cg";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";
import { PiShootingStar } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
//images
import grocery from './Assests/images/grocery.webp'
import slidemain from './Assests/images/Slide main.webp' 
import fliplogo from '../src/Assests/icon/fliplogo.svg'
import mobile from './Assests/images/mobile 2.webp'
import fasion from './Assests/images/fasion 3.webp'
import electronics from './Assests/images/electronics 4.webp'
import home from './Assests/images/home 5.webp'
import applaices from './Assests/images/applaices 6.webp'
import travel from './Assests/images/Travel.webp'
import beuty from './Assests/images/beuty 8.webp'
import slide from './Assests/images/slide.webp'
//phone
import moto from './Assests/images/moto.webp'
import redmi from './Assests/images/redmi.webp'
import poco from './Assests/images/poco.webp'
import pocox from './Assests/images/poco x6.webp'
//beuty
import remote from './Assests/images/remotecar.webp'
import pencil from './Assests/images/pencil.webp'
import cycle from './Assests/images/cycle.webp'
import almond from './Assests/images/almonds.webp'
import gym from './Assests/images/gym.webp'
//electronics
import watch from './Assests/images/watch.webp'
import keyboard from './Assests/images/keyboad.webp'
import watch2 from './Assests/images/watch 2.webp'
import gitar from './Assests/images/gitar.webp'
import tv from './Assests/images/tv.webp'
//watches
import Fossil from './Assests/icon/fastrackk.webp'
import fastrack from './Assests/icon/fastrack2.webp'
import titan from './Assests/icon/titan.webp'
import fosil2 from './Assests/icon/fosil.webp'
//cricket
import bat from './Assests/icon/bat.webp'
import earphones from './Assests/icon/earphones.webp'
import speaker from './Assests/icon/speaker.webp'
import cap from './Assests/icon/caps.webp'
//wrist
import wrist1 from './Assests/icon/wrist1.webp'
import wrist2 from './Assests/icon/wrist2.webp'
import wrist3 from './Assests/icon/wrist3.webp'
import wrist4 from './Assests/icon/wrist4.webp'
//books 
import earth from './Assests/images/earth.webp'
import book1 from './Assests/images/books.webp'
import book2 from './Assests/images/book2.webp'
import book3 from './Assests/images/book3.webp'
import book4 from './Assests/images/book4.webp'

//box2img
import jewel from  './Assests/box 2slide/goldd.webp'
import women from './Assests/box 2slide/womens top.webp'
import tri from './Assests/box 2slide/Tricycle.webp'
import towel from './Assests/box 2slide/towel.webp'
//box2b
import spices from './Assests/box 2slide/spices.webp'
import clock from './Assests/box 2slide/clock.webp'
import light from './Assests/box 2slide/color lights.webp'
import nets from './Assests/box 2slide/mosquitonets.webp'
//box2c
import Trimmer from './Assests/box 2slide/trimmer.webp'
import powerbank from './Assests/box 2slide/powerbank.webp'
import iron from './Assests/box 2slide/iron.webp'
import air from './Assests/box 2slide/aircooler.webp' 
//box3
import wallet from './Assests/box3 slide/wallet.webp'
import tshirt from './Assests/box3 slide/tshirt.webp'
import chappal from './Assests/box3 slide/chappal.webp'
import bottle from './Assests/box3 slide/bottle.webp'
//box3b
import torch from './Assests/box3 slide/torch.webp'
import kitchen from './Assests/box3 slide/kitchen.webp'
import wall from './Assests/box3 slide/wall lamp.webp'
import cups from './Assests/box3 slide/cups.webp'
//box3c
import sticky from './Assests/box3 slide/sticky.webp'
import bag from './Assests/box3 slide/bag.webp'
import pen from './Assests/box3 slide/pens.webp'
import jeans from './Assests/box3 slide/jeans.webp'
//grid2
import big1 from './Assests/grid 2/big1.jpg'
import pens from './Assests/grid 2/pens.webp'
import notebooks from './Assests/grid 2/notebooks.webp'
import sharp from './Assests/grid 2/sharpeners.webp'
import calci from './Assests/grid 2/calculator.webp'
//fasion
import fashion1 from './Assests/4th slide/fashion1.webp'
import fashion2 from './Assests/4th slide/fasion2.webp'
import fashion3 from './Assests/4th slide/fashion3.webp'
import fashion4 from './Assests/4th slide/fasion4.webp'
import fashion5 from './Assests/4th slide/fashion5.webp'
//grid3 
import fashionneeds from './Assests/grid3/fashion needs.png'
import travel1 from './Assests/grid3/travelbag.webp'
import travel2 from './Assests/grid3/headphones.webp'
import travel3 from './Assests/grid3/socket.webp'
import travel4 from './Assests/grid3/suitcase.webp'
import summer1 from './Assests/grid3/boxers.webp'
import summer2 from './Assests/grid3/flats womens.webp'
import summer3 from './Assests/grid3/lipgloss.webp'
//6thslide
import topdeals1 from './Assests/slide 6 7 8 9/cameraa.webp'
import topdeals2 from './Assests/slide 6 7 8 9/ipads.webp'
import topdeals3 from './Assests/slide 6 7 8 9/sareees.webp'
import topdeals4 from './Assests/slide 6 7 8 9/kurtass.webp'
import topdeals5 from './Assests/slide 6 7 8 9/shoess.webp'
//7trh slide
import bikes1 from './Assests/slide 6 7 8 9/bike 1.webp'
import bikes2 from './Assests/slide 6 7 8 9/bike2.webp'
import bikes3 from './Assests/slide 6 7 8 9/bike3.webp'
import bikes4 from './Assests/slide 6 7 8 9/bike4.webp'
import bikes5 from './Assests/slide 6 7 8 9/bike5.webp'
//8th slide
import styles1 from './Assests/slide 6 7 8 9/sweart shirt.webp'
import styles2 from './Assests/slide 6 7 8 9/Y shirt.webp'
import styles3 from './Assests/slide 6 7 8 9/c bags.webp'
import styles4 from './Assests/slide 6 7 8 9/bagss troly.webp'
import styles5 from './Assests/slide 6 7 8 9/chudi.webp'
//9th
import fridge1 from './Assests/slide 6 7 8 9/fridge 1.webp'
import fridge2 from './Assests/slide 6 7 8 9/fridge 2.webp'
import fridge3 from './Assests/slide 6 7 8 9/fridge 3.webp'
import fridge4 from './Assests/slide 6 7 8 9/fridge 4.webp'
import fridge5 from './Assests/slide 6 7 8 9/fridge 5.webp'
//foot
import foot from './Assests/icon/foot.svg'

function Flipkart() {
  return (
    <div className='maindiv'>
      <div className='allcontainer'>

      <div className='maindiv2'>

        <div className='navbar'>

          <div className='navlogo'>
            <img src={fliplogo} />
          </div>

          <div className='navinput'>
            <input placeholder='search for products, brands and more'></input>
            <div className='searchicon'>
              <FaSearch />
            </div>
          </div>

          <div className='points'>
            <div className='navpoint1'>
              <div className='logicon'>
                <IoMdContact />
              </div>
              <a>Login</a>
              <select>
                <option></option>
              </select>
            </div>

            <div className='navpoint2'>
              <div className='carticon'>
                <BsCart3 />
              </div>
              <a>Cart</a>
            </div>

            <div className='navpoint3'>
              <div className='sellericon'>
                <RiShoppingBag4Line />
              </div>
              <a>Become a Seller</a>
            </div>

            <div className='navpoint4'>
              <HiOutlineDotsVertical />
            </div>
          </div>


        </div>
        {/* //2nd nav// */}
        <div className='navimages'>

          <div className='navimg1'>
            <img src={grocery} />
            <p>Grocery</p>
          </div>

          <div className='navimg1'>
            <img src={mobile} />
            <p>Mobile</p>
          </div>

          <div className='navimg1'>
            <img src={fasion} />
            <p>Fashion</p>
          </div>

          <div className='navimg1'>
            <img src={electronics} />
            <p>Electronics</p>
          </div>

          <div className='navimg1'>
            <img src={home} />
            <p>Home & <br></br>Furniture</p>
          </div>

          <div className='navimg1'>
            <img src={applaices} />
            <p>Appliances</p>
          </div>

          <div className='navimg1'>
            <img src={travel} />
            <p>Travel</p>
          </div>


          <div className='navimg1'>
            <img src={beuty} />
            <p>Beauty, Toys & More</p>
          </div>
        </div>

           <div className='slide'>
           <img src={slide} />
           </div>

    {/* //phones */}
          <div className='allphone'>
               <div className='title'> 
                    <h2>Best Deals on Smartphones</h2>
                    <div className='scrollicon1a'>
                    <h2><CgChevronRightO /></h2>
                    </div>
               </div>
              
              <div className='smartphones'>

               <div className='phones'>
               <img src={moto}/>
               <p>moto edge 40 neo</p>
               <span>From ₹20,099</span>
               </div>

               <div className='phones'>
               <img src={poco}/>
               <p>Poce M6 Pro</p>
               <span>From ₹35,099</span>
               </div>

               <div className='phones'>
               <img src={redmi}/>
               <p>Redmi Note 10 Pro</p>
               <span>From ₹16,089</span>
               </div>

               <div className='phones'>
               <img src={moto}/>
               <p>moto edge 60 neo</p>
               <span>From ₹22,099</span>
               </div>

               <div className='phones'>
               <img src={pocox}/>
               <p>Poco X6 neo 5g</p>
               <span>From ₹36,099</span>
               </div>
              
                </div>
               </div> 
          </div>

             {/* beuty  2*/}
             <div className='beutyall'>
             <div className='title'> 
                    <h2>Beuty, Food, Toys & more</h2>
                    <div className='scrollicon1'>
                    <h2><CgChevronRightO /></h2>
                </div>
               </div>
              
              <div className='beutyproducts'>

               <div className='beuty'>
                <div className='beutyremote'>
               <img src={remote}/>
               <p>Remote Control Toys</p>
               <span>Up to 80% Off</span>
               </div>
               </div>

               <div className='beuty'>
               <img src={pencil}/>
               <p>Top Selling Station</p>
               <span>Up to 75% Off</span>
               </div>

               <div className='beuty'>
                <div className='beutycycle'>
               <img src={cycle}/>
               <p>Electric Cycle</p>
               <span>Up to 40% Off</span>
               </div>
               </div>

               <div className='beuty'>
               <img src={almond}/>
               <p>Dry Fruit</p>
               <span>Up to 60% Off</span>
               </div>

               <div className='beuty'>
                <div className='beutygym'>
               <img src={gym}/>
               <p>Gym Essentials</p>
               <span>From ₹139</span>
               </div>
               </div>

             </div>
             </div>
             {/* 3rd electronics */}
             <div className='electronicsall'>
             <div className='title'> 
                    <h2>Best of Electronics</h2>
                    <div className='scrollicon1b'>
                    <h2><CgChevronRightO /></h2>
                    </div>
               </div>
              
              <div className='electronicsproducts'>

               <div className='electronics'>
               <img src={watch}/>
               <p>Noise Smartwatches</p>
               <span>From ₹1,099</span>
               </div>

               <div className='electronics'>
                <div className='eleckey'>
               <img src={keyboard}/>
               <p>Top Selling keyboards</p>
               <span>From ₹500</span>
               </div>
               </div>

               <div className='electronics'>
               <img src={watch2}/>
               <p>Fastrack Smartwatch</p>
               <span>From ₹1,800</span>
               </div>
               

               <div className='electronics'>
               <img src={gitar}/>
               <p>Top Selling Guitar</p>
               <span>From ₹8,500</span>
               </div>

               <div className='electronics'>
                <div className='electv'>
               <img src={tv}/>
               <p>Top Selling Monitors</p>
               <span>From ₹8279</span>
               </div>
               </div>
             </div>
             </div>

             {/* 3 box */}
            
            <div className='boxall'>
               <div className='boxwatch'>
                <div className='title'> 
                <h2>Suggested for You</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                 <div className='first'>
                 <div className='watch'>
                     <img src={Fossil}/>  
                     <p>FOSSIL RHETT Analog</p>
                    <span>EMI from ₹299/month</span>
                 </div>

                 <div className='watch'>
                      <img src={fosil2}/>
                      <p>Fastrack Analog-Digital</p>
                    <span>EMI from ₹211/month</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={fastrack}/>
                 <p>Fossil Analog-Digital</p>
                    <span>EMI from ₹321/month</span>
                 </div>

                 <div className='watch'>
                 <img src={titan}/>
                 <p>Titan Octane Analog</p>
                    <span>EMI from ₹481/month</span>
                 </div>
                 </div>

            </div>


            <div className='boxwatch'>
                <div className='title'> 
                <h2>Mens Essential</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                <div className='cricketpacks'>

                 <div className='first'>
                 <div className='watch'>
                     <img src={bat}/>
                     <p>Mens Cricket Bat and Ball</p>
                   <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                      <img src={speaker}/>
                      <p>JBL Blutooth Speaker</p>
                    <span>Min. 30% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={cap}/>
                 <p>Mens and Womens Cap</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={earphones}/>
                 <p>Blutooth tws and Earphones</p>
                    <span>Min 40% Off</span>
                 </div>
                 </div>
                 </div>

                 

               </div>

               <div className='boxwatch'>
                <div className='title'> 
                <h2>Wrist Watches</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>
                   
                   
                 <div className='first'>
                 <div className='watch'>
                  <div className='cricketpacks'>
                     <img src={wrist1}/>
                     <p>Top Quality Watches</p>
                    <span>Best Brands</span>
                    </div>
                 </div>

                 <div className='watch'>
                      <img src={wrist2}/>
                      <p>Affordable Wrist Watches</p>
                    <span>Min. 60% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={wrist3}/>
                 <p>Top Collection Watches</p>
                    <span>Best Selling Products</span>
                 </div>

                 <div className='watch'>
                  <div className='waterwatch'>
                 <img src={wrist4}/>
                 <p>Best Watchs Discounts</p>
                    <span>Min. 80% Off</span>
                    </div>
                 </div>
                 </div>

                 

               </div>
               
            </div>
          
                 
                 {/* slideBox2  */}
                 <div className='boxall'>
               <div className='boxwatch'>
                <div className='title'> 
                <h2>Summer Essential</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                 <div className='first'>
                 <div className='watch'>
                     <img src={jewel}/>  
                     <p>Jewellery For Womens</p>
                    <span>Min. 20% Off</span>
                 </div>

                 <div className='watch'>
                  <div className='women'>
                      <img src={women}/>
                      <p>Womens Tops and Kurtis</p>
                    <span>Min. 50% Off</span>
                    </div>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={tri}/>
                 <p>Tricycle and Toys for Kids</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={towel}/>
                 <p>Towel for Mens and Womens</p>
                    <span>Min. 70% Off</span>
                 </div>
                 </div>

            </div>


            <div className='boxwatch'>
                <div className='title'> 
                <h2>Home Furnishing</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                <div className='cricketpacks'>

                 <div className='first'>
                 <div className='watch'>
                     <img src={spices}/>
                     <p>Spices Mulitiple Bowls</p>
                   <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                      <img src={clock}/>
                      <p>Wallclock and Alarms</p>
                    <span>Special Offer</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={light}/>
                 <p>Color Lights</p>
                    <span>Min. 80% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={nets}/>
                 <p>mosquito Nets</p>
                    <span>Special Offer</span>
                 </div>
                 </div>
                 </div>

                 

               </div>

               <div className='boxwatch'>
                <div className='title'> 
                <h2>Trending Gadgets</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>
                   
                   
                 <div className='first'>
                 <div className='watch'>
                  <div className='cricketpacks'>
                     <img src={Trimmer}/>
                     <p>Trimmers for Men's</p>
                    <span>Best Brands</span>
                    </div>
                 </div>

                 <div className='watch'>
                      <img src={powerbank}/>
                      <p>Power Bank and Chargers</p>
                    <span>Min. 60% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                  <div className='iron'> 
                 <img src={iron}/>
                 </div>
                 <p>Iron Box</p>
                    <span>Best Selling Products</span>
                 </div>

                 <div className='watch'>
                  <div className='waterwatch'>
                 <img src={air}/>
                 <p>Air Cooler</p>
                    <span>Min. 80% Off</span>
                    </div>
                 </div>
                 </div>

                 

               </div>
               
            </div>

            {/* Slidebox3 */}
            <div className='boxall'>
               <div className='boxwatch'>
                <div className='title'> 
                <h2>Student Essentials</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                 <div className='first'>
                 <div className='watch'>
                     <img src={wallet}/>  
                     <p>Wallets & Belt Mens</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                      <img src={tshirt}/>
                      <p>T-shirt for Boys & Childrens</p>
                    <span>Min. 70% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={chappal}/>
                 <p>Footwear for Mens & Womens</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={bottle}/>
                 <p>Water Bottles & Flasks</p>
                    <span>Min. 80% Off</span>
                 </div>
                 </div>

            </div>


            <div className='boxwatch'>
                <div className='title'> 
                <h2>Decor & Furnishing</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                <div className='cricketpacks'>

                 <div className='first'>
                 <div className='watch'>
                     <img src={torch}/>
                     <p>Torch Light & Adapter</p>
                   <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                      <img src={kitchen}/>
                      <p>Kitchen Storage & Container</p>
                    <span>Min. 30% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={wall}/>
                 <p>Wall Lamps and Lights</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={cups}/>
                 <p>Cups and Saucers flasks</p>
                    <span>Min 40% Off</span>
                 </div>
                 </div>
                 </div>

                 

               </div>

               <div className='boxwatch'>
                <div className='title'> 
                <h2>College Must-haves</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>
                   
                   
                 <div className='first'>
                 <div className='watch'>
                  <div className='cricketpacks'>
                     <img src={sticky}/>
                     <p>Sticky Notes and Books</p>
                    <span>Best Sellers</span>
                    </div>
                 </div>

                 <div className='watch'>
                      <img src={bag}/>
                      <p>Affordable Backpacks</p>
                    <span>Min. 60% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={pen}/>
                 <p>GEl Pens and Pencil</p>
                    <span>Best Selling Products</span>
                 </div>

                 <div className='watch'>
                  <div className='waterwatch'>
                 <img src={jeans}/>
                 <p>Mens Jeans and Shirts </p>
                    <span>Min. 80% Off</span>
                    </div>
                 </div>
                 </div>

                
               </div> 
            </div>

         
 
               {/* 4th slide 5products */}
               <div className='groom'> 
            <div className='electronicsall'>
             <div className='title'> 
                    <h2>Grooming & Books</h2>
                    <div className='scrollicon1b'>
                    <h2><CgChevronRightO /></h2>
                    </div>
               </div>
              
              <div className='electronicsproducts'>

               <div className='electronics'>
               <img src={earth}/>
               <p>Puzzles & Cubes</p>
               <span>From ₹199</span>
               </div>

               <div className='electronics'>
                
               <img src={book1}/>
               <p>Fiction Books</p>
               <span>Up to 70% Off</span>
               </div>
               

               <div className='electronics'>
               <img src={book2}/>
               <p>Self help Books</p>
               <span>Min. 20% Off</span>
               </div>
               

               <div className='electronics'>
               <img src={book3}/>
               <p>Educational Games</p>
               <span>Up to 80% Off</span>
               </div>

               <div className='electronics'>
               <img src={book4}/>
               <p>Musical Toys</p>
               <span>From ₹199</span>
               </div>
             </div>
             </div>
             </div>



                <div className='grid2phone'>
               <div className='boxwatch'>
                <div className='title'> 
                <h2>Excel in Competitive Exams</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                 <div className='first'>
                 <div className='watch'>
                     <img src={pens}/>  
                     <p>Ball Pens</p>
                    <span>Trending</span>
                 </div>

                 <div className='watch'>
                      <img src={calci}/>
                      <p>Calculator</p>
                    <span>Special Offer</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={notebooks}/>
                 <p>Book and Notes</p>
                    <span>Special Offer</span>
                 </div>

                 <div className='watch'>
                 <img src={sharp}/>
                 <p>sharpeners</p>
                    <span>Trending</span>
                 </div>
                 </div>

            </div>

              <div className='bigphone'>
              <img src={big1}/>
              </div>
            </div>


             {/* 4th slide Fasion Top deals     */}
             <div className='fashion'>

             
             <div className='electronicsall'>
             <div className='title'> 
                    <h2>Fashion Top Deals</h2>
                    <div className='scrollicon1b'>
                    <h2><CgChevronRightO /></h2>
                    </div>
               </div>
              
              <div className='electronicsproducts'>

               <div className='electronics'>
               <img src={fashion1}/>
               <p>Max, U.S POLO ASSN...</p>
               <span>From ₹1,099</span>
               </div>

               <div className='electronics'>
               
               <img src={fashion2}/>
               <p>Allen Solly,Kiddo...</p>
               <span>From ₹500</span>
               </div>
            

               <div className='electronics'>
               <img src={fashion3}/>
               <p>Puma,Adidas ...</p>
               <span>Min. 50% Off</span>
               </div>
               

               <div className='electronics'>
               <img src={fashion4}/>
               <p>Womens Shirts</p>
               <span>Min. 70% Off</span>
               </div>

               <div className='electronics'>
     
               <img src={fashion5}/>
               <p>Trendy Sarees</p>
               <span>From ₹2079</span>
               </div>
             </div>
             </div>
             </div>




               {/* grid3 */}

               <div className='boxall'>
               <div className='boxwatch'>
                <div className='title'> 
                <h2>Travel Picks</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                 <div className='first'>
                 <div className='watch'>
                     <img src={travel1}/>  
                     <p>Travel Bags</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                      <img src={travel2}/>
                      <p>HeadPhones</p>
                    <span>Min. 80% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={travel3}/>
                 <p>Sockets</p>
                    <span>Min. 60% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={travel4}/>
                 <p>Suitcases</p>
                    <span>Min. 40% Off</span>
                 </div>
                 </div>

            </div>


            <div className='boxwatch'>
                <div className='title'> 
                <h2>Summer Styles</h2>
                <div className='scrollicon'>
                <h2><CgChevronRightO /></h2>
                </div>
                </div>

                <div className='cricketpacks'>

                 <div className='first'>
                 <div className='watch'>
                     <img src={summer1}/>
                     <p>Mens Boxers</p>
                   <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                      <img src={summer2}/>
                      <p>Womens Slipper</p>
                    <span>Min. 80% Off</span>
                 </div>
                 </div>

                 <div className='second'> 
                 <div className='watch'>
                 <img src={cap}/>
                 <p>Mens Cap</p>
                    <span>Min. 50% Off</span>
                 </div>

                 <div className='watch'>
                 <img src={summer3}/>
                 <p>Lip Gloss</p>
                    <span>Min 50% Off</span>
                 </div>
                 </div>
                 </div>
               </div>

               <div className='boxwatch'>
                  <div className='fashionneeds'>
                     <img src={fashionneeds}/>
                    </div>
      
               </div>
            </div>

               
               {/* 6th top deals slide */}
               <div className='fashion'>

             
<div className='electronicsall'>
<div className='title'> 
       <h2>Top Deals Picks</h2>
       <div className='scrollicon1b'>
       <h2><CgChevronRightO /></h2>
       </div>
  </div>
 
 <div className='electronicsproducts'>

  <div className='electronics'>
  <img src={topdeals1}/>
  <p>Instax Cameras</p>
  <span>From ₹4,099</span>
  </div>

  <div className='electronics'>
  
  <img src={topdeals2}/>
  <p>Apple Ipads</p>
  <span>Shop Now!</span>
  </div>


  <div className='electronics'>
  <img src={topdeals3}/>
  <p>Women Sarees</p>
  <span>From ₹899</span>
  </div>
  

  <div className='electronics'>
  <img src={topdeals4}/>
  <p>Kurta sets</p>
  <span>Under ₹4,099</span>
  </div>

  <div className='electronics'>

  <img src={topdeals5}/>
  <p>Shoes & Slipper</p>
  <span>Shop now!</span>
  </div>
</div>
</div>
</div>

 
 {/* 7th slide books */}
 <div className='fashion'>

             
             <div className='electronicsall'>
             <div className='title'> 
                    <h2>Automobile Picks</h2>
                    <div className='scrollicon1b'>
                    <h2><CgChevronRightO /></h2>
                    </div>
               </div>
              
              <div className='electronicsproducts'>

               <div className='electronics'>
               <img src={bikes1}/>
               <p>Helmet</p>
               <span>From ₹899</span>
               </div>

               <div className='electronics'>
               
               <img src={bikes2}/>
               <p>Riding Glove</p>
               <span>Min. 80% Off</span>
               </div>
            

               <div className='electronics'>
               <img src={bikes3}/>
               <p>Bike Body Cover</p>
               <span>Min. 50% Off</span>
               </div>
               

               <div className='electronics'>
               <img src={bikes4}/>
               <p>Car Body Cover</p>
               <span>Min. 70% Off</span>
               </div>

               <div className='electronics'>
     
               <img src={bikes5}/>
               <p>Car Stickers</p>
               <span>From ₹279</span>
               </div>
             </div>
             </div>
             </div>


{/* 8th slide */}
<div className='fashion'>

             
<div className='electronicsall'>
<div className='title'> 
       <h2>Pick Your Styles</h2>
       <div className='scrollicon1b'>
       <h2><CgChevronRightO /></h2>
       </div>
  </div>
 
 <div className='electronicsproducts'>

  <div className='electronics'>
  <img src={styles1}/>
  <p>Max, U.S POLO ASSN...</p>
  <span>From ₹1,099</span>
  </div>

  <div className='electronics'>
  
  <img src={styles2}/>
  <p>Allen Solly,Kiddo...</p>
  <span>From ₹500</span>
  </div>


  <div className='electronics'>
  <img src={styles3}/>
  <p>Camera Bag</p>
  <span>Min. 50% Off</span>
  </div>
  

  <div className='electronics'>
  <img src={styles4}/>
  <p>Bags & Trolleys</p>
  <span>Min. 70% Off</span>
  </div>

  <div className='electronics'>

  <img src={styles5}/>
  <p>Sabse Amazing Deals</p>
  <span>From ₹1099</span>
  </div>
</div>
</div>
</div>

{/* 9th slide  applainces */}
<div className='fashion'>

             
<div className='electronicsall'>
<div className='title'> 
       <h2>TVs & Appliances</h2>
       <div className='scrollicon1b'>
       <h2><CgChevronRightO /></h2>
       </div>
  </div>
 
 <div className='electronicsproducts'>

  <div className='electronics'>
  <img src={fridge1}/>
  <p>Godrej Refrigerator</p>
  <span>From ₹7,299</span>
  </div>

  <div className='electronics'>
  
  <img src={fridge2}/>
  <p>Digital Refrigerator</p>
  <span>From ₹9,990</span>
  </div>


  <div className='electronics'>
  <img src={fridge3}/>
  <p>Front Washingmachine</p>
  <span>Min. 50% Off</span>
  </div>
  

  <div className='electronics'>
  <img src={fridge4}/>
  <p>Aroma Refrigerator</p>
  <span>From ₹10,990</span>
  </div>

  <div className='electronics'>

  <img src={fridge5}/>
  <p>Big Washing Machines</p>
  <span>From ₹12,079</span>
  </div>
</div>
</div>
</div>

<div className='footerall'>
<div className='footermain'>
{/* 1st */}
   <div className='footerabout'>
    <div className='abttitle'>
       <li>ABOUT</li>
       </div>
      <div className='abt'> 
         <li>Contact Us</li>
         <li>About Us</li> 
         <li>Careers</li>
         <li>Flipkart Stories</li>
         <li>Press</li>
         <li>Corporate</li>
         <li>Information</li>
        </div> 
   </div>

{/* 2nd      */}
   <div className='footerabout'>
    <div className='abttitle'>
       <li>GROUP COMPANIES</li>
       </div>
      <div className='abt'> 
         <li>Myntra</li>
         <li>Flipkart Wholesale</li> 
         <li>Cleartrip</li>
         <li>Shopsy</li>
        </div> 
   </div>

{/* 3rd */}
   <div className='footerabout'>
    <div className='abttitle'>
       <li>HELP</li>
       </div>
      <div className='abt'> 
         <li>Payments</li>
         <li>Shipping</li> 
         <li>Cancellation &</li>
         <li>Returns</li>
         <li>FAQ</li>
         <li>Report Infringement</li>

        </div> 
   </div>

{/* 4th */}
   <div className='footerabout'>
    <div className='abttitle'>
       <li>CONSUMER POLICY</li>
       </div>
      <div className='abt'> 
         <li>Cancellation &</li>
         <li>Returns</li> 
         <li>Terms of Use</li>
         <li>Security</li>
         <li>Privacy</li>
         <li>Sitemap</li>
         <li>Grievance Redressal</li>
         <li>EPR Compliance</li>
        </div> 
   </div>

       <div className='line'>
                {/* border line div */}
       </div>

{/* 5th */}
<div className='footerabout'>
    <div className='abttitle'>
       <li>Mail Us:</li>
       </div>
      <div className='abt'> 
         <li>Flipkart Internet Private Limited,</li>
         <li>Buildings Alyss, Begonia &</li> 
         <li>Clove Embassy Tech Village,</li>
         <li>Outer Ring Road, Devarabeesanahalli Village,</li>
         <li>Bengaluru, 560103,</li>
         <li>Karnataka, India</li>
        </div> 
      
      <div className='social'>
       <span>Social:</span>
       <div><br></br></div>
       <div className='socialicon'>
       <TiSocialFacebookCircular />
       <FaXTwitter />
       <AiOutlineYoutube />
       </div>
      </div>

   </div>

   {/* 6th */}
   <div className='footerabout'>
    <div className='abttitle'>
       <li>CONSUMER POLICY</li>
       </div>
      <div className='abt'> 
         <li>Flipkart Internet Private Limited,</li>
         <li>Buildings Alyssa, Bengonia &</li> 
         <li>Clove Embassy Tech Village,</li>
         <li>Outer Ring Road, Devarabeesanahalli Village,</li>
         <li>Bengaluru, 560103</li>
         <li>Karnataka, India</li>
         <li>CIN : U51109KA2012PTC066107</li>
         <li>Telephone: <span>044-45614700 </span> / <span>044-67415800</span></li>
        </div> 
</div>


</div> 
{/* hr tag */}
<div className='hrfoot'>
<hr></hr>
</div>

<div className='lastfoot'>
<div className='footnav2'>
   <li> <span> <RiShoppingBag4Line /> </span> become a seller</li>
   </div>
   
   <div className='footnav2'>
   <li> <span> <PiShootingStar /> </span> Advertise</li>
   </div>

   <div className='footnav2'>
   <li> <span> <IoGiftOutline /> </span> Gift Cards</li>
   </div>

   <div className='footnav2'>
   <li> <span> <FaRegQuestionCircle /> </span> Help Center</li>
   </div>

   <div className='footnav2'>
      <div className='caption'>
   <li> <span> <TbCircleLetterC /> </span> 2007-2024 Flipkart.com</li>
   </div>
   </div>

   <div className='footlogo'>
       <img src={foot}/>
   </div>
              
   
</div>

</div> {/* footer last div */}
 


             </div>  {/* bg clr */}
     </div>//last div



  )
}

export default Flipkart