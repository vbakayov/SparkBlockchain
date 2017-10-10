/**
 * Created by 0ii on 09/10/2017.
 */

/*#chartdiv {
  width: 100%;
  height: 500px;
}
</style>*/

var chart = AmCharts.makeChart( "chartdiv3", {
  "type": "serial",
  "theme": "light",
  "depth3D": 20,
  "angle": 30,
  "legend": {
    "horizontalGap": 10,
    "useGraphSettings": true,
    "markerSize": 10
  },
  "dataProvider": [ {
    "year": 2010,
    "1st": 320,
    "2nd": 305,
    "3rd": 244,
    "4th": 225,
    "5th": 103,
    "1stOut": 342,
      "2stOut": 337,
      "3stOut": 320,
      "4stOut": 302,
      "5stOut": 180
  }

  // , {
  //   "year": 2011,
  //   "1st": 5565,
  //   "2nd": 5136,
  //   "3rd": 5012,
  //   "4th": 4966,
  //   "5th": 4911,
  //   "1stOut": 5728,
  //     "2stOut": 5565,
  //     "3stOut": 5136,
  //     "4stOut": 5012,
  //     "5stOut": 4966
  // }, {
  //   "year": 2012,
  // "1st": 59921,
  //   "2nd": 31974,
  //   "3rd": 14461,
  //   "4th": 10389,
  //   "5th": 9236,
  //   "1stOut": 905499,
  //     "2stOut": 151200,
  //     "3stOut": 121255,
  //     "4stOut": 120636,
  //     "5stOut": 116268
  // }

  ],
  "valueAxes": [ {
    "stackType": "regular",
    "axisAlpha": 0,
    "gridAlpha": 0
  } ],
  "graphs": [ {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "1st Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "1st"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "2nd Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "2nd"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "3rd Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "3rd"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "4th Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "4th"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "5th Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "5th"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "1st Output Addr.",
      "newStack": true,
    "type": "column",
    "color": "#000000",
    "valueField": "1stOut"
  } ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "2nd Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "2stOut"
  }  ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "3rd Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "3stOut"
  }  ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "4th Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "4stOut"
  }  ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "5th Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "5stOut"
  }









  ],
  "categoryField": "year",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "gridAlpha": 0,
    "position": "left"
  },
  "export": {
    "enabled": true
  }

} );


var graph2 = document.getElementById("graphSelector2"); // after the DOM loads or use 'ready" function
var graph_heading = document.getElementById("title_Heading");
graph2.addEventListener("change", function() {
     var NewChartData = [];
    if(graph2.value === "2010")
    {
        NewChartData.push(
            {
            "year": 2010,
            "1st": 320,
            "2nd": 305,
            "3rd": 244,
            "4th": 225,
            "5th": 103,
            "1stOut": 342,
              "2stOut": 337,
              "3stOut": 320,
              "4stOut": 302,
              "5stOut": 180
          }
            );
    }else if (graph2.value === "2011"){

        NewChartData.push(
            {
                "year": 2011,
                "1st": 5565,
                "2nd": 5136,
                "3rd": 5012,
                "4th": 4966,
                "5th": 4911,
                "1stOut": 5728,
                "2stOut": 5565,
                "3stOut": 5136,
                "4stOut": 5012,
                "5stOut": 4966
            }
            );
        }
    else if (graph2.value === "2012"){

        NewChartData.push(
            {
               "year": 2012,
              "1st": 59921,
                "2nd": 31974,
                "3rd": 14461,
                "4th": 10389,
                "5th": 9236,
                "1stOut": 905499,
                  "2stOut": 151200,
                  "3stOut": 121255,
                  "4stOut": 120636,
                  "5stOut": 116268
            }
            );
        }
          else if (graph2.value === "2013"){

        NewChartData.push(
            {
               "year": 2013,
              "1st": 3507811,
                "2nd": 1636518,
                "3rd": 1260568,
                "4th": 1048573,
                "5th": 905499,
                "1stOut": 3682247,
                  "2stOut": 1789874,
                  "3stOut": 1418446,
                  "4stOut": 982363,
                  "5stOut": 779248
            }
            );
        }
           else if (graph2.value === "2014"){

        NewChartData.push(
            {
               "year": 2014,
              "1st": 6909358,
                "2nd": 5146768,
                "3rd": 4834148,
                "4th": 2949563,
                "5th": 2355055,
                "1stOut": 7259572,
                  "2stOut": 5147944,
                  "3stOut": 3239598,
                  "4stOut": 2676802,
                  "5stOut": 2301284
            }
            );
        }

             else if (graph2.value === "2015"){

        NewChartData.push(
            {
               "year": 2015,
              "1st": 14538252,
                "2nd": 10336067,
                "3rd": 7080996,
                "4th": 6779727,

                "1stOut": 7473046,
                  "2stOut": 6187208,
                  "3stOut": 5405778,
                  "4stOut": 4758103,
            }
            );
        }




                //Setting the new data to the graph
        chart.dataProvider = NewChartData;
        chart.validateData();
    });