import React from 'react'

import '../src/css/styles.css'

import PageLink from '../src/components/common/PageLink'
import SiteHeader from '../src/components/SiteHeader'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    const activePath = this.props.location.pathname
    return (
      <div>
        <SiteHeader activePath={activePath} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },
})
