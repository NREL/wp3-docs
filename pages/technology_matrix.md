---
layout: page
title: Data System
permalink: software
group: navigation
comments: true
---

The WP3 Benchmarking data model is detailed in the following schematic. Observational (postconstruction) data are received through secure Globus file transfer, normalized and archived in a canonical form for analysis. Prediction (preconstruction) estimates are received from partners through our preconstruction API or template form. Pre and post-construction metrics are compared programatically using a standardized library and uniform software stack using reproducible research practics.

![Data System Model]({{ site.url }}{{ site.baseurl }}/assets/schematics/data_system_3.jpg)

### Software Repositories

  * Postconstruction: https://github.com/NREL/wp3-postcon
  * Preconstruction: https://github.com/NREL/wp3-precon
  * Project Documentation: https://github.com/NREL/wp3-docs (this site)

### Software Versions

| Software    | Vendor       | Version     | Notes     |
| ----------- | ------------ | ----------- | --------- |
| Python      | Anaconda     | [2.7.10](https://www.continuum.io/downloads) | |
| Spark       | Apache       | [1.6.2](https://spark.apache.org/docs/1.6.2/) | |
| Hadoop      | Apache       | 2.7.3 | |
| PostgreSQL  | PostgreSQL   | [9.3.10](https://www.postgresql.org/docs/current/static/release-9-3-10.html) | |
| Git         | Git          | 1.9.5 | |
