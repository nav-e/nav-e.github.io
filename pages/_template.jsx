import React, { PropTypes } from 'react'
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid'
import { colors, activeColors } from 'utils/colors'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import typography from 'utils/typography'

import { config } from 'config'
import Divider from 'material-ui/Divider'
import GnLogo from 'pages/images/GN_logo_green2.png'

// Import styles.
import 'css/main.css'
import 'css/github.css'
import 'css/font-awesome.min.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const { rhythm, adjustFontSizeTo } = typography


const Template = (props) => {
  const newsActive = includes(props.location.pathname, '/news/')
  const docsActive = includes(props.location.pathname, '/docs/')
  const devActive = includes(props.location.pathname, '/development/')

  const STYLE = {
    link: {
      textDecoration: 'none',
      paddingLeft: rhythm(1/2),
      paddingRight: rhythm(1/2),
      paddingTop: rhythm(1/2),
      marginTop: rhythm(-1),
      paddingBottom: rhythm(1/2),
      marginBottom: rhythm(-1),
      lineHeight: "50px",
    }
  }

  const links = (
    <div>
      <Link
        to={prefixLink('/news/')}
        style={{
          ...STYLE.link,
          borderBottom: newsActive ? `2px solid ${config.primaryColor}` : "",
          color: newsActive ? activeColors.fg : colors.fg,
        }}
      >
        News
      </Link>
      <Link
        to={prefixLink('/docs/')}
        style={{
          ...STYLE.link,
          borderBottom: docsActive ? `2px solid ${config.primaryColor}` : "",
          color: docsActive ? activeColors.fg : colors.fg,
        }}
      >
        Docs
      </Link>
      <Link
        to={prefixLink('/development/')}
        style={{
          ...STYLE.link,
          borderBottom: devActive ? `2px solid ${config.primaryColor}` : "",
          color: devActive ? activeColors.fg : colors.fg,
        }}
      >
        Development
      </Link>
      <a
        style={{
          color: colors.fg,
          textDecoration: 'none',
          paddingLeft: rhythm(1/2),
          paddingRight: rhythm(1/2),
        }}
        href="https://github.com/Greennav/GreenNav"
      >
        <i className="fa fa-github fa-lg" />
      </a>
    </div>
  )

  const logo = (
    <Link
      style={{
        textDecoration: 'none',
        color: colors.fg,
        fontSize: adjustFontSizeTo('25.5px').fontSize,
      }}
      to={prefixLink('/')}
    >
      <img alt={config.siteTitle} src={GnLogo} />
    </Link>
  )

  return (
    <MuiThemeProvider>
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
          }}
        >
          <Container>
            <Grid columns={12}>
              <Breakpoint minWidth={700} widthMethod="componentWidth">
                <Span
                  columns={6}
                  style={{
                    height: 50,
                  }}
                >
                  {logo}
                </Span>
                <Span columns={6} last>
                  {links}
                </Span>
              </Breakpoint>
              <Breakpoint maxWidth={700} widthMethod="componentWidth">
                <Span
                  columns={12}
                  style={{
                    height: 50,
                    textAlign: "center"
                  }}
                >
                  {logo}
                </Span>
                <Span
                  columns={12}
                  style={{
                    height: 50,
                    textAlign: "center"
                  }}
                >
                  {links}
                </Span>
              </Breakpoint>
            </Grid>
          </Container>
        </div>
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default Template
