require(["helper/makeQHr"], function(makeQHr) {
  var xmlns = "http://www.w3.org/2000/svg";

  var svg = document.createElementNS (xmlns, 'svg');
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "-10 -10 210 410");
  var r = 100; 
  document.body.appendChild(svg);

  var figure8 = document.createElementNS(xmlns, 'g');
  figure8.setAttribute("transform", "scale(1,-1), translate(0,-400)");
  svg.appendChild(figure8);

  var figure8s = [];

  var options = {
      theme: "dark"
  };

  //dayInfo[qHrNum]: {weatherInfo, calendarInfo}
    //weatherInfo: {temperature, precipitation, clouds, dayNightShade}
    //calendarInfo: {calColor, calInfo}

});