import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/imgs/logo1.png';
import usFlag from '../../assets/imgs/us-flag.png';
import './style.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isHeaderCN, setIsHeaderCN] = useState(false);

  /****** display fixed menu *******/
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsHeaderCN(true);
      } else {
        setIsHeaderCN(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHeaderCN]);

  /****** Show multi language menu ******/
  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => document.removeEventListener("click", closeSelect);
  }, [isSubMenu]);

  /***** desktop menu click event ******/
  const desktopLinkTo = (url) => {
    history.push(url)
  }

  const closeSelect = (evt) => {
    if (!evt.target.closest(".multi-lang-click")) setIsSubMenu(false);
  }

  return (
    <div className={isHeaderCN ? 'header-section fixed-header' : 'header-section'}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between content">
          <div className="mobile-menu-list" onClick={() => setIsMobileMenu(true)}>
            <MenuIcon />
          </div>
          <div className="logo-section" data-aos="zoom-in" data-aos-duration="1000">
            <img src={logoImg} alt="logo" onClick={() => desktopLinkTo('/')} />
          </div>
          <div className="menu-list d-flex align-items-center">
            <div className="desktop-menu-item" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700">
              <span onClick={() => desktopLinkTo('/team')}>Team</span>
            </div>
            <div className="desktop-menu-item" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800">
              <span onClick={() => desktopLinkTo('/contact')}>Contact</span>
            </div>
            <div className="desktop-menu-item" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="900">
              <span onClick={() => desktopLinkTo('/faq')}>FAQ</span>
            </div>
            <div className="multi-lang position-relative" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000">
              <div onClick={() => setIsSubMenu(true)} className="multi-lang-click">
                <img src={usFlag} alt="countryFlag" />
                <span>EN</span>
              </div>
              {/* sub menu */}
              {
                isSubMenu &&
                <div className="position-absolute sub-menu">
                  <div className="item d-flex">
                    <img src={usFlag} alt="countryFlag" />
                    <span>FR</span>
                  </div>
                  <div className="item d-flex">
                    <img src={usFlag} alt="countryFlag" />
                    <span>GE</span>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      {
        isMobileMenu &&
        <div onClick={() => setIsMobileMenu(false)} className="overlay"></div>
      }
      <div style={{ width: isMobileMenu && '75%' }} className="mobile-menu">
        <div>
          <img src={logoImg} alt="logo" onClick={() => desktopLinkTo('/')} />
          <div onClick={() => desktopLinkTo('/team')} className="mobile-item">
            <span>Team</span>
          </div>
          <div onClick={() => desktopLinkTo('/contact')} className="mobile-item">
            <span>Contact</span>
          </div>
          <div onClick={() => desktopLinkTo('/faq')} className="mobile-item">
            <span>FAQ</span>
          </div>
        </div>

      </div>
    </div>
  )
}

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
  )
}

export default Header;