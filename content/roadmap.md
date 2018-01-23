---
title: Roadmap
---

Nav-e is a prototyping system to compute energy-optimal routes and to predict
the cruising range of electric vehicles. The aim of the project is both to offer
users optimal routes for electric vehicles and to offer researchers the tools
for prototyping and evaluating their algorithms.

In 2015, we made an effort to relaunch the project and the vision behind it as
an open source organization to set up a universal framework. Since then, most of
the original front end codebase was ported to a new polymer-based webapp and the
first draft of a JavaScript prototyping tool has been built.

## Vision

The goal is to enable developers and users alike to use, extend and compose a
flexible navigation system that runs anywhere. Therefore, nav-e will
use/provide as much data as possible:

- OpenStreetMap data
- NASA geo height information
- Temperature (needed for battery life predictions)
- Traffic information
- Car sharing providers
- Public transport
- ...

With that new approach, we hope to create a powerful framework, that runs
anywhere - from servers to phones, from web services to built-in offline
solutions in electric vehicles. Thus, the system must be very light on
resources, easily extendable, scalable and must run distributed as well as
centralized.

## Technology stack

Starting from scratch, we tried to meet all the desired features by choosing the
best tools:

- Polymer provides composability on the front end side
- Go enables excellent performance on low resources, cross-platform distribution
  with ease and brings
    - An own server in the standard library
    - Inter-process communication capabilities
    - Powerful concurrency constructs
    - Easy deployment (a single executable)
    - Bundled dependencies
- PostgreSQL for servers
- SQLite for mobile devices

## Design plan

Currently, only the front end is rewritten. It uses a legacy backend, which we
will replace with a new one. The new backend will consist of three components:

- Database service
    - Connects to either SQLite or Postgres
    - Gathers information from various sources and creates the database
        - OSM, NASA, Temperature, Traffic, Car sharing etc
    - Minimizes the database access to gain performance
    - Performs intelligent queries
    - Makes updates
    - Provides a REST and a RPC interface
- Native service
    - Reads hardware information
        - Battery status from electric vehicles
        - Position from GPS devices
    - Provides a REST and a RPC interface
- **Routing service**
    - Uses the database service
    - Can use a native service
    - Contains the routing algorithms
    - Provides a REST interface for the front end


The front end is made up of many small components sharing (sub) components:

- Reference web app
    - Map component (OSM, Google Maps, Bing, ...)
    - Shows route and range (based on battery)
- Prototyping tool
    - HTML5 JavaScript editor to develop new algorithms
    - GitHub connection to save and share
    - Test with real routing queries
    - Connects to Database service (backend)
    - One can port Results to Go and integrate them into the Routing service
      (backend) easily because they use the same database
- Visualizer
    - Takes any routing algorithms from Routing service or JavaScript prototypes
    - Visualizes every single step
    - Shows statistics
        - Database queries performed
        - Steps used

## Usage examples

### Car

The greatest usage example would be to implement a navigation system for an
electric car using nav-e software on a Raspberry PI.

One would start by building the Database service with the SQLite backend. Then,
the Native service would be adapted to talk to the hardware of the car/RPI to
read battery and GPS position. Then, one algorithm of the Routing service has to
be chosen (or written from scratch or adjusted for the car using real data).

For the frontend, a new UI can be created easily leveraging the existing map
component in combination with a newly built dashboard and menu in polymer. To
extend the project, the user interface could show additional hints and warnings,
use voice output etc

### Android app

For an android app, we would use SQLite again or connect the Routing service to
a webserver or don't use any local backend at all.

The backend and front end can be combined into a single apk, with the front end
using either native elements, a webview or hybrid approaches (like react
native). GPS data can be obtained within the webview/app or from the backend.
