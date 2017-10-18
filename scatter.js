/**
 * Created by 0ii on 17/10/2017.
 */

function load_scatter_graph(filePath) {


    AmCharts.loadFile(filePath, {}, function (response) {

        /**
         * Parse CSV
         */
        var data = AmCharts.parseCSV(response, {
            "useColumnNames": true
        });

        var chart = AmCharts.makeChart("scatter", {
            "type": "xy",
            "theme": "light",
            "autoMarginOffset": 20,
            "dataProvider": data,
            "valueAxes": [{
                "position": "bottom",
                "axisAlpha": 0,
                "dashLength": 1,
                "title": "Page Rank"
            }, {
                "axisAlpha": 0,
                "dashLength": 1,
                "position": "left",
                "title": "Number of Triangles"
            }],

            "allLabels": [{
                "text": "Triangles Count vs Page Rank",
                "align": "center",
                "bold": true,
                "size": 20,
                "y": 10
            }],

            "marginTop": 50,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "x:[[x]] y:[[y]]",
                "bullet": "triangleUp",
                "lineAlpha": 0,
                "xField": "ax",
                "yField": "ay",
                "lineColor": "#FF6600",
                "fillAlphas": 0
            }],
            "marginLeft": 64,
            "marginBottom": 60,
            "chartScrollbar": {},
            "chartCursor": {},
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    });
}

load_scatter_graph("data/2010/scatter2009/data.csv");


var graphScatterSelector = document.getElementById("scatterSelector"); // after the DOM loads or use 'ready" function
    graphScatterSelector.addEventListener("change", function() {
        if(graphScatterSelector.value === "2010")
        {
            console.log("hereee");
            load_scatter_graph("data/2010/scatter2009/data.csv");
        }else if (graphScatterSelector.value === "2011"){
             load_scatter_graph("data/2011/scatter2011/data_filtered");
        }
        else if (graphScatterSelector.value === "2012"){
              load_scatter_graph("data/2012/scatter2012/new");
        }
    });

