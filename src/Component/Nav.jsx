import React from 'react';
import './Nav.css'
const Nav = () => {
  return (
    <div >
        <div className='MainContainer'>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
       <div className='list'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Contacts</li>
          </ul>
       </div>
        </div>
        <div className='image'>
           <img src="https://tse3.mm.bing.net/th?id=OIP.YCysWiDN5r1qyfByFbx2kwHaEo&pid=Api&P=0" alt="" width="1500" />
         
        </div>
    </div>
  );
}

export default Nav;
