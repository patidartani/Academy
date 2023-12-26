import React from 'react'
import "./Cart.css"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { ebookkids } from '../component/EbookKidsdata'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className='cartmain'>
                <div className='cartfisrt'>
                    <div className='cartleft'>
                        <h4>Your cart items</h4>
                        <div className='cartdis'>
                            <h6>Items</h6>
                            <h6>Price</h6>
                        </div>
                        <div className='cartline'></div>
                    </div>
                    <div className='cartright'>
                        <h6>Total</h6>
                        <div className='cartdol'>
                            <p>Subtotal</p>
                            <h6>$0</h6>
                        </div>
                        <div className='cartdol'>
                            <p>Subtotal</p>
                            <h6>$0</h6>
                        </div>
                        <input type="text" placeholder='Apply coupon' />
                        <button>Apply</button>
                        <div className='check'>
                            <input type="checkbox" />
                            <p>Send as a gift</p>
                        </div>
                        <div className='cartemail'>
                            <input type="text" placeholder='Email Address' />
                        </div>
                        <div className='cartbutton'>
                            <button>Continue to payment</button>
                        </div>

                    </div>
                </div>

               
            </div>
            <Footer/>
        </div>
    )
}

export default Cart