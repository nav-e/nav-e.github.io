---
layout: page
title: Ideas Page
---

Here is a collection of ideas, that we possibly want to work on in the future. We are also applying for this year's Google Summer of Code, so we also describe the projects in that context. The ideas are not ordered in any particular way.

## Mocking the CAN Bus

The CAN bus is a protocol, that microcontrollers in a vehicle use to communicate. By connecting to the bus, we get access to a wide range of information about the vehicle. The most interesting one is the current energy consumption, which we could use to learn and better predict the vehicle's range.

Because working on the actual hardware is a little out of scope, we want to build a mock, that can later be replaced by a physical CAN bus. The mock could be fed with a series of actual CAN bus traces. Augmented with the corresponding GPS coordinates, we can improve our model of energy consumption.

![Component Diagram for CAN Mock](./ideas_page_can_mock.png "Component Diagram for CAN Mock")

The highlighted components in this diagram are part of this idea. The GPS mock is quite simple and already exists.

## Range Computation

Probably the most important information for customers buying electriv vehicles is the range of the vehicle. Because recharging takes longer than refueling a combustion engined vehicle, the fear of running out of energy is emergent. This is called range anxiety and we want to solve that problem!

One important step towards a solution is a precise computation and visualization of the vehicles range. This idea is about making visualization more succinct. What's the use in just having a circle of a particular diameter? We want to show the driver a beautiful polygon 

<div style="text-align: center">
<img style="width: 60%" alt="Range Computation" src="ideas_page_range.png" />
</div>

This range polygon was created by segmenting the search space into 32 slices and taking the most distant vertex in each segment. Those are connected to form the polygon. This quite simple method is okay for starters, but there are various problems with that:

- Some places may be mistakenly marked as reachable, especially in mountainous areas.
- Some places may be mistakenly marked as non-reachable, because the slicing simplifies the polygon too much.
- The reachability decision is binary, but of of course some places can be reached with a lesser probability, for example those at the border of the polygon.
- Actually, two polygons are interesting: We want to see which places we can reach, and we also want to see a polygon describing the places that we can reach and also return home from, which is approximately half as big.

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

