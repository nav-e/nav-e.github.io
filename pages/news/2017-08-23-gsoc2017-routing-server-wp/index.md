---
title: GSoC 2017 - The Routing Server - Pavel Danilov
date: '2017-08-23T00:00:00.284Z'
layout: post
path: /news/2017-08-23-gsoc2017-routing-server-wp/
tags:
  - google
  - gsoc
---

### Google Summer of Code 2017
### Implementing The Routing Server, by Pavel Danilov

**Category:** Backend  
**Mentors:** Sebastian Bode

## Overview

Before the GSoC is started, we initially planned to introduce REST API, some weight functions for edges between nodes in a road graph w.r.t. weather conditions and add distributed shortest path computations via Spark. Then, closer to the end of May, plans has changed, because we couldn't access cluster with Spark. The new main goal of the summer project was effective routing algorithm, the simplest and most possible to implement one is Contraction Hierarchies was chosen as a primary goal.

My task for the summer was split into 3 main parts, each of them should be covered by tests:
1. Core graph model for routing
2. REST API with simple routing via A-Star and Dijkstra
3. Contraction Hierarchies

To avoid coding from the scratch, I used LGPL open-source library [jgrapht](http://jgrapht.org). This one has very complicated structure for *Graph* class, so I've spent a lot of time to understand its architecture for some modifications meeting the project needs, but the time worth it. Main demand for the graph we use in the project is supporting *persistence*, i.e. communication with database storing data with road graphs. This stage is resulted in completing a *RoadGraph* class, that relies on persistence and weight function for edges w.r.t. coordinates of points between which the edge appears (no considering of weather condition for now).

As regards REST API, I have implemented simple one that support routing from the node with id **from** to the node **to** via **algorithm**, so the typical request looks like that:
*/route?from=4058432473&to=25195716&algorithm=dijkstra*

Most important and challenging task was implementation of Contraction Hierarchies algorithm, which is considered in [original article](http://algo2.iti.kit.edu/schultes/hwy/contract.pdf). First of all, I have implemented C++ version of this algorithm; the reason for this decision was possibility to test the algorithm in [Yandex Contest](https://contest.yandex.ru/?lang=en) testing system. I've spent a lot of time on it, tested on real road graphs and performance was very impressive. Performance on NY graph with 264346 nodes and 733846 edges with 10000 randomly generated queries for shortest path is shown on the image.
![ch_profile_ny](https://user-images.githubusercontent.com/10358661/29935421-8710e3b2-8ea0-11e7-9059-30194ef84fe2.jpg)
As regards Java implementation directly for the GreenNav project, it performs not so impressively in testing stage due to in-memory persistence restrictions that will be took into account in the final chapter **What's left to do**. During implementation this algorithm, there arise a need in special case of *RoadGraph* with support of special inner data according to the algorithm, as a result I've come up with *RoadGraphCH* class.

### Proposal link

[Routing server](https://github.com/Greennav/greennav.github.io/files/1253904/Pavel_Danilov_Proposal_GSoC2017.pdf)

## Final Product

  * #### [Repository](https://github.com/Greennav/routing) (dev fork: [Routing](https://github.com/Carix0n/routing))

  * #### [Commits](https://github.com/Greennav/routing/commits/master)

  * #### [Kanban Board](https://github.com/orgs/Greennav/projects/4)

## What's left to do

Current implementation of persistence in *RoadGraph* impose restrictions on effective *In-Memory* storage. For the small graphs tests performs well, but on the real road graphs it may execute for several hours on laptop until it's done. This is due to the time consuming operation of in-memory persistence filling the data in. Of course, in real-time version we want to use In-Memory via pre-loaded database, but it is necessary to ensure fast testing system verify routing algorithm is correct and  step forward with its improvements. This flaw pushes me to rethink the architecture of *RoadGraph* in such a way to support not only working with *Persistence*, that I will remind may be *In-Memory* or *Database-connected*, but also basic *Graph* storage in-memory **(without intermediary in the form of in-memory persistence)**.
Also, one of interesting tasks to do is come up with idea hot to consider weather conditions in edge cost.
