/**
 * Created by 0ii on 17/10/2017.
 */
/**
 * Created by 0ii on 16/10/2017.
 */

function load_trinagles_graph(inputFilePath) {

<!-- Chart code -->
   AmCharts.loadFile( inputFilePath, {}, function( response ) {

            /**
             * Parse CSV
             */
            var data = AmCharts.parseCSV( response, {
                "useColumnNames": true
            } );

             for( i=0; i< data.length;i++) {
                data[i]["color"] = "#FF6600"
            }

            console.log( 'Woohoo! Finished loading' );

            var chart = AmCharts.makeChart( "trianglesChart", {
              "type": "serial",
              "theme": "light",
              "dataProvider": data,
              "valueAxes": [ {
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0
              } ],
              "gridAboveGraphs": true,
              "startDuration": 1,
              "graphs": [ {
                "balloonText": "Triangles Count: <b>[[value]]</b><br> Frequency: <b>[[category]]</b>",
                "fillAlphas": 10.8,
                "lineAlpha": 0.2,
                "type": "column",
                  "fillColorsField": "color",
                "valueField": "NumTriangles"
              } ],
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
                    "text": "Triangle Counting",
                    "align": "center",
                    "bold": true,
                    "size": 20,
                    "y": 10
                },{"text": "Frequency",
                    "x": "!20",
                    "y": "!17",
                    "width": "50%",
                    "size": 15,
                    "bold": true,
                    "align": "right"
                }, {
                  "text": "Number of Triangles Passing Through Each Vertex",
                    "rotation": 270,
                    "x": "5",
                    "y": "30",
                    "width": "50%",
                    "size": 15,
                    "bold": true,
                    "align": "right"
                }],
                "marginTop": 50
            } );
       });

}

load_trinagles_graph("data/2010/triangles2009/data.csv");


var graphsTrianglesCount = document.getElementById("tringlesCountSelector"); // after the DOM loads or use 'ready" function
    graphsTrianglesCount.addEventListener("change", function() {
        if(graphsTrianglesCount.value === "2010")
        {
            console.log("hereee");
            load_trinagles_graph("data/2010/triangles2009/data.csv");
        }else if (graphsTrianglesCount.value === "2011"){
              load_trinagles_graph("data/2011/triangles2011/data.csv");
        }
        else if (graphsTrianglesCount.value === "2012"){
              load_trinagles_graph("data/2012/triangles2012/data.csv");
        } else if (graphsTrianglesCount.value === "2017"){
              load_trinagles_graph("data/2017/triangles2017/triangles2017");
        }
    });
