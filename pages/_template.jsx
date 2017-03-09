import React from 'react';

import '../src/css/styles';

import PageLink from '../components/common/PageLink';
import SiteHeader from '../src/components/SiteHeader';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    const activePath = this.props.location.pathname;
    return (
      <SiteHeader activePath={activePath} />
    )
    return (
      <div>
        <div className='site-header'>
          <PageLink to={'/'}>
            <h1>
              MyGi
            </h1>
          </PageLink>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  },
});
