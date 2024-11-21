      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart);



      function drawChart1() {
        var data = [];
        data[0] = google.visualization.arrayToDataTable([
            ["Partido", "Votos", { role: "style" } ],
            ["VOX", 37.50, "green"],
            ["PP", 12.50, "blue"],
            ["PSOE", 12.49, "red"],
            ["SUMAR", 12.51, "pink"],
            ["PACMA", 25.09, "lightgreen"]
          ]);

          data[1] = google.visualization.arrayToDataTable([
            ["Partido", "Votos", { role: "style" } ],
            ["VOX", 40.10, "green"],
            ["PP", 38.50, "blue"],
            ["PSOE", 20.49, "red"],
            ["SUMAR", 15.51, "pink"],
            ["PACMA", 25.09, "lightgreen"]
          ]);
    
          var view = new google.visualization.DataView(data[0]);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);
    
          var options = {
            title: "Elecciones generales",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
            vAxis: {title: "Partido"},
            hAxis: {title: "Votos"},
            animation: {duration: 1000, easing: 'out'}
          };
          var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
          chart.draw(view, options);

          setTimeout(() => {
            view = new google.visualization.DataView(data[1]);
            view.setColumns([0, 1,
                { calc: "stringify",
                  sourceColumn: 1,
                  type: "string",
                  role: "annotation" },
                2]);
            chart.draw(view,options)
          }, 10000);

      }




      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = [];
        data[0] = google.visualization.arrayToDataTable([
            ["Partido", "Votos"],
            ["VOX", 37.50],
            ["PP", 12.50],
            ["PSOE", 12.49],
            ["SUMAR", 12.51],
            ["PACMA", 25.09]
          ]);

          data[1] = google.visualization.arrayToDataTable([
            ["Partido", "Votos"],
            ["VOX", 40.10],
            ["PP", 38.50],
            ["PSOE", 20.49],
            ["SUMAR", 15.51],
            ["PACMA", 25.09]
          ]);

        // Set chart options
        var options = {'title':'Elecciones Generales',
                       'width':400,
                       'height':300,
                       'colors' :['green', 'blue', 'red', 'pink', 'lightgreen'],
                       vAxis: {title: "Partido"},
                       hAxis: {title: "Votos"},
                       animation: {duration: 1000, easing: 'out'}};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data[0], options);

            setTimeout(() => {
                chart.draw(data[1],options);
            }, 10000);
      }










