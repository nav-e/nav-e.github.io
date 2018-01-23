# About nav-e

Nav-e is an open source organization that emerged from an university project at
the University of Lübeck, but is now independent. Our organization’s aim is to
find the most energy efficient route for electric vehicles while providing a
framework for new routing approaches.

Even though there are existing routing services out there, we aim to support
sustainable means of transportation. None of the other routing services
considers aspects such as a prediction of the energy consumption of different
electric vehicles, their battery capacity, and uncertainties arising from
driving behavior or the environment, yet. Especially in the open source
environment, nothing similar is to be found.

Nav-e utilizes freely available OpenStreetMap geospatial data (osm.org) and NASA
altitude maps. The front end is able to prototype different routing algorithms
and to compare them.

We invite everybody to contribute towards the development of a more sustainable
routing system!

## Read more

- [Collaboration](/collaboration)
- [Getting started](/getting-started)
- [Roadmap](/roadmap)

## Participation in the Google Summer of Code 2016 and 2017

Nav-e's participation in the Google Summer of Code 2016 and 2017 was a success
for the project’s development. Thanks to the contributions, the front end is
working properly. Still, we are improving our back end for which everyone is
invited to participate! Everything can be found on [GitHub](github.com/nav-e).

Moreover, the project is published under the Apache License 2.0. This basically
means that everyone is free to use and redistribute the software, but any
original copyright, patent, trademark, and attribution notices must be
preserved.

## Technologies used

Nav-e makes use of
- React for the front end
- Golang for the back end with
- Docker as a database container (WIP)

# Challenges

One of the challenges is to develop a scheme for the database for more efficient
queries. Also the development of a consumption model for electric cars and a
faster implementation of routing algorithms needs to be worked on. This is a
fantastic opportunity to derive the consumption using machine learning!
