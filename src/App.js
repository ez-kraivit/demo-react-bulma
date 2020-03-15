import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './App.css';
import Routing from './routers';



// เรียก Bulma มาใช้ความสวยงาม เอาไว้ประดับความสวยงาม การใช้ Button
document.addEventListener('DOMContentLoaded',()=>{
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);
if($navbarBurgers.length > 0){
  $navbarBurgers.forEach(el =>{
    el.addEventListener('click',()=>{
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    })
  })
}
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
            Logo
            </a>
            <a role="button" class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <NavLink exact to='/' activeClassName="is-active" className="navbar-item">Home</NavLink>
              <NavLink exact to='/About' activeClassName="is-active" className="navbar-item">About</NavLink>
              <NavLink exact to='/Profile' activeClassName="is-active" className="navbar-item">Profile</NavLink>
            </div>
          </div>
        </nav>
        <Routing />
      </div>
    );
  }
}

export default App;


