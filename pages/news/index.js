import React, { PropTypes } from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import DocumentTitle from 'react-document-title'
import include from 'underscore.string/include'
import moment from 'moment'
import startsWith from 'underscore.string/startsWith'
import sortBy from 'lodash/sortBy'
import Summary from 'components/Summary'


const style = {
  post: {
    marginBottom: rhythm(1),
    listStyle: 'none'
  },
  Link: {
    fontSize: "1.5em"
  },
  date: {
    fontSize: rhythm(1 / 2),
    color: 'gray'
  }
}

const Index = (props) => {
  const pageLinks = []
  // Sort pages.
  const sortedPages = sortBy(props.route.pages, (page) => access(page, 'data.date')
  ).reverse()

  sortedPages.forEach((page) => {
    if (access(page, 'file.ext') === 'md' && !include(page.path, '/404') && startsWith(page.path, '/news/')) {
      const title = access(page, 'data.title') || page.path

      pageLinks.push(
        <li key={page.path} style={style.post}>
          <Link className="Roboto-Slab" style={style.Link} to={prefixLink(page.path)}>
          {title}
          </Link>
          <div style={style.date}>
            {moment(page.data.date).calendar()}
          </div>
          <Summary body={page.data.body} />
        </li>
      )
    }
  })

  return (
    <DocumentTitle title={`News | ${config.siteTitle}`}>
      <div>
        <ul>
          {pageLinks}
        </ul>
      </div>
    </DocumentTitle>
  )
}

Index.propTypes = {
  route: PropTypes.object
}

export default Index
