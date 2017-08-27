---
title: GSoC 2017 - Range Anxiety - Leah Chrestien
date: '2017-08-23T00:00:00.284Z'
layout: post
path: /news/2017-08-23-gsoc2017-range-anxiety-wp/
tags:
  - google
  - gsoc
---

### Google Summer of Code 2017
### Implementing Range Anxiety, by Leah Chrestien

**Category:** Algorithm  
**Mentors:** Bruno Magalhães, René Schönfelder

## Overview 
The range-anxiety project combines combinatorial optimisation along with orthodromic distance calculations in order to determine a set of coordinates at a chosen distance from the starting location. Assuming that our model of the Earth is a perfect sphere, this project uses the great - circle distances to calculate the shortest distance between any two points on the surface of the Earth. Such an assumption is motivated by the insignificant flattening of the Earth(about 1/300) and manifests itself through the [Haversine function](http://www.movable-type.co.uk/scripts/latlong.html) which regulates the selection of coordinates from the [Open Street Map](http://www.openstreetmap.org) database. Once this selection process is complete, a combinatorial optimisation algorithm  is applied on all the coordinates that fall within the required boundary and attempts to arrange them in a sorted circular order. The nearest-neighbour approach of the Travelling Salesman algorithm used in this context, reduces the risk of running into a non-convex polygon boundary and minimises the elimination of coordinates once they are are mapped onto a geographical region in the frontend. 

The range-anxiety repository has two main branches. The [master](https://github.com/Greennav/range-anxiety) branch returns a set of coordinates in the GeoJSON format and can by used by all map editors that follow the latitude/longitude format for drawing markers or polygons. The [OLformat](https://github.com/Greennav/range-anxiety/tree/OLformat) branch has been tailored to fit the requirements of the [GreenNav](https://github.com/Greennav) organisation and returns the coordinates in a longitude/latitude format. 

### Proposal link

[A Medication for e-range anxiety](https://github.com/Greennav/greennav.github.io/files/1253907/Leah_Chrestien_Proposal_GSoC2017.pdf)

## Final Product

  * #### Repository 
  
  1. [master](https://github.com/Greennav/range-anxiety)
  2. [OLformat](https://github.com/Greennav/range-anxiety/tree/OLformat)
  
  * #### Commits
  1. [master](https://github.com/Greennav/range-anxiety/commits/master)
  2. [OLformat](https://github.com/Greennav/range-anxiety/commits/OLformat)
  
  * #### [Kanban Board](https://github.com/orgs/Greennav/projects/2)

## Reports

  * [Objectives of the Range Anxiety project](https://github.com/Greennav/range-anxiety/blob/master/docs/report1.pdf)
  * [Algorithm summary, Travelling Salesman](https://github.com/Greennav/range-anxiety/blob/master/docs/report2.pdf)
  * [Results: GeoJSON output and polygon](https://github.com/Greennav/range-anxiety/blob/master/docs/results1.pdf)
  * [Results: API Demonstration](https://github.com/Greennav/range-anxiety/blob/master/docs/results2.pdf)

## Working Example
The examples listed below use [Jordan.osm.pbf](http://download.geofabrik.de/asia/jordan-latest.osm.pbf) for the map data.

To get the polygon format, using either lat/lng or OSM Node Id parameters.

* ```http://localhost:8111/greennav/polygon?startlat=31.7239898&startlng=35.6429683&range=10.0```
* ```http://localhost:8111/greennav/polygon?startNode=3602680930&range=10.0```


To get the marker format, using either lat/lng or OSM Node Id parameters.

* ```http://localhost:8111/greennav/marker?startlat=31.7239898&startlng=35.6429683&range=10.0```
* ```http://localhost:8111/greennav/marker?startNode=3602680930&range=10.0```

## Path Parameters

| Parameter        | Description          
| -------------    |:-------------| 
| polygon          | Returns a set of coordinates in the [GeoJSON](http://geojson.org/) format used for drawing polygons. | 
| marker           | Returns a set of coordinates in the [GeoJSON](http://geojson.org/) format used for drawing markers.  |  
| startlat         | The latitude of the starting location.      | 
| startlng         | The longitude of the starting location.     | 
| startNode        | [OSM's](http://www.openstreetmap.org) unique coordinate identification.     | 
| range            | Returns a set of coordinates in the [GeoJSON](http://geojson.org/) format at a specified range.     | 
  

## What's left to do

An interesting problem would be to examine the results when one accounts for the elliptical shape of the Earth. In such cases, the [Vincenty](http://www.movable-type.co.uk/scripts/latlong-vincenty.html) formula has been proved to be more accurate at determining the geospatial distances. There exists other [alternatives](https://www.cs.nmsu.edu/~dcook/thesis/paper2.html) to the nearest neighbour algorithm and one can always draw a comparison and choose the best of the lot.
