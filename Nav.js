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
import { Link } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Nav() {
  return (

    <nav id="menu">
      <header className="major">
        <h2>Menu</h2>
      </header>
      <ul>
        <li><Link to="/" exact>Homepage</Link></li>
        <li><Link to="/ListOfStudents">List of Students</Link></li>
        <li><Link to="/AddaStudent">Add a Student</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>

  );
}

export default Nav;
