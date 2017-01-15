import React, { Component, PropTypes } from 'react'
import { fixLinks } from 'utils'
import { prune } from 'underscore.string'

class Summary extends Component {
  summary (body) {
    const split = body.split('<hr>')
    return split.length !== 0 && split[0].length < 200 ? split[0] : prune(body.replace(/<[^>]*>/g, ''), 200)
  }

  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    return (<div ref="markdown" dangerouslySetInnerHTML={{__html: this.summary(this.props.body)}} />)
  }
}

Summary.propTypes = {
  body: PropTypes.string.isRequired
}

Summary.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Summary
