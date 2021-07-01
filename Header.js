import pic10b from './images/pic10b.jpg'
import pic01 from './images/pic01.jpg'
import pic02 from './images/pic02.jpg'
import pic03 from './images/pic03.jpg'
import pic04 from './images/pic04.jpg'
import pic05 from './images/pic05.jpg'
import pic06 from './images/pic06.jpg'
import pic07 from './images/pic07.jpg'
import pic08 from './images/pic08.jpg'
import pic09 from './images/pic09.jpg'


import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'

import Nav from './Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Header() {
  return (
    <header id="header">
      <a href="index.html" className="logo"><strong>Student Weather Management Tool</strong> by Nicholas Pierre</a>
      <ul className="icons">
        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a>
        </li>
        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
      </ul>
    </header>
  );
}

export default Header;
