import React, {Component} from 'react';
import Header from './Header';
import Product from './Product';
import Footer from './Footer'

class ProductDetails extends React.Component{
    render()
    {
        return(
            <div>
            <Header/>
            <Product/>
            <Footer/>
            </div>
        );
    }
}
export default ProductDetails;