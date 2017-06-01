---
layout: iframe
title: HVS Analysis
permalink: hvs
short: hvs
comments: true
---


<div class="container">
  <div id='app'></div>
</div>

<script src="{{ site.baseurl }}/assets/hvs/d3.min.js"></script>
<script src="{{ site.baseurl }}/assets/hvs/linkvis.js"></script>

<script>
d3.json("http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/p40scatter.json", function(error, scatter_data) {
  d3.json("http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/p40scatter.json", function(error, scatter_data2) {
    d3.json("http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/p50.json", function(error, p50) {
      d3.json("http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/cod.json", function(error, cod_data) {
        d3.json("http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/r2.json", function(error, r2_data) {
          d3.json("http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/table.json", function(error, table_data) {

      let colors = linkvis.encode_color(scatter_data, 'std', 0.85, 0.2);
      let sizes = linkvis.encode_size(scatter_data, 'r2', 0.1, 10);
      let color_year = linkvis.encode_color(scatter_data, 'cod',0.85, 0.2);

      const select = { kind: 'select' }
      const cod_filter = {
                           'data': cod_data,
                           'kind': 'slider',
                           'name': 'slider_cod',
                           'config': {'height': 25,
                                      'width': 200,
                                      'min': 2000,
                                      'max': 2017,
                                      'label': 'COD',
                                      'marks': { 2003: 2003,
                                                 2011: 2011,
                                                 2016: 2016},
                                      'default': [2000,2017]},
                          }
      const r2_filter = {
                           'data': r2_data,
                           'kind': 'slider',
                           'name': 'slider_r2',
                           'config': {'height': 25,
                                      'width': 200,
                                      'min': 0,
                                      'max': 100,
                                      'label': 'R2 Value',
                                      'marks': { 0: 0,
                                                 75: 75,
                                                100: 100},
                                      'default': [0, 100]},
                          }

        // Components

        const hist = {
                        data: p50,
                        kind: 'histogram',
                        config: {'height': 250,
                                  'width': 900,
                                  'xmin': -0.55,
                                  'xmax': 0.20,
                                  'bins': 50,
                                  'xlab': "Percent difference",
                                  'ylab': "Wind farm years",
                                  'filter': 'remove',
                                  'border': 0},
                        color: colors,
                        size:  {},
                        scale: 1,
                      }

        const hist_legend = { data: colors,
                              config: {
                                  'width': 80,
                                  'height': 200,
                                  'border': 1,
                                  'kind': 'LegendContinuous',
                                  'style': 'floatleft',
                                  'label': 'std % diff.',
                                  'margin': {'top': 20,
                                             'left': 10,
                                             'right': 50,
                                             'bottom': 30}},
                              kind: "legend" }

        const hist2 = {
                        data: p50,
                        kind: 'histogram',
                        config: {'height': 400,
                                  'width': 400,
                                  'xmin': -0.70,
                                  'xmax': 0.30,
                                  'bins': 20,
                                  'xlab': "Percent difference",
                                  'ylab': "Wind farm years",
                                  'filter': 'fade',
                                  'border': 0},
                        color: colors,
                        size:  {},
                        scale: 1,
                      }

        const scatter = {
                          data: scatter_data,
                          kind: 'scatter',
                          config: {'height': 400,
                                    'width': 500,
                                    'xval': 'mean',
                                    'yval': 'std',
                                    'filter': 'fade',
                                    'xlab': "Mean percent difference",
                                    'ylab': "Std. percent difference",
                                    'margin': {'top': 10,
                                               'left': 70,
                                               'right': 10,
                                               'bottom': 50},
                                    'border': 0},
                          color: color_year,
                          size: sizes,
                          scale: 1,
                        }

        const scatter_legend = { data: color_year,
                              config: {
                                  'width': 80,
                                  'height': 200,
                                  'border': 1,
                                  'kind': 'LegendColorDiscrete',
                                  'label': 'std % diff.',
                                  'style': 'floatleft',
                                  'margin': {'top': 20,
                                             'left': 10,
                                             'right': 50,
                                             'bottom': 30}},
                              kind: "legend" }

        const scatter_size_legend = { data: sizes,
                              config: {
                                  'width': 75,
                                  'height': 130,
                                  'border': 1,
                                  'kind': 'LegendSize',
                                  'style': 'floatleft',
                                  'label': 'r2 value',
                                  'margin': {'top': 30,
                                             'left': 10,
                                             'right': 50,
                                             'bottom': 30}},
                              kind: "legend" }

        const scatter2 = {
                          data: scatter_data2,
                          kind: 'scatter',
                          config: {'height': 400,
                                    'width': 400,
                                    'xval': 'mean',
                                    'yval': 'cod',
                                    'filter': 'fade',
                                    'xlab': "Mean percent difference",
                                    'ylab': "Project COD",
                                    'margin': {'top': 10,
                                               'left': 70,
                                               'right': 10,
                                               'bottom': 50},
                                    'border': 0},
                          color: colors,
                          size: sizes,
                          scale: 3,
                        }

        const table = {
                        kind: 'table',
                        config: {'height': 400,
                                 'width': 300,
                                 'filter': 'remove',
                                 'margin': {'top': 10,
                                            'left': 10,
                                            'right': 10,
                                            'bottom': 50},
                                 'columns': ['name', 'cod', 'r2', 'middle', 'mean', 'std'],
                                },
                        data: table_data,
                        colors: colors,
                      }

      // let data = [ select, cod_filter, r2_filter,
      //              hist, scatter, table,
      //            ];

    //  let data = [ select, cod_filter, r2_filter, hist, hist2]
      //
      // let data = [ select, cod_filter, r2_filter,  hist, hist_legend,
      //              scatter, scatter_legend, scatter_size_legend ]

      let data = [ select, cod_filter, r2_filter, hist, hist_legend, scatter, scatter_legend, scatter_size_legend, table ]
      // data = [scatter, scatter_legend, scatter_size_legend, table ]

      let app = new linkvis.TDSVis('uuid', 'graph');
      app.draw(data);

            });
          });
        });
      });
    });
  });
</script>


<!-- <div>
<iframe frameborder="no"  style="display:block;" border="0" marginwidth="0" marginheight="0" width="1200" height="800" src="http://mlunacek.com/github/466635c723abf3b5f68807872c915edc/466635c723abf3b5f68807872c915edc/">
&nbsp;
</iframe>
</div> -->
