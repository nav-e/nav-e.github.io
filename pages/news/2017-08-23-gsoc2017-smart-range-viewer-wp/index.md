---
title: GSoC 2017 - Smart Range Viewer - Ong Jia Rui
date: '2017-08-23T00:00:00.284Z'
layout: post
path: /news/2017-08-23-gsoc2017-smart-range-viewer-wp/
tags:
  - google
  - gsoc
---

### Google Summer of Code 2017
### Implementing Smart Range Viewer, by Ong Jia Rui

**Category:** Frontend  
**Mentors:** Franz Klaus, Thomas Ort

## Overview

The objective of the Smart Range Viewer project was to build a range computation and visualization tool using ReactJS and Javascript, to ease range anxiety among electric vehicle drivers. By making the visualisation more succinct and displaying it in the form of a beautiful polygon, drivers can have an intuitive and pleasant way of knowing how far they can travel and where they can travel to, giving them peace of mind.

Four design requirements for the range polygon were initially proposed:
1. Places on the vertex of the range polygon should be reachable, hence excluding mountainous regions or lakes or the sea,
2. Slicing of polygon should not simplify the polygon too much and result in marking regions as non-reachable,
3. Regions where probability of it being reachable is low, such as the border of the polygon, should be indicated,
4. Range polygon should also show regions which one can drive to and return back home from.  


Implementation of the Smart Range Viewer project, which took place over a 13-week period between 30th May and 29th Aug, was composed of the following phases:  

Week 1- 2:  
	- Added range polygon layer to OpenLayers map
	- Styling of range polygon
	- Implemented calculateRangePolygon using a Geodesic library to calculate a simple polygon based on remaining vehicle range
	- Integrated Geolocation API to display user's current location
Week 3-5:
	- Integrated Overpass API for testing vehicular accessibility of user's starting location
	- Added location picking functionality to OpenLayers map
	- Refactored Reachability Tab to an individual React Component
Week 6-8:
	- Added text fields for entering origin and destination under Reachability Tab
	- Added button for hiding of range polygon
	- Added OpenLayers control for displaying of location picker coordinates
	- Added map zooming and re-centering capabilities to range polygon display
Week 9-10:
	- Added support for units conversion between miles and kilometres
	- Added snackbar alerts to display user warnings
	- Added floating action button for centering of map to user's location
Week 11-12:
	- Integrated range polygon computation API from Range Anxiety project by Leah Chrestien
	- Added support for entering of coordinates to origin and destination fields
	- Improved display of coordinates under Reachability Tab
Week 13:
	- Integrated Google Map's Places and Autocomplete Service for convenient searching of places or addresses
	- Integrated Turf.js convex hull method to sort polygon vertices for better visual display
	- Refactored code for final evaluation  
    

The eventual project differed from the original proposal in several areas due to technical limitations and the discovery of other GSOC projects with similar objectives. The focus of this project thus shifted towards the front-end segment with Leah Chrestien (a fellow GSOC participant) working on the range computation algorithm in Java.  

Over the course of the 13 weeks, a user-friendly front-end tool for visualisation of a range polygon was completed. Other functionalities, such as location picking, location search, units conversion, support for user's geolocation were added to the main GreenNav application for user convenience. Some of these functionalities, while currently limited to the Reachability Tab, can be easily extended to the Routing Tab in future projects.

### Proposal link

[Smart Range Viewer](https://github.com/Greennav/greennav.github.io/files/1253906/Ong_Jia_Rui_Proposal_GSoC2017.pdf)

## Final Product

  * #### [Repository](https://github.com/Greennav/GreenNav) (dev fork: [Reachibility](https://github.com/jrios6/GreenNav/tree/reachability))

  * #### [Commits](https://github.com/jrios6/GreenNav/commits/reachability)

  * #### [Kanban Board](https://github.com/orgs/Greennav/projects/1)

## What's left to do

While the Reachability Tab offer users the choice of indicating their destination, this information is currently not used while generating the range polygon. Currently, the range computation algorithm in the back-end does not consider the destination when computing the vertices. Should such an algorithm be implemented, the application should call the new API if a destination is indicated.

Furthermore, the application should support the display of range polygons with regions coloured differently based on their probability of being reachable, should such a range computation algorithm be developed in the future.
Also, there were issues faced with CORs when integrating the Google Places Web Services API.  The Google Map JavaScript Library, which requires the insertion of a Google Map Object to the DOM, was used instead. This is a short-term workaround and should be remedied for future deployment at scale.

To provide a consistent user experience, location search, location picking and the use of geolocation should be extended to the Routing Tab.

Finally, the application should be integrated with an updated database of electric vehicles and their maximal range, so that users can easily choose their current vehicle and battery level.
