/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Footer from '../components/footer';
import Header from '../components/Header';
import How from '../components/How';
import Divider from '../components/Divider';
import Cart from '../components/Cart/ShopCart';
// import Scroll from '../components/locomotiveScroll';
import { CartContext } from '../components/Cart/CartContext';
import CookieSvg from '../assets/svg/cookie-bite.svg';

import '../style/index.scss';

const Layout = ({ children, siteName, headerClass, location }) => {
  const { showCart, toggleCart } = useContext(CartContext);
  const mobile = useMediaQuery('(max-width: 900px)');

  return (
    <div>
      {/* <div> */}
      <Helmet>
        <html lang="en" />
        <title>Kindpost</title>
        <meta
          name="description"
          content="Kindpost. Delivering handwritten, vintage postcards."
        />
      </Helmet>
      <Cart />
      <div className="Container">
        <button
          type="button"
          aria-label="Toggle Cart"
          className={`overlay ${showCart ? 'fade' : ''}`}
          onClick={() => toggleCart()}
        />
        <Header siteName={siteName} headerClass={headerClass} />
        {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
        {/* <Scroll callbacks={location} /> */}
        <div
          id="top"
          // data-scroll-container
          // className="Wrap Wrap__main_content smooth-scroll"
          className="Wrap Wrap__main_content"
        >
          {children}
        </div>

        <CookieConsent
          overlay
          location="bottom"
          enableDeclineButton
          style={{
            background: 'rgba(35, 34, 33, 0.95)',
            // borderRadius: '4px',
            color: '#fff',
            padding: mobile ? '24px' : '16px',
            alignItems: 'center',
            justifyContent: mobile ? 'center' : 'flex-start',
            flexDirection: 'column',
            width: mobile ? '100%' : '600px',
            margin: '24px',
          }}
          contentStyle={{
            display: 'flex',
            margin: mobile ? '0' : '16px',
            flex: '1',
          }}
          buttonWrapperClasses={'cookie-button-wrapper'}
          buttonText="ACCEPT"
          buttonStyle={{
            background: 'none',
            border: 'solid #fff 1px',
            // borderRadius: '4px',
            color: '#fff',
            letterSpacing: '2px',
            // fontFamily: 'Averia Serif Libre',
            margin: mobile ? '24px 0' : '16px',
            padding: '16px 10px',
          }}
          declineButtonText="DECLINE"
          declineButtonStyle={{
            background: 'none',
            textDecoration: 'underline',
            color: '#fff',
            // fontFamily: 'Averia Serif Libre',
            margin: '16px',
            padding: mobile ? '0' : '6px 10px',
          }}
          cookieName="gatsby-gdpr-google-analytics"
        >
          This website uses cookies to enhance user experience and to analyze
          performance and traffic on our website. We also share information
          about your use of our site with our social media, advertising and
          analytics partners.
        </CookieConsent>
        <div className="Wrap">
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: '',
  siteName: 'Kindpost',
  headerClass: '',
};

export default Layout;
