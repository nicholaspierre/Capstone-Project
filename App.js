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
import helloclass from './images/helloclass.gif'


import './App.css';
// Stateless Components - Functional Components
import Home from './Home'
import About from './About'
import Contact from './Contact'

import Nav from './Nav'
import Header from './Header'

// Container Components - Class Components
import Section1 from './Section1'
import Section2 from './Section2'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapG from './GoogleApiWrapper'

function App() {

  // Hooks setting State in a Functional Component

  const [weatherData, setWeatherData] = useState("")
  const [zipcodeUser, setZipcodeUser] = useState("10005")

  // Fetching to the API
  const fetchData = () => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=cf21d898ca4a4367b3c141600212505&q=${zipcodeUser}&days=7`
    fetch(url, {
      method: "GET",
      dataType: "JSON",
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {

        setWeatherData(data)
      })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  }

  const handleChange = (event) => {
    setZipcodeUser(event.target.value)
  }

  return (
    <Router>
      <body className="is-preload">


        <div id="wrapper">


          <div id="main">
            <div className="inner">


              <Header />


              <Switch>
                <Route path="/" exact>
                  <Home weatherData={weatherData} />
                </Route>
                <Route path="/AddaStudent" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/ListOfStudents" component={MapG} />
              </Switch>



              <Section1 />

              <Section2 />

            </div>
          </div>


          <div id="sidebar">
            <div className="inner">


              <section id="search" className="alt">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="query" id="query" placeholder="Zipcode" value={zipcodeUser} onLoad={handleChange} onChange={handleChange} />
                </form>
              </section>


              <Nav />


              <section>
                <header className="major">
                  <h2>Ante interdum</h2>
                </header>
                <div className="mini-posts">
                  <article>
                    <a href="#" className="image"><img src={pic07} alt="" /></a>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                  </article>
                  <article>
                    <a href="#" className="image"><img src={pic08} alt="" /></a>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                  </article>
                  <article>
                    <a href="#" className="image"><img src={pic09} alt="" /></a>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                  </article>
                </div>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </section>


              <section>
                <header className="major">
                  <h2>Get in touch</h2>
                </header>
                <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem
                ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
                  tempus aliquam.</p>
                <ul className="contact">
                  <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                  <li className="icon solid fa-phone">(000) 000-0000</li>
                  <li className="icon solid fa-home">1234 Main Street<br />
                    New York, NY 10005-0000</li>
                </ul>
              </section>


              <footer id="footer">
                <p className="copyright"><a href="https://html5up.net">HTML5
                    UP</a>.</p>
              </footer>

            </div>
          </div>

        </div>
      </body>
    </Router>


  );
}

export default App;
