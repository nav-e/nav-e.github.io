---
layout: page
title: Interface
---

The GreenNav server provides a REST interface, that is used by the web application. The interface is documented here.

### Examples

### get: /

The root service is an alive message providing information about the server's status. There is no further input and no exceptional behavior.

The output is a short HTML message about the server's status. So far it is either "everything is running" or the name of an exception that was thrown and couldn't be captured.

### get: /vertices/nearest

Vertices are the nodes of the network, they represent locations on the map. Currently, there is only
one method implemented to request vertex IDs. Notice, that GreenNav handles vertices only by
their respective IDs, which are of type long. Do not use integers! This method searches for the nearest vertex at given coordinates within the data set.

* lat (request parameter, mandatory): The latitude as a floating point degree ranging from -90 to +90.
* lon (request parameter): The longitude as a floating point degree ranging from -180 to +180.

For floating point values, use dots (not commas as in the German numbering system) for decimal points.

The output is a simple value of type long, the ID of a GreenNav vertex.

If no vertex is in range (500m, configurable), a 404 error occurs.

### get: /vehicles

Vehicles are a fundamental part of GreenNav. Routes and ranges are viewed as subcollections of
vehicles - each vehicle has a collection of vertex-to-vertex optimal paths.
This method returns a list of vehicle names.

Currently there are no input parameters, but we will introduce parameters for filtering and sorting
later.

Output: JSON array of String values, those are the names of built-in vehicle types.

### get: /vehicles/{vehicle}

This method provides details of a vehicle type.

* vehicle (path variable, mandatory): The name of the vehicle. It must be an element of the array provided by /vehicles.

The output is a JSON object describing the vehicle type.
* name: The name of the vehicle type.
* lambda: Rotational inertia (dimensionless), currently not used.
* emptyWeight: The weight of an empty vehicle of that type in kg.
* cw: The drag coefficient (dimensionless).
* vMax: The maximum speed of the vehicle in m/s.
* etaMDischarge: Efficiency for discharge (dimensionless).
* etaMRecuperation: Efficiency for recuperation (dimensionless).
* surfaceA: An approximate value of vehicles front surface in m 2 .
* capacity: The capacity of the vehicle’s battery in J.
* auxiliaryPower: Currently not used.

### get: /vehicles/{vehicle}/routes/{from}-{to}/opt/{for}

This method computes an optimal route.

Inputs:
* vehicle (path variable, mandatory): The name of the vehicle. It must be an element of the array provided by /vehicles.
* from (path variable, mandatory): The GreenNav ID of the start vertex. Use /vertex/nearest to get certain IDs.
* to (path variable, mandatory): The GreenNav ID of the destination vertex. Use /vertex/nearest to get certain IDs.
* for (path variable, mandatory): The optimization criterion to be used for routing. It is either distance, time or energy. We also
plan to implement this method without specifying an optimization criterion providing all
three optimal paths at once.
* battery (request parameter, optional): The initial battery charge of the vehicle in percentage from 0 to 100. The default value is 100%.
* turns (request parameter, optional): Determines, if turn-by-turn route information is to be added to the final route. The value is
either "true" or "false". The default value is "false".
* algorithm (request parameter, optional): The preferred routing algorithm that should be used for this request. All possible values are described by /algorithms (see below). This parameter exists for evaluation purposes.

The output is a JSON object describing the optimal path.
* algorithm: The name of the algorithm used for computing this path.
* batteryStatus: The predicted battery charge remaining at the destination.
* route: An array of latitude-longitude pairs describing the path from start to destination. Latitude and longitude are given in degrees ranging from -90 to 90 and -180 to 180 respectively. We are planning to include the vertex IDs to the latitude-longitude pairs. In the case of turn-by-turn navigation, the array elements (coordinates) are enriched by an integer turn code (see table below) and a street name of the (consecutive) street.
* time: The predicted time needed to travel from start to destination.
* distance: The predicted distance from start to destination.

This is the table of turn codes:

* 0: no turn
* 1: straight
* 2: left turn
* 3: right turn
* 4: slight left turn
* 5: slight right turn
* 6: sharp left turn
* 7: sharp right turn
* 20: enter the roundabout
* 21: leave the roundabout

The value 1 for “straight” is different from “no turn”, because it is used for updating street names. The name is that of the street the vehicle is just entering at this point.

Example for a slight left turn node (when turns are switched on) meaning that at given coordinates
turn slightly left in order to enter Husumer Straße:
* {"latitude":54.6108173, "longitude":8.978129500000001, "street": "Husumer Straße", "turn":4}
When turn-by-turn is switched off, the example would just be
* {"latitude":54.6108173, "longitude":8.978129500000001}

### get: /vehicles/{vehicle}/ranges/{from}

This method computes the range of an electric vehicle.

* vehicle (path variable, mandatory): The name of the vehicle. It must be an element of the array provided by /vehicles.
* from (path variable, mandatory): The GreenNav ID of the start vertex. Use /vertex/nearest to get certain IDs.
* battery (request parameter, mandatory): The initial battery charge of the vehicle in percentage from 0 to 100. We plan to provide a default value of 100%.

We also plan to provide an optional request parameter algorithm in order to choose a preferred
algorithm for the computation of a range. This is interesting for comparing performance or as soon
as different approximative results are computed.

The output is a JSON object describing the range of the electric vehicle.
* algorithm: The name of the algorithm used for computing the range.
* batteryStatus: The initial battery charge of the request.
* initialPoint: The start vertex of the request.
* rangePoints: An array of latitude-longitude pairs describing a polygon. Latitude and longitude are given in degrees ranging from -90 to 90 and -180 to 180 respectively.

### get: /algorithms

This method lists all possible (routing) algorithms. Notice, that some algorithms are specialized
towards particular routing requests! For example, the algorithm EnergyAStar-wgp-energy can only
be used for routing requests optimizing for energy consumption.

### get: /algorithms/{algorithm}

This method presents details about a certain algorithm.

Input:

* algorithm (path variable, mandatory): The identifier of the algorithm. It must be an element of the array provided by /algorithms.