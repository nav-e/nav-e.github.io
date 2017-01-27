import React from 'react'
import { colors } from 'utils/colors'
import { config } from 'config'
import DocumentTitle from 'react-document-title'

import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'


const headImgUrl = "../images/road.jpeg"

const STYLES = {
  content: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.2em"
  },
  headImg: {
    background: `url('${headImgUrl}') center center`,
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
          <img style={{ margin: "auto" }} src="images/GN_logo_white_t.png"/>
        </Paper>
      </div>

      <div style={{ background: "#ECEFF1" }}>
        <section style={STYLES.section}>
          <h1>The Community</h1>
          <p>
            The GreenNav organization is a community of young researchers and students at the University
            of Lübeck. We decided not long ago to go open source in order to collaborate with others and
            to show what we are working on.
          </p>
          <p>
            The projects of the GreenNav organization are closely related to the student projects at the
            university's computer science program. However, with this organisation we invite everyone to
            participate in the development of experimental routing systems.
          </p>
          <p>
            Because the GreenNav organization is not funded, the contributions are mostly done by
            volunteers. The
            The <a
              href="http://www.isp.uni-luebeck.de/staff/schoenfr"
            >project manager <i className="fa fa-external-link" /></a> is a PhD student researching on routing problems
            for sustainable transportation and his scholarship
            is funded by
            the <a
              href="http://www.eksh.org/"
            >Gesellschaft für Energie und Klimaschutz Schleswig Holstein (EKSH) <i className="fa fa-external-link" /> </a>.
            However, most of the work is done by students willing to work on the project during their studies.
          </p>
        </section>
      </div>

      <div style={{ background: "#1B5E20", color: "white" }}>
        <section style={STYLES.section}>
          <h1>What is GreenNav</h1>
          <p>
            Green Navigation (abbreviated as GreenNav) provides driving directions for electric
            vehicles and predicts their cruising range. It is a client-server system: The client
            provides a platform independent web interface written in JavaScript. The server offers
            access to specialized algorithms written in Java via a REST interface. The aim of the
            project is to provide various tools for electric vehicles. There are two sides to the project:
          </p>
          <h2>For Drivers</h2>
          <p>
            On one side, we want to provide drivers of electric
            vehicles with practical solutions, that is, with optimal driving direction for their route.
            For that we are developing a platform independent navigation system.
          </p>
          <h2>For Scientists</h2>
          <p>
            On the other side, we
            want to develop tools for scientifically analyzing algorithmic solutions. For that we are
            developing tools for visualization of algorithms, for comparing their performance, we want
            to provide a generic API for custom algorithms and a lot more.
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
          <h1>Have a go!</h1>
          <p>
            Try out GreenNav here, but notice that we are currently using only the map of Bavaria in Germany:
          </p>
          <p>
            <a
              href="http://www.isp.uni-luebeck.de/greennav"
              style={{ color: "white" }}
            >
              http://www.isp.uni-luebeck.de/greennav <i className="fa fa-external-link" />
            </a>
          </p>
          <p>
            You could try to search for a route between Munich, Augsburg, Nuremberg, Regensburg and
            other cities in Bavaria. Notice also, that some routes are not shown if the vehicles battery
            charge is not sufficient. Here are some examples to try out:
          </p>
          <p>
            <a
              href="http://www.isp.uni-luebeck.de/greennav/?from=munich&to=augsburg&vehicle=Sam&battery=100"
              style={{ color: "white" }}
            >
              Munich to Augsburg using a Sam with 100% battery <i className="fa fa-external-link" />
            </a>
          </p>
          <p>
            <a
              href="http://www.isp.uni-luebeck.de/greennav/?from=nuremberg&to=erlangen&vehicle=Spyder-S&battery=100"
              style={{ color: "white" }}
            >
              Nuremberg to Erlangen using a Spyder-S with 100% battery <i className="fa fa-external-link" />
            </a>
          </p>
        </section>
      </div>

      <div style={{ background: "#2C5770", color: "white"}}>
        <section style={STYLES.section}>
          <h1>Background</h1>
          <p>
            The project was initiated by Martin Leucker and Martin Sachenbacher at the Technische
            Universität München (TUM). After finishing a first prototype around 2009, the project
            migrated to the University of Lübeck, where it is continued by René Schönfelder since
            2012. Various ideas have since been implemented for scientific research within multiple
            student projects. Overall there have been more than 50 students participating in the
            development of the project.
          </p>
          <p>
            While there are excellent routing services out there, we aim to support sustainable
            means of transportation. One important aspect is therefore the combination of private
            routes with public transportation. The routing problems arising are more complex than the
            shortest path problem, the basic problem of finding a path with least costs in a road network.
            We want to consider various aspects, such as a prediction of the energy consumption of
            different electric vehicles, their battery capacity, uncertainties arising from driving
            behavior or the environment, time-dependency as for public transportation or congested
            routes, and a lot more.
          </p>
        </section>
      </div>

    </div>
  </DocumentTitle>
)

export default Index
