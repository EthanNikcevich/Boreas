

$(document).ready(function(){
    $("#page2").hide();
    $("#page1").show();
    $("#button").click(function(){
        $("#page1").hide();
        $("#page2").show();
    });
});

$(document).ready(function(){
    $("#page2").hide();
    $("#page1").show();
    $("#backbutton").click(function(){
        $("#page2").hide();
        $("#page1").show();
    });
});
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
        // console.log(precipProbability);
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
                document.getElementById("activity").innerHTML=cleardayHOT
            } else if (icon == "clear-night") {
                document.getElementById("activity").innerHTML=clearnightHOT
            } else if (icon == "rain") {
                document.getElementById("activity").innerHTML=rainDesc
            } else if (icon == "snow") {
                document.getElementById("activity").innerHTML=snowDesc
            } else if (icon == "sleet") {
                document.getElementById("activity").innerHTML=sleetDesc
            } else if (icon == "wind") {
                document.getElementById("activity").innerHTML=windHOT
            } else if (icon == "fog") {
                document.getElementById("activity").innerHTML=fogHOT
            } else if (icon == "cloudy") {
                document.getElementById("activity").innerHTML=cloudyHOT
            } else if (icon == "partly-cloudy-day") {
                document.getElementById("activity").innerHTML=partlycloudydayHOT
            } else if (icon == "partly-cloudy-night") {
                document.getElementById("activity").innerHTML=partlycloudynightHOT
            }
        } else if (60 < F <= 80) {
            if (icon == "clear-day") {
                document.getElementById("activity").innerHTML=cleardayWARM
            } else if (icon == "clear-night") {
                document.getElementById("activity").innerHTML=clearnightWARM
            } else if (icon == "rain") {
                document.getElementById("activity").innerHTML=rainDesc
            } else if (icon == "snow") {
                document.getElementById("activity").innerHTML=snowDesc
            } else if (icon == "sleet") {
                document.getElementById("activity").innerHTML=sleetDesc
            } else if (icon == "wind") {
                document.getElementById("activity").innerHTML=windWARM
            } else if (icon == "fog") {
                document.getElementById("activity").innerHTML=fogWARM
            } else if (icon == "cloudy") {
                document.getElementById("activity").innerHTML=cloudyWARM
            } else if (icon == "partly-cloudy-day") {
                document.getElementById("activity").innerHTML=partlycloudydayWARM
            } else if (icon == "partly-cloudy-night") {
                document.getElementById("activity").innerHTML=partlycloudynightWARM
            }
        } else if (35 < F <= 60 ) {
            if (icon == "clear-day") {
                document.getElementById("activity").innerHTML=cleardayCOLD
            } else if (icon == "clear-night") {
                document.getElementById("activity").innerHTML=clearnightCOLD
            } else if (icon == "rain") {
                document.getElementById("activity").innerHTML=rainDesc
            } else if (icon == "snow") {
                document.getElementById("activity").innerHTML=snowDesc
            } else if (icon == "sleet") {
                document.getElementById("activity").innerHTML=sleetDesc
            } else if (icon == "wind") {
                document.getElementById("activity").innerHTML=windCOLD
            } else if (icon == "fog") {
                document.getElementById("activity").innerHTML=fogCOLD
            } else if (icon == "cloudy") {
                document.getElementById("activity").innerHTML=cloudyCOLD
            } else if (icon == "partly-cloudy-day") {
                document.getElementById("activity").innerHTML=partlycloudydayCOLD
            } else if (icon == "partly-cloudy-night") {
                document.getElementById("activity").innerHTML=partlycloudynightCOLD
            }
        } else if ( F <= 35) {
            if (icon == "clear-day") {
                document.getElementById("activity").innerHTML=cleardayFRIGID
            } else if (icon == "clear-night") {
                document.getElementById("activity").innerHTML=clearnightFRIGID
            } else if (icon == "rain") {
                document.getElementById("activity").innerHTML=rainDesc
            } else if (icon == "snow") {
                document.getElementById("activity").innerHTML=snowDesc
            } else if (icon == "sleet") {
                document.getElementById("activity").innerHTML=sleetDesc
            } else if (icon == "wind") {
                document.getElementById("activity").innerHTML=windFRIGID
            } else if (icon == "fog") {
                document.getElementById("activity").innerHTML=fogFRIGID
            } else if (icon == "cloudy") {
                document.getElementById("activity").innerHTML=cloudyFRIGID
            } else if (icon == "partly-cloudy-day") {
                document.getElementById("activity").innerHTML=partlycloudydayFRIGID
            } else if (icon == "partly-cloudy-night") {
                document.getElementById("activity").innerHTML=partlycloudynightFRIGID
            }
        }
    }

}
function convertC() {
    C = (F - 32) * (5 / 9);
    C = (Math.round(C * 100) / 100) + "°C";
    console.log(C);
}