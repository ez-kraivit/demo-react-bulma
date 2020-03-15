import React, { Component } from 'react'
import Content from './Content';
import Footer from './Footer';
class Index extends Component{
    render(){
        return(
            <div class="hero-body">
                <div className="container">
                    <Content/>
                </div>
            <br></br>
            <div id="footer">
            <Footer/>
            </div>
            </div>
        );
    }
}
export default Index;