/**
 * Created by 0ii on 17/10/2017.
 */
/**
 * Created by 0ii on 16/10/2017.
 */

<!-- Chart code -->
function load_graph_harmonic(filename){
   AmCharts.loadFile( filename, {}, function( response ) {

            /**
             * Parse CSV
             */
            var data = AmCharts.parseCSV( response, {
                "useColumnNames": true
            } );
            //HarmonicCentrality,Frequency
            console.log(data);
              console.log(data.length);
              for( i=0; i< data.length;i++) {
                var a= data[i]["HarmonicCentrality"];
                var b= data[i]["Frequency"];
                data[i]["HarmonicCentrality"] = a.slice(1, a.length);
                data[i]["Frequency"] = b.slice(0, b.length -1);
                data[i]["color"] = "#CD0D74"
            }

            console.log( 'Woohoo! Finished loading' );


            var chart = AmCharts.makeChart( "harmonicCentralityChart", {
              "type": "serial",
              "theme": "light",
              "dataProvider": data,
              "valueAxes": [ {
                  "logarithmic": true,
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0
              } ],
              "gridAboveGraphs": true,
              "startDuration": 1,
              "graphs": [ {
                "balloonText": "Centrality: <b>[[category]]</b>  <br>Frequency: <b>[[value]]</b>",
                  "fillColorsField": "color",
                "fillAlphas": 10.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "Frequency"
              } ],
              "chartCursor": {
                "categoryBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": true
              },
              "categoryField": "HarmonicCentrality",
              "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                  "labelsEnabled": false,
                "tickLength": 20
              },
              "export": {
                "enabled": true
              },
                "allLabels": [{
                "text": "Harmonic Centrality",
                "align": "center",
                "bold": true,
                "size": 20,
                "y": 10
                }, {"text": "HarmonicCentrality",
                    "x": "!20",
                    "y": "!15",
                    "width": "50%",
                    "size": 15,
                    "bold": true,
                    "align": "right"
                }, {
                  "text": "Frequency",
                    "rotation": 270,
                    "x": "5",
                    "y": "230",
                    "width": "50%",
                    "size": 15,
                    "bold": true,
                    "align": "right"
                }],
                "marginTop": 50
            } );
            chart.colorField = "color";
            chart.fillColorsField = "color";
       });
    }


    load_graph_harmonic("data/2010/harmonicCentrality2009/data.csv");

  var graphs = document.getElementById("harmonicCentralitySelector"); // after the DOM loads or use 'ready" function
    graphs.addEventListener("change", function() {
        if(graphs.value === "2010")
        {
            load_graph_harmonic("data/2010/harmonicCentrality2009/data.csv");
        }else if (graphs.value === "2011"){
              load_graph_harmonic("data/2011/HarmonicCentrality2011/data");
        }
        else if (graphs.value === "2012"){
              load_graph_harmonic("data/2012/harmonicCentrality2012/data");
        }
         else if (graphs.value === "2017"){
              load_graph_harmonic("data/2017/harmonicCentrality2017/data.csv");
        }
    });
