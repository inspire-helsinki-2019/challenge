---
layout: "challengedetail"
title: "By the Beautiful Blue Danube - Inspire Helsinki 2019 Data Challenge"
page: "schonenBlauenDonau"
jumbotronImage: "aerial-shot-building-business-2226458.jpg"
---

## Background & context
- The challenge is about exploring the efficiency of intermodal transport in Europe.
- The solution can have an impact on the environment, by providing people with more visibility on routes that may be more efficient in terms of fuel consumption. Consequently CO2 emission can be decreased.
- DRDSI has been created to implement INSPIRE on data from Danube countries.
- Water and rail transport are more efficient than road transport in terms of CO2 emissions ([Worldshipping](http://www.worldshipping.org/industry-issues/environment/air-emissions/carbon-emissions)).
- Road transport still accounts for more than 75% of freight transport in Europe ([EC statistics](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Freight_transport_statistics_-_modal_split)).

The following challenges are envisioned:
- first, uniformization of information spread in public databases about European waterways and railways has to be explored,
- second, a routing software would be augmented taking into account specifics of intermodal freight transport and multiple factors (such as time, cost and CO2 emissions), to allow for the visibility of data about those new routes/or other existing routes for which information is not easily accessible.

## Key issues to questions to answer/investigate
- How can existing routes be assessed and new routes discovered that allow relying more on waterways and railways in Europe?
- Cost function design: what are the different parameters the routing software can optimize for (examples: time, cost, fuel/CO2, risk, ETA confidence, ...)
  * Can we reroute some part of traffic to improve road fluidity? How would this increase transport efficiency?
- How can stakeholders be incentivized to rely more on those two modes of transport compared to road?
- Can the data structure be used in such a way that intermodal routing can be intuitively implemented? What data format would be better suited?
- (Secondary) Provide a tool to allow for automatic identification of high-traffic areas (cities, ports, roads,..) in which more infrastructures would be needed.

## Required knowledge and skills
- Data management (database engineering skills are a plus, but not required).
- Graph theory basics (pathfinding algorithm) and optimization algorithms.
- Basic software engineering skills (demo, access to data and improving existing routing algorithms).
- General idea about different stakeholders involved in intermodal freight.

## Offered datasets
- [access: public] [INSPIRE datasets](http://inspire-geoportal.ec.europa.eu/).
- TO BE CONFIRMED [access: public] Selected subset from [Danube Reference Data and Service Infrastructure](http://drdsi.jrc.ec.europa.eu/).
- TO BE CONFIRMED [access: public] Selected subset from [RWS](https://www.rijkswaterstaat.nl/zakelijk/open-data).
- [access: private APIs, only for the purpose of the challenge] Real-time data collected by our IoT intermodal container.

## Other relevant datasets
- [access: public, ODbL license] OpenStreetMaps.
- [access: public, ODbL license] [Global Roads Inventory Project](https://www.globio.info/download-grip-dataset).
- [access: public] [Bluebook database](https://www.unece.org/trans/main/sc3/bluebook_database.html).

## Offered or suggested tools
Open source routing software: GraphHopper, Navit, OpenSourceRoutingMachine, PyrouteLib, … (a more exhaustive list can be provided).

## Desired outcome and presentation
- Demo routing software -- preferred deliverable by web services.
- Corridors discovery, with focus on waterways.

## Offered benefits for the teams
* Change to present the work results in the Inspire Helsinki 2019 event (for the finalist teams).
* Free trip to the 2020 INSPIRE Conference for one person of the winning team.
* Set of professional cloud-based [spatial data processing and visualisation tools](./tools.html) during the Challenge.

## Contact
Roman Heimgartner(AELER), Thorsten Reitz (wetransform)
