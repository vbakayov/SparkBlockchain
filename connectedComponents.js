/**
 * Created by 0ii on 16/10/2017.
 */

<!-- Chart code -->

<!-- Chart code -->
 function load_graph_connected_componenets(filename) {
     AmCharts.loadFile(filename, {}, function (response) {

         /**
          * Parse CSV
          */
         var data = AmCharts.parseCSV(response, {
             "useColumnNames": true
         });
          for( i=0; i< data.length;i++) {
                data[i]["color"] = "#04D215"
            }

         console.log('Woohoo! Finished loading');

         var chart = AmCharts.makeChart("connectedComponentsChart", {
             "type": "serial",
             "theme": "light",
             "dataProvider": data,
             "valueAxes": [{
               "logarithmic": true,
                 "gridColor": "#FFFFFF",
                 "gridAlpha": 0.2,
                 "dashLength": 0
             }],
             "gridAboveGraphs": true,
             "startDuration": 1,
             "graphs": [{
                 "balloonText": " Connected Components: <b>[[value]]</b> <br>Frequency: <b>[[category]]</b>",
                 "fillAlphas": 10.8,
                 "fillColorsField": "color",
                 "lineAlpha": 0.2,
                 "type": "column",
                 "valueField": "CCCount"
             }],
             "chartCursor": {
                 "categoryBalloonEnabled": false,
                 "cursorAlpha": 0,
                 "zoomable": true
             },
             "categoryField": "Frequency",
             "categoryAxis": {
                 "labelsEnabled": true,
                 "gridPosition": "start",
                 "gridAlpha": 0,
                 "tickPosition": "start",
                 "tickLength": 20
             },
             "export": {
                 "enabled": true
             },
             "allLabels": [{
                 "text": "Connected Components",
                 "align": "center",
                 "bold": true,
                 "size": 20,
                 "y": 10
             }, {
                 "text": "Frequency",
                 "x": "!20",
                 "y": "!17",
                 "width": "50%",
                 "size": 15,
                 "bold": true,
                 "align": "right"
             }, {
                 "text": "Count",
                 "rotation": 270,
                 "x": "5",
                 "y": "230",
                 "width": "50%",
                 "size": 15,
                 "bold": true,
                 "align": "right"
             }],
             "marginTop": 50
         });
     });

 }

 load_graph_connected_componenets("data/2010/connectedComponents2009/data.csv");


var graphsCC = document.getElementById("connectedComponentsSelector"); // after the DOM loads or use 'ready" function
    graphsCC.addEventListener("change", function() {
        if(graphsCC.value === "2010")
        {
            console.log("hereee");
            load_graph_connected_componenets("data/2010/connectedComponents2009/data.csv");
        }else if (graphsCC.value === "2011"){
              load_graph_connected_componenets("data/2011/connectedComponents2011/data.csv");
        }
        else if (graphsCC.value === "2012"){
              load_graph_connected_componenets("data/2012/connectedComponents2012/data.csv");
        }
           else if (graphsCC.value === "2017"){
              load_graph_connected_componenets("data/2017/connectedComponents2017/data.csv");
        }
    });
