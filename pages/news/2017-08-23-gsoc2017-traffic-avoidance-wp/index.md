---
title: GSoC 2017 - Traffic Avoidance - Saumya Suvarna
date: '2017-08-23T00:00:00.284Z'
layout: post
path: /news/2017-08-23-gsoc2017-traffic-avoidance-wp/
tags:
  - google
  - gsoc
---

### Google Summer of Code 2017
### Implementing Traffic Avoidance, by Saumya Suvarna

**Category:** Experimental  
**Mentors:** Fabian Bormann

## Overview

My main aim for GSoC 2017 within the Greennav project was to identify areas where machine learning can be leveraged for new and enhanced features. The different modules corresponding to different areas where machine learning could be leveraged and the corresponding description is given. Additional detailed description is given in the respective Jupyter notebooks.

Current Contents:
### 1. Fuel prediction:

Directory: [Fuel_prediction](https://github.com/Greennav/machine-learning/tree/master/Fuel_prediction) <br>
This module has three different functionalities namely:

1. Getting the Energy consumption
2. Getting the amount of CO2 that is saved from being emitted into the environment     because of using an Electric vehicle
3. Getting the Recharge time required for the journey.

The calculations are shown in the Ipython Notebook and the data that is used is kept in the subdirectory /Fuel_consumption_dataset
Additionally, I have used machine learning to calculate the CO2 that will be emitted per kilometer and created a dataset in CSV and JSON format that can be used by anyone.


### 2. Route Option:

Directory: [Route_option](https://github.com/Greennav/machine-learning/tree/master/Route_option)<br>
This module focuses on leveraging human knowledge to get the best route for traffic avoidance. At a  given time due to certain circumstances (like rush hour), it is possible that a certain route may be faster than a route shown on the map. People who travel at those times or people who are residents of those areas have more knowledge about which route should be taken at what time. If every person entered which path to be taken based on their experience we could create a database that will help us to predict which path should be taken. The same has been done in this module

### 3. Trajectory:

Directory: [Trajectory](https://github.com/Greennav/machine-learning/tree/master/Trajectory)<br>
Visualization of the route a car takes. Wouldn't you like to see a map of all the places that you have explored in your electric vehicle so far? That is what this module is about. Using data sampling and machine learning the path taken by the vehicle has been visualised. This can be used in two levels- one for an individual car and one showing all the electric vehicles so far. 

### 4. Route Predictor:

Directory: [Route_prediction](https://github.com/Greennav/machine-learning/tree/master/Route_prediction)<br>
This module helps to predict the route that the car will take based on the previous history. Wouldn't you like your map to automatically predict the path with least traffic? Wouldn't it be awesome if your map showed you the path to be taken after checking where other cars are going to go? This is what module is about. Based on the initial few points and the previous history, it will predict the route that the car will take, thus helping to determine the predicted congestion and helping in routing the electric cars better.

### 5. Driving Simulator:

Directory: [Driving_simulator](https://github.com/Greennav/machine-learning/tree/master/Driving_simulator)<br>
A simulator for vehicles to learn how to drive from themselves. Can be used for data generation.

### 5. Smart Notification:

Directory: [Smart_notification](https://github.com/Greennav/machine-learning/tree/master/Smart_notification)<br>
This module helps in filtering the notification in order to not spam the users. This can be integrated with the notification system application that might be added to the GreenNav repository. This machine learning package can be used by the organisation later.

### Proposal link

[Traffic avoidance and prediction of energy consumption of electric vehicles with real time notification system](https://github.com/Greennav/greennav.github.io/files/1253903/Saumya_Suvarna_Proposal_GSoC2017.pdf)

## Final Product

  * #### [Repository](https://github.com/Greennav/machine-learning)

  * #### [Commits](https://github.com/Greennav/machine-learning/commits/master)

  * #### [Kanban Board](https://github.com/orgs/Greennav/projects/5)

## What's left to do

