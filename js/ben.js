function iconGrab() {

   iconArray = [];
   iconArray[0] = new Array("clear-day", "icons/clearDay.png");
   iconArray[1] = new Array("clear-night", "icons/clearNight.png");
   iconArray[2] = new Array("rain", "icons/rain.png");
   iconArray[3] = new Array("snow", "icons/snow.png");
   iconArray[4] = new Array("sleet", "icons/sleet.png");
   iconArray[5] = new Array("wind", "icons/wind.png");
   iconArray[6] = new Array("fog", "icons/fog.png");
   iconArray[7] = new Array("cloudy", "icons/cloudy.png");
   iconArray[8] = new Array("partly-cloudy-day", "icons/partlyCloudyDay.png");
   iconArray[9] = new Array("partly-cloudy-night", "icons/partlyCloudyNight.png");
   for (var i = 0; i < iconArray.length; i++) {

      if (iconArray[i][0] == icon) {
         iconPNGURL = iconArray[i][1];

      }
   }

}