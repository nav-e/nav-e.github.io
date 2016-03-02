# Projects GSoC 2016

To understand the different areas of this project please take a look at the [roadmap](https://github.com/Greennav/greennav.github.io/blob/master/wiki/Roadmap.md).

## Front end projects

### Refactoring and GUI design

The current webapp consists of different polymer elements. Before working on the integration of new features, it is necessary to rethink the current architecture, redesign the UI and refactor the codebase. Furthermore, documentation, logging and user notifications should be implemented in this GSoC project.

- **Difficulty**: 2/5 
- **Skills**: Polymer, GUI design
- **Mentor**: Fabian Bormann

### Integration of new features

For the webapp, we would like to integrate information regarding weather, traffic, terrain height etc. Since the backend isn't implemented yet, you will create a proof of concept and an interface with the webapp and the back end. This requires communication with your mentor, so those features can be integrated easily upon completion of the GSoC.

- **Difficulty**: 2/5 
- **Skills**: Polymer, GUI design
- **Mentor**: Fabian Bormann

### Visualization tool

This project aims to create a single web application with polymer to compare different routing algorithms. It gets the information from either a backend, the prototyping tool or both. The steps of each algorithm are shown on a map component, together with statistics and other performance characteristics. Results should be analyzed (eg. via R) and exportable to enable developers to measure their algorithms, compare them and create useful graphics for their papers.

- **Difficulty**: 4/5
- **Skills**: Polymer, R, statistics, routing algorithms
- **Mentor**: Max Lorenz

### Prototyping tool

The prototyping tool allows developers to design and test new routing algorithms leveraging the GreenNav framework with all data sources (temperature, terrain height etc) easily. A simple MVP in polymer exists, which can be used as a starting point. Since the tool should be language agnostic to empower a variety of people to test their own ideas and algorithms, the language doesn't really matter. A widely used language is prefered (like Python for example) and communication happens via REST. The data for the algorithm is requested from the database service from the backend and results are visualized using the visualization tool which acts as the primary interface.

- **Difficulty**: 5/5
- **Skills**: Polymer, Python (or any other good prototyping language), routing algorithms, REST
- **Mentor**: Max Lorenz

## Back end projects

## Algorithms

## Mobile projects

## Own ideas
