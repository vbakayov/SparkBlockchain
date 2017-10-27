
/**
 * Created by 0ii on 16/10/2017.
 */
function load_strongly_connected_components(inputfilepath) {


<!-- Chart code -->
   AmCharts.loadFile( inputfilepath, {}, function( response ) {

            /**
             * Parse CSV
             */
            var data = AmCharts.parseCSV( response, {
                "useColumnNames": true
            } );

               for( i=0; i< data.length;i++) {
                data[i]["color"] = "#de0020";
            }

            console.log( 'Woohoo! Finished loading' );

            var chart = AmCharts.makeChart( "stronglyCComponents", {
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
                "balloonText": "Count  <b>[[value]]</b> <br>Frequency: <b> [[category]]</b>",
                "fillAlphas": 10.8,
                "lineAlpha": 0.2,
                "type": "column",
                  "fillColorsField": "color",
                "valueField": "value"
              } ],
              "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": true
              },
              "categoryField": "frequency",
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
                    "text": "Strongly Connected Components",
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
                  "text": "Strongly Connected Components Count",
                    "rotation": 270,
                    "x": "5",
                    "y": "100",
                    "width": "50%",
                    "size": 15,
                    "bold": true,
                    "align": "right"
                }],
                "marginTop": 50
            } );
       });

}


load_strongly_connected_components("data/2010/stronglyccomponents2009/data.csv");


var graphsSCComponents = document.getElementById("stronglyCComponentsSelector"); // after the DOM loads or use 'ready" function
    graphsSCComponents.addEventListener("change", function() {
        if(graphsSCComponents.value === "2010")
        {
            console.log("hereee");
            load_strongly_connected_components("data/2010/stronglyccomponents2009/data.csv");
        }else if (graphsSCComponents.value === "2011"){
              load_strongly_connected_components("data/2011/stronglyccomponents2011/data.csv");
        }
        else if (graphsSCComponents.value === "2012"){
              load_strongly_connected_components("data/2012/stronglyccomponents2012/data.csv");
        }
    });
