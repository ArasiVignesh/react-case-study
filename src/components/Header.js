import React from 'react';
import {IoIosCart} from 'react-icons/io';
import {IoIosSearch} from 'react-icons/io';
import Login from '../Login';
import {Link} from 'react-router-dom';
import {Player} from 'video-react';

class Header extends React.Component{

    render(){
        return(
     <div className="shopOnline">
      <div>
            <h1>LOGO</h1>
      </div>
       <div id="searchBar">
          <input ref="search" type="search" placeholder="Search Product"/>
          <div id="searchIcon"><IoIosSearch/></div>
      </div>
      <div id="right-div">
      <div id="signIn"><Link to = "/login">Sign In</Link></div>  
            
       <div id="cart"><IoIosCart/></div> 
       </div>
        </div>
    );

}
}
export default Header;