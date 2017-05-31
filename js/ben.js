function iconGrab() {

   iconArray = [];
   iconArray[0] = new Array("clear-day", "https://cdn4.iconfinder.com/data/icons/fitness-vol-2/48/65-512.png");
   iconArray[1] = new Array("clear-night", "https://cdn2.iconfinder.com/data/icons/wthr/32/moon-512.png");
   iconArray[2] = new Array("rain", "http://pngimages.net/sites/default/files/rain-png-image-54887.png");
   iconArray[3] = new Array("snow", "http://icons.veryicon.com/png/System/Icons8%20Metro%20Style/Weather%20Snow.png");
   iconArray[4] = new Array("sleet", "http://pngimages.net/sites/default/files/snow-wear-symbol-png-image-58773.png");
   iconArray[5] = new Array("wind", "https://maxcdn.icons8.com/Share/icon/ios7/Weather//windy_weather1600.png");
   iconArray[6] = new Array("fog", "https://cdn4.iconfinder.com/data/icons/cloud-based-weather-forecasts/512/weather01-fog-512.png");
   iconArray[7] = new Array("cloudy", "https://img.clipartfest.com/279835b8115996c967019a50a8881ed7_cloudy-weather-clip-art-clipart-download-weather-cloudy-clipart_2400-2400.png");
   iconArray[8] = new Array("partly-cloudy-day", "http://icons.veryicon.com/png/System/Swanky%20Outlines/13%20Partly%20Cloudy.png");
   iconArray[9] = new Array("partly-cloudy-night", "http://icons.veryicon.com/256/System/Icons8%20Metro%20Style/Weather%20Partly%20cloudy%20night.png");
   for (var i = 0; i < iconArray.length; i++) {

      if (iconArray[i][0] == icon) {
         iconPNGURL = iconArray[i][1];
          console.log(iconPNGURL);

      }
   }

}