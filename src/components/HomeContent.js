import React from 'react';
import {FaApple ,FaBicycle , FaPizzaSlice} from 'react-icons/fa';

import Product1 from '../images/watch-leather1.jpg';
import Product2 from '../images/watch-pink.jpg';
import Product3 from '../images/watch-sport.jpg';
import {Link} from 'react-router-dom';
import items from '../data'



class HomeContent extends React.Component{


    render(){

        console.log(items.Product1.itemName)
      
        return(
           <div className="prod-logo">
               <div>
               <Link to = "/productdetails"> <img src={items.Product1.img} alt="iwatch-leather"/></Link>
                <p>{items.Product1.itemName}</p>
                  <p>{items.Product1.Price}</p>
                  <p>{items.Product1.Size}</p>
                  <button>Add to Cart</button>
               </div>
               <div>
               <Link to = "/productdetails"> <img src={items.Product2.img} alt="iwatch"/></Link>
                   <p>{items.Product2.itemName}</p>
                   <p>{items.Product2.Price}</p>
                   <p>{items.Product2.Size}</p>
                   <button>Add to Cart</button>
                 </div>
                 <div>
                     <img src={Product3} alt="iwatch5-sportband"/>
                     <p>{items.Product3.itemName}</p>
                     <p>{items.Product3.Price}</p>
                     <p>{items.Product3.Size}</p>
                     <button>Add to Cart</button>
                 </div>
           </div>
           
        );
        }
}

export default HomeContent