import React from "react";
import "./Navbar.css"

const Navbar = ({size,setShow}) => {
    const cartClick = () => { setShow(false); }
    const homeclick = () => { setShow(true); }
    
  return (
    <div  className='my-shop'>
        <span className='cart-logo'>MyShopApp</span>
      <div>
      <span className='cart-icon' ><i class="bi bi-cart"></i></span>
      <span id='count-span'>{0}</span>
      </div>
    </div>
  )
}


export default Navbar;
