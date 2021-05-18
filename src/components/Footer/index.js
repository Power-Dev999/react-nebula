import React from 'react';
import './style.scss';
import facebookImg from '../../assets/imgs/facebook.svg';
import linkedinImg from '../../assets/imgs/linkedin.svg';
import instagramImg from '../../assets/imgs/instagram.svg';
import twitterImg from '../../assets/imgs/twitter.svg';

const Footer = () => {

  return (
    <div className="footer-section d-flex align-items-center justify-content-center">
      <div className="content">
        <div className="social-lists d-flex align-items-center">
          <div className="item d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <a href="replace"><img src={facebookImg} alt="facebookImg" /></a>
          </div>
          <div className="item d-flex align-items-center justify-content-center" data-aos="zoom-in" >
            <a href="replace"><img src={linkedinImg} alt="linkedinImg" /></a>
          </div>
          <div className="item d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <a href="replace"><img src={instagramImg} alt="instagramImg" /></a>
          </div>
          <div className="item d-flex align-items-center justify-content-center" data-aos="zoom-in">
            <a href="replace"><img src={twitterImg} alt="twitterImg" /></a>
          </div>
        </div>
        <p className="text-center" data-aos="zoom-in">Privacy Policy and Terms of Service</p>
        <p className="text-center" data-aos="zoom-in">App version 3.2.4, Build 23456, CP Version 6.0</p>
      </div>
    </div>
  )
}

export default Footer;