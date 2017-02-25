# About Green Navigation

Green Navigation (also: GreenNav) is an open source organization that emerged from an university project at the University of Lübeck, but is now independent. Our organization’s aim is to find the most energy efficient route for electric vehicles while providing a framework for new routing approaches.

Even though there are existing routing services out there, we aim to support sustainable means of transportation. None of the other routing services considers aspects such as a prediction of the energy consumption of different electric vehicles, their battery capacity, and uncertainties arising from driving behavior or the environment, yet. Especially in the open source environment, nothing similar is to be found.

GreenNav utilizes freely available OpenStreetMap geospatial data (osm.org) and NASA altitude maps. The front end is able to prototype different routing algorithms and to compare them.

We invite everybody to contribute towards the development of a more sustainable routing system!

## Participation in the Google Summer of Code 2016

GreenNav’s participation in the Google Summer of Code 2016 was a success for the project’s development. Thanks to the contributions, the front end is working properly. Still, we are still working on our back end for which everyone is invited to participate! Everything can be found on [GitHub](github.com/greennav).

Moreover, the project is published under the Apache License 2.0. This basically means that everyone is free to use and redistribute the software, but any original copyright, patent, trademark, and attribution notices must be preserved.

## Technologies used

Green Navigation makes use of
- React Native for the front end
- Java for the back end with
- Spring for the REST-API and
- Docker as a database container (WIP)

# Challenges

One of the challenges is to develop a scheme for the database for more efficient queries. Also the development of a consumption model for electric cars and a faster implementation of routing algorithms needs to be worked on. This is a fantastic opportunity to derive the consumption using machine learning!
