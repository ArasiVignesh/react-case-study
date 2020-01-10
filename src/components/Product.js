import React from 'react';
import Product1 from '../images/watch-leather1.jpg';
import Product2 from '../images/watch-pink.jpg';
import Product3 from '../images/watch-sport.jpg';
import {Link} from 'react-router-dom';
import data from '../data'
import items from '../data';

class Product extends React.Component{
        render(){
            return(
                <div>
                    <div>
                        <p>White Ceramic case with LeatherLoop</p>
                       <img src={items.Product1.img} alt="iwAtch-Leather"/> 
                   
                    </div>
                    <div>
                        <p>{items.Product1.itemName}</p>
                        <p>{items.Product1.Price}</p>

                    </div>
                </div>
            );
        }
}
export default Product;