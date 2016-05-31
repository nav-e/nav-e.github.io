---
layout: page
title: What is GreenNav
---

![](http://www.isp.uni-luebeck.de/~schoenfr/greennav/banner.svg)

Welcome to the Green Navigation wiki!

### The project

Green Navigation (abbreviated as GreenNav) provides driving directions for electric vehicles and predicts their cruising range. It is a client-server system: The client provides a platform independent web interface written in JavaScript. The server offers access to specialized algorithms written in Java via a REST interface. The aim of the project is to provide various tools for electric vehicles.

There are two sides to the project: On one side, we want to provide drivers of electric vehicles with practical solutions, that is, with optimal driving direction for their route. For that we are developing a platform independent navigation system. On the other side, we want to develop tools for scientifically analyzing algorithmic solutions. For that we are developing tools for visualization of algorithms, for comparing their performance, we want to provide a generic API for custom algorithms and a lot more.

![](http://www.isp.uni-luebeck.de/~schoenfr/greennav/googlefrontend.png)

Here you can see three example routes to Travemünde at the Baltic Sea. The routing is based on the road network provided by OpenStreetMap (osm.org) which is augmented by altitudes taken from the NASA Shuttle Radar Topographic Mission (SRTM). The three routes shown on the Google Maps widget here are optimized for distance (blue), speed (red) and energy (green).

### Have a go!

Try out GreenNav here, but notice that we are currently using only the map of Bavaria in Germany:
* [http://www.isp.uni-luebeck.de/greennav/](http://www.isp.uni-luebeck.de/greennav/)

You could try to search for a route between Munich, Augsburg, Nuremberg, Regensburg and other cities in Bavaria. Notice also, that some routes are not shown if the vehicles battery charge is not sufficient. Here are some examples to try out:

* [Munich to Augsburg using a Sam with 100% battery](http://www.isp.uni-luebeck.de/greennav/?from=munich&to=augsburg&vehicle=Sam&battery=100)
* [Nuremberg to Erlangen using a Spyder-S with 100% battery](http://www.isp.uni-luebeck.de/greennav/?from=nuremberg&to=erlangen&vehicle=Spyder-S&battery=100)

### Background

The project was initiated by Martin Leucker and Martin Sachenbacher at the Technische Universität München (TUM). After finishing a first prototype around 2009, the project migrated to the University of Lübeck, where it is continued by René Schönfelder since 2012. Various ideas have since been implemented for scientific research within multiple student projects. Overall there have been more than 50 students participating in the development of the project.

While there are excellent routing services out there, we aim to support sustainable means of transportation. One important aspect is therefore the combination of private routes with public transportation. The routing problems arising are more complex than the shortest path problem, the basic problem of finding a path with least costs in a road network. We want to consider various aspects, such as a prediction of the energy consumption of different electric vehicles, their battery capacity, uncertainties arising from driving behavior or the environment, time-dependency as for public transportation or congested routes, and a lot more. 