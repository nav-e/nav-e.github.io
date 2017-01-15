import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'


const style = {
  Container: {
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
  }
}

const Template = (props) => {
  const { location, children } = props

  return (
    <Container style={style.Container}>
      {children}
    </Container>
  )
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
