import pic10b from './images/pic10b.jpg'

import './App.css';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const APIKey = "AIzaSyCzMqSdxveqph3Zi3MlOpWIeI5eEE9Aa2Q"

const Home = (props) => {

  if (props.weatherData?.location?.name) {
    const showHTMLMsg = ``;
  } else {
    const showHTMLMsg = ``;
  }

  return (


    <section id="banner">
      <div className="content">
        <header>
          <h1>Weather in:
              <br />{props.weatherData?.location?.name}
            <br />Currently {props.weatherData?.current?.temp_f} degrees NOW!
          </h1 >


        </header>

        <p><strong>In the upper left corner enter Zipcode or City Name for current Weather.</strong> Look at the sunny side of everything. Think only the best, be as enthusiastic about the success of others as you are about your own. Forget the mistakes of the past and press on to the greater achievements of the future. Give everyone a smile.</p>
        <ul className="actions">
          <li><a href="#" className="button big">Learn More</a></li>
        </ul>
      </div>
      <span className="image object">
        <img src={pic10b} alt="" />
      </span>
    </section>
  );
}

export default Home;
