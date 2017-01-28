---
layout: page
title: Ideas Page
---

Here is a collection of ideas, that we possibly want to work on in the future. We are also applying for this year's Google Summer of Code, so we also describe the projects in that context. The ideas are not ordered in any particular way.

For reference, this is [last year's ideas page](/news/2016-05-29-gosc2016/).

## Mocking the CAN Bus

The CAN bus is a protocol, that microcontrollers in a vehicle use to communicate. By connecting to the bus, we get access to a wide range of information about the vehicle. The most interesting one is the current energy consumption, which we could use to learn and better predict the vehicle's range.

Because working on the actual hardware is a little out of scope, we want to build a mock, that can later be replaced by a physical CAN bus. The mock could be fed with a series of actual CAN bus traces. Augmented with the corresponding GPS coordinates, we can improve our model of energy consumption.

![Component Diagram for CAN Mock](./ideas_page_can_mock.png "Component Diagram for CAN Mock")

The highlighted components in this diagram are part of this idea. The GPS mock is quite simple and already exists.

##### Further Information

*Prerequisites*: Some experience in micro controller programming, further programming skills in Javascript/ReactJS, basic understanding of the CAN bus and how to read information from it.

*Tools and Frameworks*: ReactJS, some micro controller.

*Estimation of difficulty*: Average.

*Potential mentor*: Max, Janis


## Range Computation

Probably the most important information for customers buying electriv vehicles is the range of the vehicle. Because recharging takes longer than refueling a combustion engined vehicle, the fear of running out of energy is emergent. This is called range anxiety and we want to solve that problem!

One important step towards a solution is a precise computation and visualization of the vehicles range. This idea is about making visualization more succinct. What's the use in just having a circle of a particular diameter? We want to show the driver a beautiful polygon.

<div style="text-align: center">
<img style="width: 60%" alt="Range Computation" src="ideas_page_range.png" />
</div>

This range polygon was created by segmenting the search space into 32 slices and taking the most distant vertex in each segment. Those are connected to form the polygon. This quite naive method is okay for starters, but there are various problems that we want to solve:

- Some places may be mistakenly marked as reachable, especially in mountainous areas.
- Some places may be mistakenly marked as non-reachable, because the slicing simplifies the polygon too much.
- The reachability decision is binary, but of of course some places can be reached with a lesser probability, for example those at the border of the polygon.
- Actually, two polygons are interesting: We want to see which places we can reach, and we also want to see a polygon describing the places that we can reach and also return home from, which is approximately half as big.

##### Further Information

*Prerequisites*: Knowledge about geographic coordinates and their transformations, programming skills in Javascript/ReactJS, basic understanding of the needs of electric vehicle drivers.

*Tools and Frameworks*: Javascript, ReactJS.

*Estimation of difficulty*: Easy to average.

*Potential mentor*: Fabian

## Routing Benchmarks

Because we are also working on the routing algorithms, we want to measure and visualize our experiments. This is all about accurate measurement gathering and fancy visualizations.

In general, an algorithm may be seen as a black box. The input is transformed after some time to an output. We are interested for example in running time and memory consumption. However, modern routing algorithms need to perform precomputations, such that queries can be answered more efficiently. This breaks the black box idea and we are therefore interested in a lot more aspects. Basically, two steps need to be measured, the precomputation and the query. We are interested e.g. in:

- precomputation time
- precomputation memory/space consumption
- adaptation time on network changes
- query times
- query memory consumption
- number of visited vertices
- number of relaxed edges

Some of our algorithms are (going to be) implemented on the JVM,
so one obvious choice would be to use JConsole, a built-in monitoring tool for the JVM.

Here are some visualizations we want to create:

<div style="text-align: center">
<img style="width: 40%" alt="Example Dijkstra Search" src="ideas_page_benchmark_map_dijkstra.gif" />
<img style="width: 40%" alt="Example A* Search" src="ideas_page_benchmark_map_astar.gif" />
<img style="width: 80%" alt="Example Efficiency Plot" src="ideas_page_benchmark_plot.png" />
</div>

##### Further Information

*Prerequisites*: Interest in scientific benchmarking, programming skills in Java/Scala, basic understanding of the JVM.

*Tools and Frameworks*: JConsole, JVM, ReactJS, some chart library (e.g. react-chartjs).

*Estimation of difficulty*: Average, can be tailored to fit the student's prior knowledge.

*Potential mentor*: René

## Charging Stations / Points of Interest

Charging stations are still quite sparse in many regions. Drivers of electric vehicle sometimes need to plan carefully for longer trips. We want to provide the user directly with information about loading station in the proximity of the chosen route.

Furthermore, GreenNav is also about sustainable and green lifestyle, so we might also add highlighting and information about sustainable clothing shops, biological food markets, or any other location, that our user group is interested in.  

##### Further Information

*Prerequisites*: Basic knowledge in data processing to integrate the relevant information (ideally with OSM) into our database.

*Tools and Frameworks*: OSM, Javascript/ReactJS.

*Estimation of difficulty*: Average to difficult.

*Potential mentor*: Max, Fabian, René


## Intermodality with GreenNav

This is about your creative ideas. There are many ways to make sustainable mobility more efficient, more comfortable, more reliable. *Intermodality* describes a route, in which you combine different kinds of transportation. Because electric vehicles are limited in range, a combination with rail traffic would be ideal. Let us hear about your suggestion, how this could be achieved.

<div style="text-align:center">
<img style="width:70%" src="ideas_page_intermodality.png"/>
</div>

##### Further Information

*Prerequisites*: Depends on your idea

*Tools and Frameworks*: It should fit our setting of Javascript/ReactJS on the frontend and maybe NodeJS or Java/Scala in the backend.

*Estimation of difficulty*: Depends, average to difficult.

*Potential mentor*: Max, Fabian, René
