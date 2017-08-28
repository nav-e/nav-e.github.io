---
title: GSoC 2017 - Predicting Energy Consumption - Indraneil Paul
date: '2017-08-23T00:00:00.284Z'
layout: post
path: /news/2017-08-23-gsoc2017-predicting-energy-consumption-wp/
tags:
  - google
  - gsoc
---

### Google Summer of Code 2017
### Implementation of Predicting Energy Consumption, by Indraneil Paul

**Category:** Experimental  
**Mentors:** Florian Lenschow

# Overview

The purpose of this project was to test out the viability and effectiveness of various machine learning algorithms, in predicting the fuel consumption of an electric vehicle given the terrain and telemetry data of the vehicle motion. This can, in turn, have a wide variety of applications such as suggesting the most fuel-efficient paths to a destination and alleviating user range-anxiety of electric vehicles thus expediting their general adoption. 

Below is a summary timeline of the implementation of the various approaches and how they compare to one another:

## Week 1-2 :
* Organize scan tool data sources
* Set a baseline using simple vanilla linear regression
* Tried out a best-subsets variant of linear regression by eliminating predictors by Variance Inflation Factoors

## Week 3 :
* Tried out L1 and L2 regularized variants of linear regression
* Tested different penalty coefficients for the aforementioned ridge and lasso regression

## Week 4-5 :


# Proposal link

[Prediction of Energy Consumption of Electric Vehicles](https://github.com/Greennav/greennav.github.io/files/1253905/Indraneil_Paul_Proposal_GSoC2017.pdf)

# Final Product

  * #### [Repository](https://github.com/iNeil77/machine-learning)

  * #### [Commits](https://github.com/iNeil77/machine-learning/commits/master)

  * #### [Kanban Board](https://github.com/orgs/Greennav/projects/6)

# What's left to do
