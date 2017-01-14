---
title: GSoC 2016 - Projects
date: '2016-05-29T00:00:00.284Z'
layout: post
path: /news/2016-05-29-gosc2016/
tags:
  - google
  - gsoc
---

To understand the different areas of this project please take a look at our roamap.

## Front end projects

### Refactoring and GUI design

The current webapp consists of different polymer elements. Before working on the integration of new features, it is necessary to rethink the current architecture, redesign the UI and refactor the codebase. Furthermore, documentation, logging and user notifications should be implemented in this GSoC project. A new logo would be nice, too.

- **Difficulty**: Easy
- **Skills**: Polymer, GUI design
- **Possible mentors**: Fabian Bormann

### Integration of new features

For the webapp, we would like to integrate information regarding weather, traffic, terrain height etc. Since the backend isn't implemented yet, you will create a proof of concept and an interface with the webapp and the back end. This requires communication with your mentor, so those features can be integrated easily upon completion of the GSoC.

- **Difficulty**: Easy
- **Skills**: Polymer, GUI design
- **Possible mentors**: Fabian Bormann

### Visualization tool

This project aims to create a single web application with polymer to compare different routing algorithms. It gets the information from either a backend, the prototyping tool or both. The steps of each algorithm are shown on a map component, together with statistics and other performance characteristics. Results should be analyzed (eg. via R) and exportable to enable developers to measure their algorithms, compare them and create useful graphics for their papers.

![Dijkstra's Algorithm](http://www.isp.uni-luebeck.de/~schoenfr/greennav/dijkstra.gif) ![A* Algorithm](http://www.isp.uni-luebeck.de/~schoenfr/greennav/astar.gif)

- **Difficulty**: Hard
- **Skills**: Polymer, R, statistics, routing algorithms
- **Possible mentors**: Florian Lenschow

### Prototyping tool

The prototyping tool allows developers to design and test new routing algorithms leveraging the GreenNav framework with all data sources (temperature, terrain height etc) easily. A simple MVP in polymer exists, which can be used as a starting point. Since the tool should be language agnostic to empower a variety of people to test their own ideas and algorithms, the language doesn't really matter. A widely used language is prefered (like Python for example) and communication happens via REST. The data for the algorithm is requested from the database service from the backend and results are visualized using the visualization tool which acts as the primary interface.

- **Difficulty**: Hard
- **Skills**: Polymer, Python (or any other good prototyping language), routing algorithms, REST
- **Possible mentors**: Fabian Bormann

## Back end projects

### Database service

A database is the integral part of this framework. The service will be written in Golang, with either SQLite (for portable devices) or Postgres as back end. It's tasks are

- Gathering data from

  - OSM
  - NASA (terrain information)
  - Weather services
  - Traffic services

- Creating and updating databases

- Making database queries and providing RPC and REST interfaces for the routing service

- Managing queries (batch queries, ordering, queueing etc)

The challenges are creating/updating the database, evaluating perfomance for different schemas, queries and caching strategies. Also, the service must be accessible via REST (to run standalone on a server) and is the main component for administration of the framework.

- **Difficulty**: ~~Nightmare~~ Very hard
- **Skills**: Database (SQLite3/Postgres), Golang, REST/RPC, Query optimization
- **Possible mentors**: Peter Schüllermann

### Routing service

This is the heart of the project. The routing service contains the algorithms (A_, Dijkstra, ...) and communicates with the database service and optionally with the native service. For now, the primary target is to make the service work with an example algorithm (eg. A_), so the foundation for future algorithmic work is laid out. The service communicates via RPC or REST with the database and the native integration service. Actual routes are provided with a REST interface for the front end (webapp or visualization tool).

- **Difficulty**: Medium
- **Skills**: Golang, routing algorithms, REST
- **Possible mentors**: Max Lorenz

### Native integration service

To use GreenNav in a vehicle or a portable device, the routing service needs information like battery status, speed or the location. In order to gather the information, this service should be easily adaptable to new architectures and provide a thin communication layer over the actual hardware. The service should provide the following features:

- Aquire and store data from a variety of sources (REST, RPC, UART, files etc.)
- Provide an interface (REST and/or RPC) to control (start / stop), configure and monitor the aquisition of data from different sources
- Enable simultaneous processing of different data sources (e.g. by utilizing goroutines)
- Be extensible, new sources of data should be easy to add
- Provide a way for listeners to register via REST, RPC and websocket and distribute updated data to them
- Provide a database to enable persistent storage or logging of resources
- Priotize the aquisition and distribution of time critical data

#### Possible Scenarios

- receiving battery data over UART and reading a configuration containing physical properties of the vehicle, like weight and acceleration. Those resources are then requested by the routing service via REST to estimate the remaining range of the vehicle
- receiving vehicle data over REST. A web based frontend showing the state of the vehicle registers as listener via websocket and has to be notfied, if a resource is changed. The data contains frequently altering data like the state of indicator lights
- receiving battery data over UART, being configured to log all values. A battery management service requests the log of the battery data via REST and uses the data to monitor battery health and provide predictions of the amount of remaining charge

- **Difficulty**: Medium

- **Skills**: Golang, Raspberry Pi, Hardware (UART), REST

- **Possible mentors**: Janis Feye

## Mobile projects

### React native app

We decided to implement GreenNav as a web application and provide a responsive website for mobile devices. But since Facebook launched React Native it's possible to write apps with a native feeling using only one code base using Javascript ES6\. So it would be very cool to develop an React Native app that works on Android and iOS. The backend (Database/SQLite, Routing service, Native service) must be bundled as libraries.

- **Difficulty**: Hard
- **Skills**: JavaScript ES6, React Native, Golang, Android, iOS
- **Possible mentors**: Fabian Bormann

## Own ideas

You have a cool idea that is aligned with our vision (see the roadmap) but is not listed here? We would love to hear it!

- **Difficulty**: Depends
- **Skills**: Whatever is necessary
- **Possible mentors**: [Mailing list](https://www.isp.uni-luebeck.de/mailman/listinfo/greennav)
