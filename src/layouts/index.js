/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Footer from '../components/footer';
import Header from '../components/Header';
import How from '../components/How';
import Divider from '../components/Divider';
import Cart from '../components/Cart/ShopCart';
import { CartContext } from '../components/Cart/CartContext';
import CookieSvg from '../assets/svg/cookie-bite.svg';

import '../style/index.scss';

const Layout = ({ children, siteName, headerClass }) => {
  const { showCart, toggleCart } = useContext(CartContext);
  const mobile = useMediaQuery('(max-width: 900px)');

  return (
    <div>
      <Helmet title="kindpost." />
      <Cart />
      <div className="Container">
        <button
          type="button"
          aria-label="Toggle Cart"
          className={`overlay ${showCart ? 'fade' : ''}`}
          onClick={() => toggleCart()}
        />
        <Header siteName={siteName} headerClass={headerClass} />
        <div className="Wrap Wrap__main_content">{children}</div>
        <Divider />
        <How />
        <CookieConsent
          overlay
          location="bottom"
          enableDeclineButton
          style={{
            background: '#fff',
            borderRadius: '4px',
            color: '#000',
            padding: mobile ? '24px' : '16px',
            alignItems: 'center',
            justifyContent: mobile ? 'center' : 'flex-start',
          }}
          contentStyle={{
            display: 'flex',
            margin: mobile ? '0' : '16px',
          }}
          buttonWrapperClasses={mobile ? 'cookie-button-wrapper' : ''}
          buttonText="Accept Cookies"
          buttonStyle={{
            background: 'none',
            border: 'solid #000 1px',
            borderRadius: '4px',
            color: '#000',
            fontFamily: 'Averia Serif Libre',
            margin: mobile ? '24px 0' : '16px',
            padding: '16px 10px',
          }}
          declineButtonText="Do Not Sell My Personal Information"
          declineButtonStyle={{
            background: 'none',
            textDecoration: 'underline',
            color: '#000',
            fontFamily: 'Averia Serif Libre',
            margin: mobile ? '0' : '16px',
            padding: mobile ? '0' : '6px 10px',
          }}
          cookieName="gatsby-gdpr-google-analytics"
        >
          {!mobile && (
            <CookieSvg style={{ width: '48px', marginRight: '16px' }} />
          )}
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

Layout.propTypes = {
  children: PropTypes.func,
  siteName: PropTypes.string,
  headerClass: PropTypes.string,
};

Layout.defaultProps = {
  children: '',
  siteName: 'Kindpost',
  headerClass: '',
};

export default Layout;
