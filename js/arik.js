




function run() {
    F = undefined;
    icon = undefined;
    summary = undefined;
    cloudCover = undefined;
    humidity = undefined;
    precipProbability = undefined;
    visibility = undefined;
    windSpeed = undefined;
    address = undefined;

    var location = document.getElementById("location").value;

    var input2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyCq7C2oo_IggNRS6KKMYM0VrTH3Tt8J2Ag"
    $.ajax({
        // key = AIzaSyCq7C2oo_IggNRS6KKMYM0VrTH3Tt8J2Ag
        url: input2,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            address = result.results[0].formatted_address;
            // Address = result.results[0].address_components[0].long_name + (", ") + result.results[0].address_components[2].long_name;
            getWeather(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng)
        },
        error: function () {
            alert('Failed!');
        }
    });


    function getWeather(lat, lng) {

        var url = "https://api.darksky.net/forecast/ad0a25918602e1d5ac8a98c6c9764da1/" + lat + "," + lng;

        $.ajax({
            //key = ad0a25918602e1d5ac8a98c6c9764da1
            url: url,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                console.log(result);
                getData(result);

            },
            error: function () {
                alert('Failed!');
            }
        });
    }


    function getData(result) {
        F = result.currently.apparentTemperature;
        icon = result.currently.icon;
        summary = result.currently.summary;
        cloudCover = result.currently.cloudCover;
        humidity = result.currently.humidity;
        precipProbability = result.currently.precipProbability;
        visibility = result.currently.visibility;
        windSpeed = result.currently.windSpeed;
        display();
        // console.log(F);
        // console.log(icon);
        // console.log(summary);
        // console.log(cloudCover);
        // console.log(humidity);
        console.log(precipProbability);
        //console.log(visibility);
        // console.log(windSpeed);
    }

    function display() {
        iconGrab();
        convertC();
        document.getElementById("temp").innerHTML = F +"°F";
        document.getElementById("summary").innerHTML = summary;
        document.getElementById("precip").innerHTML = (precipProbability * 100) + " % chance of rain";
        document.getElementById("address").innerHTML = address;
        document.getElementById("icon").src = iconPNGURL;


        console.log("HI");
        if (F > 80) {
            if (icon == "clear-day") {

            } else if (icon == "clear-night") {

            } else if (icon == "rain") {

            } else if (icon == "snow") {

            } else if (icon == "sleet") {

            } else if (icon == "wind") {

            } else if (icon == "fog") {

            } else if (icon == "cloudy") {

            } else if (icon == "partly-cloudy-day") {

            } else if (icon == "partly-cloudy-night") {

            }
        } else if (60 < F <= 80) {
            if (icon == "clear-day") {
                console.log(cloudyWARM)
            } else if (icon == "clear-night") {
                console.log(cloudyWARM)
            } else if (icon == "rain") {
                console.log(cloudyWARM)
            } else if (icon == "snow") {
                console.log(cloudyWARM)
            } else if (icon == "sleet") {
                console.log(cloudyWARM)
            } else if (icon == "wind") {
                console.log(cloudyWARM)
            } else if (icon == "fog") {
                console.log(cloudyWARM)
            } else if (icon == "cloudy") {
                document.getElementById("activity").innerHTML = cloudyWARM;
            } else if (icon == "partly-cloudy-day") {
                console.log(cloudyWARM)
            } else if (icon == "partly-cloudy-night") {

            }
        } else if (35 < F <= 60 ) {
            if (icon == "clear-day") {
                console.log(cloudyWARM)
            } else if (icon == "clear-night") {
                console.log(cloudyWARM)
            } else if (icon == "rain") {
                console.log(cloudyWARM)
            } else if (icon == "snow") {
                console.log(cloudyWARM)
            } else if (icon == "sleet") {
                console.log(cloudyWARM)
            } else if (icon == "wind") {
                console.log(cloudyWARM)
            } else if (icon == "fog") {
console.log(cloudyWARM)
            } else if (icon == "cloudy") {
                document.getElementById("activity").innerHTML = cloudyWARM;
            } else if (icon == "partly-cloudy-day") {
                console.log(cloudyWARM)
            } else if (icon == "partly-cloudy-night") {

            }
        } else if ( F <= 35) {
            if (icon == "clear-day") {

            } else if (icon == "clear-night") {

            } else if (icon == "rain") {

            } else if (icon == "snow") {

            } else if (icon == "sleet") {

            } else if (icon == "wind") {

            } else if (icon == "fog") {

            } else if (icon == "cloudy") {

            } else if (icon == "partly-cloudy-day") {

            } else if (icon == "partly-cloudy-night") {

            }
        }
    }

}
function convertC() {
    C = (F - 32) * (5 / 9);
    C = (Math.round(C * 100) / 100) + "°C";
    console.log(C);
}