import React from 'react'
import { colors } from 'utils/colors'
import { config } from 'config'
import DocumentTitle from 'react-document-title'

import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import GnLogoWhite from 'pages/images/GN_logo_white_t.png'
import HeaderImg from 'pages/images/road.jpeg'


const STYLES = {
  content: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.2em"
  },
  headImg: {
    background: `url('${HeaderImg}') center center`,
    backgroundSize: "cover",
    color: "white",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  section: {
    maxWidth: 800,
    margin: "25px auto 25px auto",
    paddingLeft: "15px",
    paddingRight: "15px"
  }
}

const Index = () => (
  <DocumentTitle title={`Welcome | ${config.siteTitle}`}>

    <div style={STYLES.content}>

      <div style={STYLES.headImg}>
        <Paper style={{ opacity: 0.85, maxWidth: 600, margin: "50px auto 150px auto" }} zDepth={5}>
          <img style={{ margin: "auto" }} src={GnLogoWhite}/>
        </Paper>
      </div>

      <div style={{ background: "#ECEFF1" }}>
        <section style={STYLES.section}>
          <h1>About Green Navigation</h1>
          <p>
            Green Navigation (also: GreenNav) is an open source organization that emerged from an university project at the University of Lübeck, but is now independent. Our organization’s aim is to find the most energy efficient route for electric vehicles while providing a framework for new routing approaches.
          </p>
          <p>
            Even though there are existing routing services out there, we aim to support sustainable means of transportation. None of the other routing services considers aspects such as a prediction of the energy consumption of different electric vehicles, their battery capacity, and uncertainties arising from driving behavior or the environment, yet. Especially in the open source environment, nothing similar is to be found.
                  </p>
              <p>
            GreenNav utilizes freely available OpenStreetMap geospatial data (osm.org) and NASA altitude maps. The front end is able to prototype different routing algorithms and to compare them.
          </p>
        </section>
      </div>

      <div style={{ background: "#1B5E20", color: "white" }}>
        <section style={STYLES.section}>
          <h1>Participation in the Google Summer of Code 2016</h1>
          <p>
            GreenNav’s participation in the Google Summer of Code 2016 was a success for the project’s development. Thanks to the contributions, the front end is working properly. Still, we are still working on our back end for which everyone is invited to participate! Everything can be found on [GitHub](github.com/greennav).
          </p><p>
            Moreover, the project is published under the Apache License 2.0. This basically means that everyone is free to use and redistribute the software, but any original copyright, patent, trademark, and attribution notices must be preserved.
          </p>
          <img
            alt={config.siteTitle}
            src="https://cloud.githubusercontent.com/assets/1525818/20647282/91a869c0-b490-11e6-9fda-ff542229dade.gif"
          />
          <p>
            Here you can see three example routes to Travemünde at the Baltic Sea. The routing is based
            on the road network provided by OpenStreetMap (osm.org) which is augmented by altitudes
            taken from the NASA Shuttle Radar Topographic Mission (SRTM). The three routes shown on
            the Google Maps widget here are optimized for distance (blue), speed (red) and energy (green).
          </p>
        </section>
      </div>

      <div style={{ background: "#F05D21", color: "white" }}>
        <section style={STYLES.section}>
          <h1>Technologies used</h1>
          <p>
            Green Navigation makes use of
            <ul>
                <li>React Native for the front end</li>
                <li>Java for the back end with</li>
                <li>Spring for the REST-API and</li>
                <li>Docker as a database container (WIP)</li>
            </ul>
          </p>
        </section>
      </div>

      <div style={{ background: "#2C5770", color: "white"}}>
        <section style={STYLES.section}>
          <h1>Challenges</h1>
          <p>
            One of the challenges is to develop a scheme for the database for more efficient queries. Also the development of a consumption model for electric cars and a faster implementation of routing algorithms needs to be worked on. This is a fantastic opportunity to derive the consumption using machine learning!
          </p>
        </section>
      </div>

    </div>
  </DocumentTitle>
)

export default Index
