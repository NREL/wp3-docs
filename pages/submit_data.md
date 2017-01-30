---
layout: page
title: How to Submit Data
permalink: data
group: navigation
comments: true
---

The process for submitting data to the WP3 Benchmarking project differs depending on the type of data.

### Preconstruction Data

**Specifications**

Preconstruction data, which 

**How to Submit**

Preconstruction data should be submitted through the PNNL DAP:

  1. Register for an account on the [PNNL DAP Platform](https://a2e.energy.gov/auth/register)
  1. Contact Jason Fields (jason.fields@nrel.gov) to request access to the WP3 PNNL project
  1. Follow the instructions on the [WP3 DAP Project Page](https://a2e.energy.gov/projects/wp3) to upload data via SFTP\*

*[Filezilla](https://filezilla-project.org/) is the recommended SFTP client for Windows users.

### Operational (SCADA) Data

**Specifications**

As input to the post construction analysis, we expect:

  * Met towers/remote sensing (only if available)
    * Wind speed (m/s)
    * Direction
    * Temperature (optional)
    * Pressure (optional)
    * Humidity (optional)
    * Vertical velocity (optional)
  * Plant level Data
    * Point of revenue meter
      * Power Output (kW)  
    * Curtailment logs 
    * Asset Table (Turbine meta-data), including:
      * Make
      * Model
      * Rated Power
      * Latitude
      * Longitude
  * 10-min turbine level SCADA
    * Nacelle Wind speed (provide documentation on the transfer function applied to the anemometer signal)
    * Power Output
    * Yaw direction (optional)
    * Availability tags (status codes with documentation), including
      * Online
      * Offline
      * Offline due to environment (optional)
      * Offline due to curtailment (optional)
  
**How to Submit**

  1. Register for an account on the [PNNL DAP Platform](https://a2e.energy.gov/auth/register)
  1. Contact Jason Fields (jason.fields@nrel.gov) to request access to the WP3 PNNL project
  1. Follow the instructions on the [WP3 DAP Project Page](https://a2e.energy.gov/projects/wp3) to upload data via SFTP\*

### Energy Yield Assessments

**Specifications**

**How to Submit**

  1. Register for an account on the [PNNL DAP Platform](https://a2e.energy.gov/auth/register)
  1. Contact Jason Fields (jason.fields@nrel.gov) to request access to the WP3 PNNL project
  1. Download preconstruction data from the [WP3 DAP Project](https://a2e.energy.gov/projects/wp3) to download data via SFTP\*
  1. Submit consultant response form via [Preconstruction Template](/wp3-docs/precon/) or API
    * Provide feedback via Disqus comments on the [Preconstruction Template](/wp3-docs/precon/) page
  1. After receipt of submission, download operational (SCADA) data from [WP3 DAP Project](https://a2e.energy.gov/projects/wp3) using SFTP\*
