---
title: GSoC 2017 - Midterm Status Report
date: '2017-08-01T00:00:00.284Z'
layout: post
path: /news/2017-08-01-midterm/
tags:
  - google
  - gsoc
---

# Pavel Danilov: The Routing Server  
**Category:** Backend  
**Mentor:** Sebastian Bode

Probably the most essential part of Green Navigation is the routing server. Amongst other things, the routing server should be able to account for weather and height differences, and collaborate closely with our database project. Our project requires a fast and reliable server that supports computational optimal routing using efficient algorithms. Our student Pavel so far already has implemented the routing application via Dijkstra and AStar algorithms that supports navigating from point to point via a provided persistence interface. Currently, he is working on a prototype of contraction hierarchies and an API for visualization. 

# Leah Chrestien: Range Anxiety  
**Category:** Frontend  
**Mentors:** Bruno Magalhaes, René Schönfelder

Since recharging an electric vehicle takes longer than refueling a combustion engine vehicle, a lot of (potential) customers of electric vehicles have a fear of running out of energy. One step towards the solution is a precise computation and visualization of the vehicle’s range. Leah’s project aims to provide a well sketched road map that can safely determine the distances up to which the vehicle can travel without having to recharge in the midst of its on-going journey. Instead of using a circle to form the range boundary, Leah is using a polygon. And what is even better than one polygon? Two polygons! One describing the places that the electric vehicles can reach and another one describing the places the vehicle can reach AND return home from, which is approximately half as big. This is so because of the differences in energy consumption in different areas (like mountainous areas, for instance). This is how Leah determines the nodes forming the range boundary: 

First of all, all the coordinates forming nodes are assigned a unique key, which acts as an identifier. Then, a starting location is chosen, based on which the range will be determined. The haversine formula is used to determine the geographic
distance between any two coordinates and at any step, the haversine function is called with four input parameters (latitude 1, longitude 1, latitude 2, longitude 2) and returns the geographic distance between the coordinates - the value of range is set. 
This enables the algorithm to select nodes at that particular distance from the chosen centre. The algorithm uses the haversine function to determine these edge nodes, which are the filtered nodes. A double dimension array is introduced at this stage to store the distances between all the filtered nodes. To achieve a polygon having the minimum number of intersecting edges, it is important to output the coordinates in an ordered manner. Here, the travelling salesman problem (using nearest neighbour approach) is implemented to ensure minimum distances between all the filtered nodes. This problem is NP-hard and there is still a finite possibility of the intersection of edges. One can decrease this possibility by increasing the filtered nodes (and therefore increasing the original number of nodes) and improving the range precision. The output from this step is an ordered set of filtered nodes. The ordered set of filtered nodes from the last step is shown an a geoJSON output, which can be readily used in any map editor.
Jia Rui Ong: Smart Range Viewer
Category: Frontend
Mentor: Franz Klaus

In addition to that, Jia is working on the smart range viewer project, which involves building a range computation visualization tool on top of the react application to ease range anxiety among electric vehicle drivers. Some of the tasks he has completed so far include:
the addition of input fields to the reachability tab, 
the implementation of a function that draws a polygon given the vertices using OpenLayers API, 
the integration of OverpassAPI from OpenSourceMaps to verify if a geo-coordinate is accessible by vehicle, 
the implementation of a location picking functionality for users to choose their starting location and destination, 
the design of the API interface for range computation on the routing server
the integration of openlayer’s location tracking API to get user’s current geolocation, and
the addition of an OpenLayer Control to display the location picker coordinates.

This is what it looks like at the moment: 

![screenshot](https://user-images.githubusercontent.com/25430929/28843971-6f39fb52-7703-11e7-8c1b-b880176dc697.png)

# Samya Suvarna: Traffic Avoidance  
**Category:** Experimental  
**Mentors:** Fabian Bormann

One way to preserve energy is by avoiding traffic. Google does already give you the possibility to get notified when you have to leave - we want to go one step further and give more accurate energy consumption predictions by taking the traffic into account. This project does require a lot of collaboration with the database and the routing server project but can be solved independently. Data gathering and statistics are a huge part.
Therefore, Samya is working on the implementation of machine learning methods to solve and enhance the functionalities related to GreenNav. The first module consists of estimating the energy consumption of an electric car and predicting the amount of CO2 an electric car will save from being emitted into the environment. Additionally, the time required for recharging to reach the destination is calculated. 
The second module focuses on leveraging human knowledge to get the best route. At a given time due to certain circumstances (like rush hour), it is possible that a certain route may be faster than a route shown on the map. People who travel at those times or people who are residents of those areas have more knowledge about which route should be taken at what time. If every person entered which path to be taken based on their experience we could create a database that will help us to predict which path should be taken. 
The third module is a visualization of the route the car takes. Other modules that are work in progress include a driving simulator and a route predictor based on the previous history.

# Indraneil Paul: Predicting Energy Consumption 
**Category:** Experimental  
**Mentors:** Florian Lenschow

Indraneil’s project aims to develop a machine learning approach to predict the energy consumption of an electric vehicle given example data from the intended route and associated terrain information such as altitude. This will help GreenNav with alleviating range-anxiety and enable research with automatically fitting the model to unseen vehicles using only a few samples. The chosen approach is to leverage simple and well-understood machine learning techniques to extract the patterns from the data and build the model. After experimenting with linear regression, Indraneil has moved on to more sophisticated models like random forests and boosted decision trees. Currently, he is tuning the learners using hyperparameter optimization.
