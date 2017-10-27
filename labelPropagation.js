/**
 * Created by 0ii on 17/10/2017.
 */
/**
 * Created by 0ii on 16/10/2017.
 */

 function load_graph_label_propagation(filename) {

     <!-- Chart code -->
     AmCharts.loadFile(filename, {}, function (response) {

         /**
          * Parse CSV
          */
         var data = AmCharts.parseCSV(response, {
             "useColumnNames": true
         });

         for( i=0; i< data.length;i++) {
                data[i]["color"] = "#FF9E01"
            }

         console.log('Woohoo! Finished loading');

         var chart = AmCharts.makeChart("labelPropagationChart", {
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
                 "balloonText": "Label Propagation: <b>[[value]]</b><br>Frequency: <b>[[category]]</b>",
                 "fillAlphas": 10.8,
                 "lineAlpha": 0.2,
                 "type": "column",
                  "fillColorsField": "color",
                 "valueField": "LabelPropagation"
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
                 "text": "Label Propagation",
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
                 "text": "Label Propagation",
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
 load_graph_label_propagation("data/2010/labelPropagation2009/data_grouped");

  var labelSelector = document.getElementById("labelPropagationSelector"); // after the DOM loads or use 'ready" function
    labelSelector.addEventListener("change", function() {
        if(labelSelector.value === "2010")
        {
            console.log("hereee");
           load_graph_label_propagation("data/2010/labelPropagation2009/data_grouped");
        }else if (labelSelector.value === "2011"){
              load_graph_label_propagation("data/2011/label2011/data_grouped");
        }
        else if (labelSelector.value === "2012"){
              load_graph_label_propagation("data/2012/lebelPropagation2012/data_grouped");
        }
         else if (labelSelector.value === "2013"){
              load_graph_label_propagation("data/2013/lebelPropagation2013/new_sorted");
        }
          else if (labelSelector.value === "2014"){
              load_graph_label_propagation("data/2014/lebelPropagation2014/new_l_sorted");
        }
        else if (labelSelector.value === "2017"){
              load_graph_label_propagation("data/2017/labelPropagation2017/data.csv");
        }
    });
