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
                "1thAddrIn":"D4AF3CDD17410A9968\ ECCAAFC88B093110AF5D15",
            "2nd": 305,
                  "2thAddrIn":"bitcoinpubkey_41043BB7\ 2E8F82CD2737751877CA86\ 0F44A713509FB9A1F93B84D1\ B596F8C73236FCE8885528E5\ 6AADAA5A27F9659BB791\ BA40B50F1328E171E9\ D78F345974312AEC",
            "3rd": 244,
                  "3thAddrIn":"bitcoinpubkey_4104B76E0A\ 7FA0C4CAC36D06A2572C9\ E2034868227A9EE948A5C4\ CAA9FAA334CA779240BE24A\ 3D9866FB76246DC33\ 5DAEF53E2DC2436A\ DE7D93BCB339\ 30A61249B93",
            "4th": 225,
                  "4thAddrIn":"bitcoinpubkey_410491501F\ 46C946B908AF2B66D91789\ 598746F5126639853E5F8\ 6297F199CF63F6D4CA\ 0D674028735A363FFA\ E46001C0F1A273E68A4FBDC\ FBF6BF9CC00865BF49ED",
            "5th": 103,
                  "5thAddrIn":"E82AB1C80152BBC758\ F5A4445CB031C7BA3E119C",
            "1stOut": 1591,
                  "1thAddrOut":"12AB8DC588CA9D5787\ DDE7EB29569DA63C3A238C",
              "2stOut": 342,
                "2thAddrOut":"bitcoinpubkey_410491\ 501F46C946B908AF2\ B66D91789598746F51\ 26639853E5F86297F1\ 99CF63F6D4CA0D674028\ 735A363FFAE46001C0\ F1A273E68A4FBDCFB\ F6BF9CC00865BF49ED",
              "3stOut": 337,
                "3thAddrOut":"D4AF3CDD17410A9968\ ECCAAFC88B093110AF5D15",
              "4stOut": 320,
                "4thAddrOut":"F8E3D3ED6777DF9706B\ C5D4502C40A00DD599EDD",
              "5stOut": 302,
                 "5thAddrOut":"bitcoinpubkey_41043BB\ 72E8F82CD273775187\ 7CA860F44A713509FB\ 9A1F93B84D1B596F8C7\ 3236FCE8885528E56\ AADAA5A27F9659B\ B791BA40B50F\ 1328E171E9D78F3\ 45974312AEC"
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
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "1st Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "1st",
      "descriptionField": "1thAddrIn"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "2nd Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "2nd",
      "descriptionField": "2thAddrIn"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "3rd Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "3rd",
      "descriptionField": "3thAddrIn"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "4th Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "4th",
      "descriptionField": "4thAddrIn"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "5th Input Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "5th",
      "descriptionField": "5thAddrIn"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "1st Output Addr.",
      "newStack": true,
    "type": "column",
    "color": "#000000",
    "valueField": "1stOut",
      "descriptionField": "1thAddrOut"
  } ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "2nd Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "2stOut",
      "descriptionField": "2thAddrOut"
  }  ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "3rd Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "3stOut",
      "descriptionField": "3thAddrOut"
  }  ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "4th Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "4stOut",
      "descriptionField": "4thAddrOut"
  }  ,
  {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b><br>Address: <b>[[description]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "5th Output Addr.",
    "type": "column",
    "color": "#000000",
    "valueField": "5stOut",
      "descriptionField": "5thAddrOut"
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
                "1thAddrIn":"D4AF3CDD17410A9968\ ECCAAFC88B093110AF5D15",
            "2nd": 305,
                  "2thAddrIn":"bitcoinpubkey_41043BB7\ 2E8F82CD2737751877CA86\ 0F44A713509FB9A1F93B84D1\ B596F8C73236FCE8885528E5\ 6AADAA5A27F9659BB791\ BA40B50F1328E171E9\ D78F345974312AEC",
            "3rd": 244,
                  "3thAddrIn":"bitcoinpubkey_4104B76E0A\ 7FA0C4CAC36D06A2572C9\ E2034868227A9EE948A5C4\ CAA9FAA334CA779240BE24A\ 3D9866FB76246DC33\ 5DAEF53E2DC2436A\ DE7D93BCB339\ 30A61249B93",
            "4th": 225,
                  "4thAddrIn":"bitcoinpubkey_410491501F\ 46C946B908AF2B66D91789\ 598746F5126639853E5F8\ 6297F199CF63F6D4CA\ 0D674028735A363FFA\ E46001C0F1A273E68A4FBDC\ FBF6BF9CC00865BF49ED",
            "5th": 103,
                  "5thAddrIn":"E82AB1C80152BBC758\ F5A4445CB031C7BA3E119C",
            "1stOut": 1591,
                  "1thAddrOut":"12AB8DC588CA9D5787\ DDE7EB29569DA63C3A238C",
              "2stOut": 342,
                "2thAddrOut":"bitcoinpubkey_410491\ 501F46C946B908AF2\ B66D91789598746F51\ 26639853E5F86297F1\ 99CF63F6D4CA0D674028\ 735A363FFAE46001C0\ F1A273E68A4FBDCFB\ F6BF9CC00865BF49ED",
              "3stOut": 337,
                "3thAddrOut":"D4AF3CDD17410A9968\ ECCAAFC88B093110AF5D15",
              "4stOut": 320,
                "4thAddrOut":"F8E3D3ED6777DF9706B\ C5D4502C40A00DD599EDD",
              "5stOut": 302,
                 "5thAddrOut":"bitcoinpubkey_41043BB\ 72E8F82CD273775187\ 7CA860F44A713509FB\ 9A1F93B84D1B596F8C7\ 3236FCE8885528E56\ AADAA5A27F9659B\ B791BA40B50F\ 1328E171E9D78F3\ 45974312AEC"
          }
            );
    }else if (graph2.value === "2011"){

        NewChartData.push(
            {
                "year": 2011,
                "1st": 5565,
                  "1thAddrIn":"77E84EAC6A7132B1E92\ 67BA926EEA90F7FED9C74",
                "2nd": 5136,
                  "2thAddrIn":"A92BA6F9C91233B6A4E\ C84DC04CDB7AF08246184",
                "3rd": 5012,
                  "3thAddrIn":"E406B6DD999EC16C9AC\ 9AC2DA7207DBC8CE7A0F3F",
                "4th": 4966,
                  "4thAddrIn":"425C4B55368B86EA2FE\ 5C5114E57875645804A45",
                "5th": 4911,
                  "5thAddrIn":"05BF3A3AEA6335A3949\ C0A351FF3AFCBA884E125",
                "1stOut": 5728,
                  "1thAddrOut":"05BF3A3AEA6335A394\ 9C0A351FF3AFCBA884E125",
                "2stOut": 5565,
                  "2thAddrOut":"77E84EAC6A7132B1E9\ 267BA926EEA90F7FED9C74",
                "3stOut": 5136,
                  "3thAddrOut":"A92BA6F9C91233B6A4\ EC84DC04CDB7AF08246184",
                "4stOut": 5012,
                  "4thAddrOut":"E406B6DD999EC16C9A\ C9AC2DA7207DBC8CE7A0F",
                "5stOut": 4966,
                  "5thAddrOut":"425C4B55368B86EA2F\ E5C5114E57875645804A45F"
            }
            );
        }
    else if (graph2.value === "2012"){

        NewChartData.push(
            {
               "year": 2012,
              "1st": 905499,
                   "1thAddrIn":"F4B004C3CA2E7F96F\ 9FC5BCA767708967AF67A44",
                "2nd": 151200,
                   "2thAddrIn":"CFBAB7AD5594EFD19\ 24175FFC099EA567DD0AC36",
                "3rd": 121255,
                   "3thAddrIn":"81F4015C88B30B74E\ A19BD288D3C0F0C606F1CE6",
                "4th": 120636,
                   "4thAddrIn":"5605C6DC8A9672A01\ 4225BAC565DB25BCEC649A24",
                "5th": 116268,
                   "5thAddrIn":"4104A39B9E4FBD213E\ F24BB9BE69DE4A118DD0\ 644082E47C01FD9159D3\ 8637B83FBCDC115A\ 5D6E970586A012D1C\ FE3E3A8B1A3D04E7\ 63BDC5A071C0\ E827C0BD834A5",
                "1stOut": 59921,
                   "1thAddrOut":"4104A39B9E4FBD213\ EF24BB9BE69DE4A118D\ D0644082E47C01FD9159D3\ 8637B83FBCDC115A\ 5D6E970586A012D1C\ FE3E3A8B1A3D04E7\ 63BDC5A071C0\ E827C0BD834A5",
                  "2stOut": 31974,
                  "2thAddrOut":"7B1DD94268DF8E11B\ A27AB1C99C61E914C717246",
                  "3stOut": 14461,
                  "3thAddrOut":"F4B004C3CA2E7F96F\ 9FC5BCA767708967AF67A44",
                  "4stOut": 10389,
                  "4thAddrOut":"327D73DF2F6E0E8EA\ D48EB54728E9CDFC62686F14",
                  "5stOut": 9236,
                  "5thAddrOut":"2D6FE761506A0FBDC\ ED503FDA7FB85C26ED1E76E"
            }
            );
        }
          else if (graph2.value === "2013"){

        NewChartData.push(
            {
               "year": 2013,
              "1st": 3507811,
                   "1thAddrIn":"06F1B66FFE49DF7FCE\ 684DF16C62F59DC9ADBD3F",
                "2nd": 1636518,
                   "2thAddrIn":"06F1B6703D3F56427B\ FCFD372F952D50D04B64BD",
                "3rd": 1260568,
                   "3thAddrIn":"06F1B670791F9256BF\ FC898F474271C22F4BB94",
                "4th": 1048573,
                   "4thAddrIn":"34A9E7680F95A048B\ B70ABE55A4F10B84593163C",
                "5th": 905499,
                   "5thAddrIn":"762F5F788C4715C1C\ 66D0F6E969878113DFBAB45",
                "1stOut": 3682247,
                   "1thAddrOut":"06F1B66FFE49DF7F\ CE684DF16C62F59DC9ADBD3F",
                  "2stOut": 1789874,
                   "2thAddrOut":"06F1B6703D3F5642\ 7BFCFD372F952D50D04B64BD",
                  "3stOut": 1418446,
                   "3thAddrOut":"06F1B670791F9256\ BFFC898F474271C22F4BB949",
                  "4stOut": 982363,
                   "4thAddrOut":"534234057EC0511A\ 37DC26C1DCDC799C8EC2BF60",
                  "5stOut": 779248,
                   "5thAddrOut":"4104C8F04A16A6AB8\ 67C5BB0D0793609B8CAF3DD\ 854014352AA7B2FA19\ 0B27FDDB163EF38D7\ 8EDF526EC735D316\ 4CECEE5B6EB78AF221\ 22027754081\ 7D5962B93A7F"
            }
            );
        }
           else if (graph2.value === "2014"){

        NewChartData.push(
            {
               "year": 2014,
              "1st": 6909358,
                  "1thAddrIn":"06F1B66FFE49DF7FCE\ 684DF16C62F59DC9ADBD3F",
                "2nd": 5146768,
                  "2thAddrIn":"41350509C8BE0CC77A\ C5B381E3F62363F8081A0E9",
                "3rd": 4834148,
                  "3thAddrIn":"06F1B6703D3F56427B\ FCFD372F952D50D04B64BD",
                "4th": 2949563,
                  "4thAddrIn":"06F1B670791F9256BF\ FC898F474271C22F4BB949",
                "5th": 2355055,
                  "5thAddrIn":"06F1B66FD59A34755C\ 37A8F701F43E937CDBEB13",
                "1stOut": 7259572,
                    "1thAddrOut":"06F1B66FFE49DF7FCE\ 684DF16C62F59DC9ADBD3F",
                  "2stOut": 5147944,
                    "2thAddrOut":"06F1B6703D3F56427B\ FCFD372F952D50D04B64BD",
                  "3stOut": 3239598,
                    "3thAddrOut":"06F1B670791F9256BF\ FC898F474271C22F4BB949",
                  "4stOut": 2676802,
                    "4thAddrOut":"06F1B66FD59A34755C\ 37A8F701F43E937CDBEB13",
                  "5stOut": 2301284,
                    "5thAddrOut":"06F1B66FC9E59A7B45\ 54CF2E6094032CD9EE45C4"
            }
            );
        }

        else if (graph2.value === "2015"){
        NewChartData.push(
            {
               "year": 2015,
                "1st": 17161708,
                "1thAddrIn":"null",
                "2nd": 14538252,
                "2thAddrIn":"AA3750AA18B8A0F3F05\ 90731E1FAB934856680CF",
                "3rd": 10336067,
                "3thAddrIn":"C825A1ECF2A6830C440\ 1620C3A16F1995057C2AB",
                "4th": 7080996,
                "4thAddrIn":"06F1B66FFE49DF7FCE6\ 84DF16C62F59DC9ADBD3F",
                "5th": 6779727,
                "5thAddrIn":"33681726C060599F9A5\ 2368815CA2256C100D060",

                "2stOut": 7473046,
                "2thAddrOut":"06F1B66FFE49DF7FCE\ 684DF16C62F59DC9ADBD3F",
                  "3stOut": 6187208,
                "3thAddrOut":"DA5DDE8ABEC4F3B675\ 61BCD06AAF28B790CFF755",
                  "4stOut": 5405778,
                "4thAddrOut":"BB571A5CF4A9CB4B44\ F2EB9170D55EDBA1C1C813F",
                  "5stOut": 4758103,
                "5thAddrOut":"C73464D74BE51A403E\ C49690F08429CA74AC9B36",
                "1stOut": 33451002,
                "1thAddrOut":"null"
            }
            );
        }

         else if (graph2.value === "2016"){
        NewChartData.push(
            {
               "year": 2016,
                "1st": 57789644,
                "1thAddrIn":"AA3750AA18B8A0F3F059\ 0731E1FAB934856680CF",
                "2nd": 37245741,
                "2thAddrIn": "8F5BBEB0BA818C6B9BA\ 6E15CED90D6B16F1E9713",
                "3rd": 32877848,
                "3thAddrIn": "BB30D0DB93DCCFB720D\ 91DADA7E8CC2ED6D2B288",
                "4th": 17232208,
                "4thAddrIn":"null",
                "5th": 10822281,
                "5thAddrIn":"BF792EB0333CF94E62\ 4C41DE94BAE7C0A5C33E33",


                "1stOut": 39963849,
                 "1thAddrOut":"DA5DDE8ABEC4F3B675\ 61BCD06AAF28B790CFF755",
                  "2stOut": 34053636,
                 "2thAddrOut":"null",
                  "3stOut": 25635669,
                 "3thAddrOut":"34ABFCB65C6DFD1929\ E074801A50EDA50E92F23B",
                  "4stOut": 10714607,
                 "4thAddrOut":"DA5DDE8A371EE36853\ 60970B9D74F8947E31D9EE",
                   "5stOut": 7487047,
                "5thAddrOut": "06F1B66FFE49DF7FCE\ 684DF16C62F59DC9ADBD3F"
            }
            );
        }




                //Setting the data data to the graph
        chart.dataProvider = NewChartData;
        chart.validateData();
    });