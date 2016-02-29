The Green Navigation project is part of a research project at the University of Lübeck and is therefore closely related to student projects at the university. We decided to publish this project in order to actively develop and discuss different ideas especially on the frontend of GreenNav.

If you want to work on these topics (for example within a university project or thesis), you can contact [René Schönfelder](http://www.isp.uni-luebeck.de/staff/schoenfr).

### Visualization of Routing Algorithms

In order to analyze routing algorithms, we want to visualize how algorithms search through a road network. There have been some first approaches (see below). The objective of this project is to offer such kind of a visualization through the web service to the frontend. Furthermore, the visualization of the algorithm's search queue should be configurable, not only in choice of color, but also in what is shown at which image. A successful implementation offers students to learn about shortest path algorithms and it provides algorithm developers with a way to analyze the behavior of their algorithms.

![Dijkstra's Algorithm](http://www.isp.uni-luebeck.de/~schoenfr/greennav/dijkstra.gif)
![A* Algorithm](http://www.isp.uni-luebeck.de/~schoenfr/greennav/astar.gif)

For this purpose, the following tasks should be accomplished:

* Migration of the experimental stand alone Java application for routing algorithm visualization to a JavaScript web application, including the drawing of the search space over time.
* Development of data transmission concept to avoid unnecessary transfer volume.
* Offering options to the user on how the results should be visualized.
* Optional: Providing a tool for automatically creating gif files.
* Optional: Use parallelization such that observing the algorithm does not slow down the routing too much.
* Optional: Develop a domain specific language (DSL) for customizing visualizations.

(We are currently thinking about making this two different projects, one for visualization and one for observing the algorithm behavior and developing a DSL.)

Your skill set:
* Good knowledge in JavaScript and preferably also in Java
* Interest in algorithm visualization
* Beneficial: Knowledge about behavioral design patterns and aspect oriented programming

### Algorithm Comparison

Similar to the visualization, we also want to compare various algorithms in efficiency and quality.
This should be done within the same system to make the results comparable. Of course, different use cases require different kind of algorithmic solutions, so different sets of experiments should be provided or created. Because the aim is to make algorithms comparable, we need to provide a clear and flexible API, so that various algorithms can be implemented. In the frontend we then want to automatically generate tables or graphs with the results on those different experiments.

![Example for Algorithm Comparison](http://www.isp.uni-luebeck.de/~schoenfr/greennav/algorithmcomparison.png)

For this purpose, the following tasks should be accomplished:
* Provide different routing experiments or even provide means to generate new ones.
* Automatically create tables and graphs for comparing the efficiency and quality of algorithms. 
* Develop a flexible API for algorithm and data structure implementation.
* Optional: Provide a way to inject new algorithms for example using a plugin system such as OSGi.

Your skill set:
* Good knowledge in Java and preferably also in JavaScript
* Interest in scientific comparisons of data structures and algorithms
* Beneficial: Knowledge about behavioral and structural design patterns

### Flexible API for Routing Algorithms

Providing an easy to use API is important for the developers contributing new routing algorithms. These algorithms could then be visualized or evaluated as described above. The development of such an API must be done, so that both new algorithms and new data structures may be developed and combined. The API should be sufficiently generic to apply the algorithms to a large variety of different routing problems. Persistence also plays a big role in designing an API for routing algorithms, because many sophisticated algorithms do precomputations on the network.

For this purpose, the following tasks should be accomplished:
* Provide API for algorithms and data structures in the context of routing problems
* Use generics in order to cover a large variety on different routing problems
* Provide a layer of persistence for precomputations

Your skill set:
* Good knowledge of Java
* Interest in the design of algorithms and data structures
* Beneficial: Experience in API design
* Beneficial: Experience in a plugin system for Java such as OSGi

### Migration to Mobile Devices

Making GreenNav available to mobile platforms will give the opportunity to use GreenNav for navigation. We have done some first steps to build a navigation system, but it needs some rework to make it more platform independent. It would be nice to use the existing frontend as a basis, so that we do not have too many different code bases. Our aim is to make GreenNav a navigation system usable for electric vehicles.

![Android App for GreenNav](http://www.isp.uni-luebeck.de/~schoenfr/greennav/androidexample.png)

For this purpose, the following tasks should be accomplished:
* Extend the existing web app for use on mobile devices
* Integrate the existing navigation app into the frontend
* Improve the exception handling for a better usability

Your skill set:
* Good knowledge in JavaScript
* Good knowledge in App development (preferably based on web app migration)
* Interest in refactoring existing software to improve quality

### Construction of a database

For now we load small areas directly in the server RAM. That is ineffective and computationally expensive so your goal in context of GSoC 2016 will be to design a database using NoSQL in combination with GO.
To succeed this project we supposed that you:
* Implement a NoSQL database using go
* Feed the database with OSM way nodes, streets, buildings, ...
* Provide an API to access the data

Your skill set:
* Good knowledge in database schemas and optimization
* Experience with GO
* Interest in navigation problems and OSM API
