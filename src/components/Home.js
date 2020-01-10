import React, { Component } from 'react';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer'
class Home extends Component
{
    render(){
        return(
            <div>
            <Header/>
            <HomeContent/>
            <Footer/>
            </div>
        );

    }
}
export default Home;