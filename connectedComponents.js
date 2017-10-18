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
                 "gridColor": "#FFFFFF",
                 "gridAlpha": 0.2,
                 "dashLength": 0
             }],
             "gridAboveGraphs": true,
             "startDuration": 1,
             "graphs": [{
                 "balloonText": "[[category]]: <b>[[value]]</b>",
                 "fillAlphas": 10.8,
                 "fillColorsField": "color",
                 "lineAlpha": 0.2,
                 "type": "column",
                 "valueField": "valueCount"
             }],
             "chartCursor": {
                 "categoryBalloonEnabled": false,
                 "cursorAlpha": 0,
                 "zoomable": true
             },
             "categoryField": "nodeID",
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
                 "text": "Component Id",
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


var graphs = document.getElementById("connectedComponentsSelector"); // after the DOM loads or use 'ready" function
    graphs.addEventListener("change", function() {
        if(graphs.value === "2010")
        {
            console.log("hereee");
            load_graph_connected_componenets("data/2010/connectedComponents2009/data.csv");
        }else if (graphs.value === "2011"){
              load_graph_connected_componenets("data/2011/connectedComponents2011/data.csv");
        }
        else if (graphs.value === "2012"){
              load_graph_connected_componenets("data/2012/connectedComponents2012/data.csv");
        }
    });
