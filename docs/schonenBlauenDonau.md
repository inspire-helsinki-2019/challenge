---
layout: "challengedetail"
title: "By the Beautiful Blue Danube - Inspire Helsinki 2019 Data Challenge"
description: "Discover alternative transport routings using the European waterways and railways instead of road networkd for increased efficiency and lower the CO2 emissions."
page: "schonenBlauenDonau"
jumbotronImage: "aerial-shot-building-business-2226458.jpg"
---

## Background & context

In today's supply chain logistics, there is more and more public and political pressure to decrease the carbon footprint of freight transport. In the meantime, the exchange rate between European countries are increasing every year. Together, these two constraints   push for the development of new solutions to efficiently and ecologically plan the way goods are transported.

To do so, the intermodal nature of the shipping container - that is its capacity to be transported by ships, barges, trains & trucks during the same trip - could be even more leveraged to reduce congestion and CO2 emissions.
Water and rail transport are more ecologically efficient than road transport ([Worldshipping](http://www.worldshipping.org/industry-issues/environment/air-emissions/carbon-emissions)). Nonetheless, the latter still accounts for more than 75% of freight transport in Europe ([EC statistics](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Freight_transport_statistics_-_modal_split)).

Consequently, the increased use of European waterways would represent a crucial factor to enable a greener way of carrying goods within Europe. The **Danube** represents one good example of that. Indeed, "around 10 million tons of goods are transported annually on the Austrian stretch of the Danube – without noise or congestion. This is the equivalent of a 100 kilometre-long convoy of trucks transporting goods from Vienna to Linz every day" ([ViaDonau](http://www.viadonau.org/en/economy/danube-logistics/)).

In this challenge, the wide range of available data will be used to explore the efficiency of intermodal freight transport in Europe. This includes optimizing road, waterway and railway utilization based on factors such as Estimated Time of Arrival (ETA) confidence, risk, cost and CO2 emissions.

## Key issues to questions to answer/investigate
- How can existing routes be assessed and new routes discovered that allow relying more on waterways and railways in Europe?
- Cost function design: what are the different parameters the routing software can optimize for (examples: time, cost, fuel/CO2, risk, ETA confidence, ...)
  * Can we reroute some part of traffic to improve road fluidity? How would this increase transport efficiency?
- How can various datasets structures be harmonized to be used for intermodal routing?
  * What data is missing?
- (Secondary) Provide a tool to allow for automatic identification of high-traffic areas (cities, ports, roads,..) in which more infrastructures would be needed.
- (Secondary) How can stakeholders be incentivized to rely more on those two modes of transport compared to road?

## Required knowledge and skills
- Data management (database engineering skills are a plus, but not required).
- Graph theory basics (pathfinding algorithm) and optimization algorithms.
- Basic software engineering skills (demo, access to data and improving existing routing algorithms).
- General idea about different stakeholders involved in intermodal freight.

## Offered datasets
| Dataset name | Data portal | Access | License |
|--------------|-------------|-----|--------|
| INSPIRE      | [INSPIRE geoportal](http://inspire-geoportal.ec.europa.eu/) | public | various open source licenses |
| Selected subsets European freight infrastructure | more details will be provided before the challenge starts |
| AELER | more details will be provided before the challenge starts | private APIs | proprietary data only for the purpose of the challenge |  |

## Other relevant datasets
| Dataset name | Data portal | Access | License | Remarks |
|--------------|-------------|-----|--------|---------|
| Danube infrastructure | [Danube Reference Data and Service Infrastructure](http://drdsi.jrc.ec.europa.eu/) | public | various open source licenses | It has been created to implement INSPIRE on data from Danube countries |
| Netherlands water infrastructure | [RWS](https://www.rijkswaterstaat.nl/zakelijk/open-data) | public | various open source licenses |
| E waterway network main standards & parameters | [Bluebook database](https://www.unece.org/trans/main/sc3/bluebook_database.html) | public |  |
| OpenStreetMaps | [OSM](https://wiki.openstreetmap.org/wiki/Downloading_data) | public | ODbl |
| Global Roads Inventory Project | [GRIP](https://www.globio.info/download-grip-dataset) | public | ODbl |

## Offered or suggested tools
Open source routing software: GraphHopper, Navit, OpenSourceRoutingMachine, PyrouteLib, etc.

## Desired outcome and presentation

Stepping onboard this challenge, you will develop an intuitive web application that helps routing goods anywhere between two points in Europe in the most efficient way, given that some people want it to be shipped fast, others securely or in the most ecological way possible. 

With this exact same tool, you will be able to elaborate on the following question: *How can we make waterways and railways more competitive with respect to traditional roads?* during a live demonstration of your solution.

## Offered benefits for the teams
* All participants
  * Set of professional cloud-based [spatial data processing and visualisation tools](./tools.html) during the Challenge.
* All finalists
  * Chance to present the work results in the Inspire Helsinki 2019 event.
* First Place 
  * Free trip to INSPIRE 2020 in Dubrovnik for one team member.
  * High-Quality electric scooters for up to five team members (500 € value each).
* Second Place
  * Sport headphones for up to five team members (100 € value each).

## Contact
Roman Heimgartner (AELER), Thorsten Reitz (wetransform)
