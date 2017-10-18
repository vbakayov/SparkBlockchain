/**
 * Created by 0ii on 16/10/2017.
 */

<!-- Chart code -->
 function load_graph(filename){

            AmCharts.loadFile( filename, {}, function( response ) {

            /**
             * Parse CSV
             */
            var data = AmCharts.parseCSV( response, {
                "useColumnNames": true
            } );

            console.log( 'Woohoo! Finished loading' );

            var b = "\ ";
            var position = 34;
            var position2 = 66;
            var position3 = 98;
            var position4 = 129;
            for( i=0; i< 100;i++) {
                var a= data[i]["bitcointaddress"];
                data[i]["bitcointaddress"] = [a.slice(0, position), b, a.slice(position,position2),b, a.slice(position2,position3),b
                    ,a.slice(position3,position4),b,a.slice(position4)].join('');
                data[i]["valueCount"]= Math.round(data[i]["valueCount"]*100)/100;
            }

            var chart = AmCharts.makeChart( "pageRankChart", {
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
                "balloonText": "[[category]]: <b><br />[[value]]</b>",
                "fillAlphas": 10.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "valueCount"
              } ],
              "chartCursor": {
                "categoryBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": true
              },
              "categoryField": "bitcointaddress",
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
                "text": "Page Rank",
                "align": "center",
                "bold": true,
                "size": 20,
                "y": 10
                }, {"text": "Address",
                    "x": "!20",
                    "y": "!15",
                    "width": "50%",
                    "size": 15,
                    "bold": true,
                    "align": "right"
                }, {
                  "text": "Page Rank",
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
        } );
}

load_graph("data/2010/pageRank2009/data.csv");

   var pageRankSelector = document.getElementById("pageRankSelector"); // after the DOM loads or use 'ready" function
    pageRankSelector.addEventListener("change", function() {
        if(pageRankSelector.value === "2010")
        {
            console.log("hereee");
            load_graph("data/2010/pageRank2009/data.csv");
        }else if (pageRankSelector.value === "2011"){
              load_graph("data/2011/pageRank2011/data.csv");
        }
        else if (pageRankSelector.value === "2012"){
              load_graph("data/2012/pageRank2012/data.csv");
        }
         else if (pageRankSelector.value === "2013"){
              load_graph("data/2013/pageRank2013/data.csv");
        }
          else if (pageRankSelector.value === "2014"){
              load_graph("data/2014/pageRank2014/data.csv");
        }
    });
