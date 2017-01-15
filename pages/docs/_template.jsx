import React, { PropTypes } from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Breakpoint from 'components/Breakpoint'
import find from 'lodash/find'
import typography from 'utils/typography'

const { rhythm } = typography


const Template = (props) => {
  const childPages = config.docPages.map((p) => {
    const page = find(props.route.pages, (_p) => _p.path === p)

    return {
      title: page.data.title,
      path: page.path,
    }
  })

  const docPages = childPages.map((child) => {
    const isActive = prefixLink(child.path) === props.location.pathname

    return (
      <li
        key={child.path}
        style={{
          marginBottom: rhythm(1/2),
        }}
      >
        <Link
          to={prefixLink(child.path)}
          style={{
            textDecoration: 'none',
          }}
        >
          {isActive ? <strong>{child.title}</strong> : child.title}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <Breakpoint
        mobile
      >
        <div
          style={{
            overflowY: 'auto',
            paddingRight: `calc(${rhythm(1/2)} - 1px)`,
            position: 'absolute',
            width: `calc(${rhythm(8)} - 1px)`,
            borderRight: '1px solid lightgrey',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              marginLeft: 0,
              marginTop: rhythm(1/2),
            }}
          >
            {docPages}
          </ul>
        </div>
        <div
          style={{
            padding: `0 ${rhythm(1)}`,
            paddingLeft: `calc(${rhythm(8)} + ${rhythm(1)})`,
          }}
        >
          {props.children}
        </div>
      </Breakpoint>
      <Breakpoint>
        <ul
          style={{
            listStyle: 'none',
            marginLeft: 0,
            marginTop: rhythm(1/2),
          }}
        >
          {docPages}
        </ul>
        <br />
        <br />
        {props.children}
      </Breakpoint>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
