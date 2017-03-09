import React, { Component } from 'react'
import Helmet from 'react-helmet'

import PageLink from '../src/components/common/PageLink'

class IndexPage extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={'MyGi'}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <p>Welcome</p>
        <PageLink to={'/about'}>
          About Page >>
        </PageLink>
      </div>
    )
  }
}

export default IndexPage
