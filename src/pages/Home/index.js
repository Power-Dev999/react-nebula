import React, { useState } from 'react';
import portfolio from '../../assets/imgs/portfolio.png';
import projects from '../../assets/imgs/projects.png';
import fundBusinessWhite from '../../assets/imgs/fund-business-white.png';
import fundBusinessBlack from '../../assets/imgs/fund-business-black.png';
import tradeBigImg from '../../assets/imgs/trade-big.png';
import tradeSmallImg from '../../assets/imgs/trade-small.png';
import increaseImg from '../../assets/imgs/increase.png';
import bitcoinImg from '../../assets/imgs/bitcoin.png';
import currencyImg from '../../assets/imgs/currency.png';
import settingsImg from '../../assets/imgs/settings.png';
import ordersImg from '../../assets/imgs/orders.png';
import chartImg from '../../assets/imgs/chart.png'
import roadImg from '../../assets/imgs/road.png'
import './style.scss';
import { memberAdd } from '../../rest/api';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Home = () => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');

  /****** Subscribe email by a click a button ******/
  const subscribe = () => {
    if (email === '') return;

    let validation = validateEmail(email);
    if (!validation) {
      setErrMsg('Please enter correct email address!');
      return;
    }
    setErrMsg('');
    memberAdd(email)
      .then(data => {
        if (data.status === 'subscribed') {
          toast('Success! Your email has been subscribed', { type: 'success' });
        } else {
          toast(data.detail, { type: 'error' });
        }
      })
      .catch(error => { console.log(JSON.stringify(error)) });
  }

  /**
  * Validate email by pattern
  * @param email string
  */
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="home-section position-relative">
      <div className="piece-bg-1 position-absolute"></div>

      {/* portfolio-projects section */}
      <div className="portfolio-projects-section position-relative">
        <div className="piece-bg-2 position-absolute"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-center" data-aos="fade-left">
              <div className="text-section">
                <h1>Democratized Finance for The Digital Economy</h1>
                <p>Find out more about how you can reach new investment opportunities, through Nebula Capital.</p>
                <div className="subscribe d-flex align-items-center justify-content-between position-relative">
                  <span className="err-msg position-absolute">{errMsg}</span>
                  <input type="email" placeholder="your@email.com" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                  <button className={email === '' ? 'fill-btn not-allow' : 'fill-btn'} onClick={subscribe}>Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 first-img-section" data-aos="fade-right">
              <div className="position-relative img-section">
                <img src={portfolio} alt="big-phone" className="portfilio-img" />
                <img src={projects} alt="projects" className="position-absolute small-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description section */}
      <div className="description-section w-100 position-relative">
        <div className="piece-bg-3 position-absolute"></div>
        <div className="d-flex justify-content-center" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">
          <h1 className="text-center">Start investing today with Nebula Capital!</h1>
        </div>
        <div className="d-flex justify-content-center" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000">
          <p className="text-center">Take back control with the ultimate investments marketplace designed for the democratization of global capital access through tokenized assets and ventures.</p>
        </div>
      </div>

      <div className="business-trade-section">
        {/* fund your business section */}
        <div className="fund-business-section position-relative">
          <div className="business-bg-section position-absolute"></div>
          <div className="piece-bg-4 position-absolute"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="img-section position-relative d-flex justify-content-end">
                  <img src={fundBusinessWhite} alt="fundBusinessWhite" className="position-absolute fund-business-white" />
                  <img src={fundBusinessBlack} className="fund-business-black" alt="fundBusinessBlack" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
                <div className="text-section">
                  <h1>The place where investors and ventures are connected.</h1>
                  <p>Access a variety of projects provided by either individual enterpreneurs or companies exposed to a multiude of industries, enabling you to successfully create a diversified portfolio and hedge risks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trade section */}
        <div className="trade-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center" data-aos="fade-right">
                <div className="text-section">
                  <h1>We offer you efficient decision-making solutions!</h1>
                  <p>Instantly track your investment's evolution through our mobile app, while contantly keeping in touch iwth the projects you have invested inh.
                  Transparency is the key in successful investments!
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="img-section position-relative">
                  <img src={tradeBigImg} className="trade-big" alt="tradeBigImg" />
                  <img src={tradeSmallImg} className="position-absolute trade-small" alt="tradeSmallImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-orders-section">
        {/* list section */}
        <div className="list-section">
          <div className="container">
            <div className="row position-relative">
              <div className="piece-bg-5 position-absolute"></div>
              <div className="col-md-4" data-aos="fade-right">
                <div className="content h-100">
                  <div className="logo-section d-flex align-items-center justify-content-center">
                    <img src={increaseImg} alt="increaseimg" />
                  </div>
                  <div className="description">
                    Profit from the Nebula marketplace's evolution, through fee redistribution.
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="zoom-in">
                <div className="content h-100">
                  <div className="logo-section d-flex align-items-center justify-content-center">
                    <img src={bitcoinImg} alt="bitcoinImg" />
                  </div>
                  <div className="description">
                    Digital tokens backed up by real world businesses & secured by blockchain technology.
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-left">
                <div className="content h-100">
                  <div className="logo-section d-flex align-items-center justify-content-center">
                    <img src={currencyImg} alt="currencyImg" />
                  </div>
                  <div className="description">
                    Keep your crypto assets as liquid as possible with Nebula.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* orders-settings section */}
        <div className="orders-settings-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-section position-relative d-flex justify-content-end" data-aos="zoom-in-right">
                  <div className="piece-bg-6 position-absolute"></div>
                  <img src={settingsImg} className="settings" alt="settings" />
                  <img src={ordersImg} className="position-absolute orders" alt="orders" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="text-section" data-aos="zoom-in-left">
                  <h1>We have adapted the ideal to reality.</h1>
                  <p>Our marketplace is legally compliant to your coutry of provenance and gives you an extra layer of protection, by employing a team of professionals that check the validity of the projects listed on our marketplace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container growth-reason" data-aos="zoom-in">
          <h1 className="text-center">We drive sustainable growth!</h1>
          <p className="text-center">Our digital economy resembles the real one, by allowing the market forces to drive economic growth, rather than pure speculation, everything being encapsulated in a structure meant to promote stability.</p>
        </div>
      </div>

      <div className="chart-section">
        <div className="piece-bg-7"></div>
        <div className="circle-chart-section container" data-aos="fade-left">
          <img src={chartImg} alt="chart-img" />
        </div>
        <div className="container present-goal" data-aos="zoom-in">
          <h1 className="text-center">Our goal is to make your present future proof</h1>
          <p className="text-center">Become part of our journey by exposing yourself to our continuously evolying infrastructure. Stay tuned for upcoming projects!</p>
        </div>
        <div className="road-section container" style={{ marginTop: '150px', marginBottom: '150px' }} data-aos="fade-right">
          <img src={roadImg} alt="road-img" />
        </div>
      </div>

    </div>
  )
}

export default Home;
