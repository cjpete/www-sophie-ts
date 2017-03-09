import React, { PropTypes } from 'react'
//import classNames from 'classnames'

import cupsImage from '../img/cups.jpg';

const SiteHeader = ({ activePath }) => {
  /*
  const giPathActive = (activePath.indexOf('/glycemic-index/') > -1)
  const aboutPathActive = (activePath.indexOf('/about') > -1)

  const giLinkClass = classNames('site-header__page-link-container', { 'site-header__page-link-container--active': giPathActive })
  const aboutLinkClass = classNames('site-header__page-link-container', { 'site-header__page-link-container--active': aboutPathActive })
  */

  return (
    <header>
      <h1> Sophie Ts Vintage Teashop </h1>
      <nav>
        <a className="active"> Home </a>
        <a> About Us </a>
        <a> Menu </a>
        <a> Tea Parties </a>
        <a> Gallery </a>
        <a> Contact Us </a>
      </nav>
      <div className="banner" style={{ backgroundImage: `url(${cupsImage})` }}>
        &nbsp;
      </div>
    </header>
  )
}

SiteHeader.propTypes = {
  activePath: PropTypes.string,
}

SiteHeader.defaultProps = {
  activePath: '',
}

export default SiteHeader
