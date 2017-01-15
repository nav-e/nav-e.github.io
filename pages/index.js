import React from 'react'
import { config } from 'config'
import DocumentTitle from 'react-document-title'

import Divider from 'material-ui/Divider'


const Index = () => (
  <DocumentTitle title={`Welcome | ${config.siteTitle}`}>
    <div>
      <img src="images/GN_logo_white.png"/>
      <Divider style={{ marginBottom: 50 }} />
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
        volunteers. The <a href="http://www.isp.uni-luebeck.de/staff/schoenfr">project manager</a> is a
        PhD student researching on routing problems for sustainable transportation and his scholarship
        is funded by the <a href="http://www.eksh.org/">Gesellschaft für Energie und Klimaschutz Schleswig Holstein (EKSH)</a> . 
        However, most of the work is done by students willing to work on the project during their studies.
      </p>
      <h1>What is GreenNav</h1>
      <div>
        <h2>The project</h2>
        <p>
          Green Navigation (abbreviated as GreenNav) provides driving directions for electric
          vehicles and predicts their cruising range. It is a client-server system: The client
          provides a platform independent web interface written in JavaScript. The server offers
          access to specialized algorithms written in Java via a REST interface. The aim of the
          project is to provide various tools for electric vehicles.
        </p>
        <p>
          There are two sides to the project: On one side, we want to provide drivers of electric
          vehicles with practical solutions, that is, with optimal driving direction for their route.
          For that we are developing a platform independent navigation system. On the other side, we
          want to develop tools for scientifically analyzing algorithmic solutions. For that we are
          developing tools for visualization of algorithms, for comparing their performance, we want
          to provide a generic API for custom algorithms and a lot more.
        </p>
        <img alt={config.siteTitle} src="https://cloud.githubusercontent.com/assets/1525818/20647282/91a869c0-b490-11e6-9fda-ff542229dade.gif" />
        <p>
          Here you can see three example routes to Travemünde at the Baltic Sea. The routing is based
          on the road network provided by OpenStreetMap (osm.org) which is augmented by altitudes
          taken from the NASA Shuttle Radar Topographic Mission (SRTM). The three routes shown on
          the Google Maps widget here are optimized for distance (blue), speed (red) and energy (green).
        </p>
      </div>
      <h2>Have a go!</h2>
      <p>
        Try out GreenNav here, but notice that we are currently using only the map of Bavaria in Germany:
      </p>
      <ul>
        <li><a href="http://www.isp.uni-luebeck.de/greennav">http://www.isp.uni-luebeck.de/greennav</a></li>
      </ul>
      <p>
        You could try to search for a route between Munich, Augsburg, Nuremberg, Regensburg and
        other cities in Bavaria. Notice also, that some routes are not shown if the vehicles battery
        charge is not sufficient. Here are some examples to try out:
      </p>
      <ul>
        <li>
          <a href="http://www.isp.uni-luebeck.de/greennav/?from=munich&to=augsburg&vehicle=Sam&battery=100">
            Munich to Augsburg using a Sam with 100% battery
          </a>
        </li>
        <li>
          <a href="http://www.isp.uni-luebeck.de/greennav/?from=nuremberg&to=erlangen&vehicle=Spyder-S&battery=100">
            Nuremberg to Erlangen using a Spyder-S with 100% battery
          </a>
        </li>
      </ul>
      <h2>Background</h2>
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
    </div>
  </DocumentTitle>
)

export default Index
