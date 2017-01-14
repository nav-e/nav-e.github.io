import React, { PropTypes } from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import DocumentTitle from 'react-document-title'
import moment from 'moment'

import Divider from 'material-ui/Divider'


const style = {
  h1: {
    marginTop: 0
  },
  hr: {
    marginBottom: rhythm(2)
  },
  Tags: {
    marginBottom: rhythm(1)
  },
  date: {
    marginBottom: rhythm(1 / 2),
    fontSize: rhythm(1 / 2),
    color: 'gray'
  }
}

const MdWrapper = (props) => {
  const { route } = props
  const post = props.route.page.data
  const { dirname } = props.route.page.file

  if (dirname.includes('news')) {
    return (
      <DocumentTitle title={post.title ? `${post.title} | ${config.blogTitle}` : config.blogTitle}>
      <div className="markdown">
        <h1 style={style.h1}>{post.title}</h1>
        {!post.date ? null : <div style={style.date}>
                               {`Posted ${moment(post.date).calendar().toLowerCase()}`}
                             </div>}
        <div className="article" dangerouslySetInnerHTML={{__html: post.body}} />
        <Divider />
      </div>
    </DocumentTitle>
    )
  } else {
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  }
}

MdWrapper.propTypes = {
  route: PropTypes.object
}

export default MdWrapper
