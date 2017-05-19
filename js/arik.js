

// key = AIzaSyCq7C2oo_IggNRS6KKMYM0VrTH3Tt8J2Ag
function run() {
    F = undefined;
    icon = undefined;
    summary = undefined;

    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    var input2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + state + "&key=AIzaSyCq7C2oo_IggNRS6KKMYM0VrTH3Tt8J2Ag"
    $.ajax({
        url: input2,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            getWeather(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng)
        },
        error: function () {
            alert('Failed!');
        }
    });


//key = ad0a25918602e1d5ac8a98c6c9764da1
    function getWeather(lat, lng) {

        var url = "https://api.darksky.net/forecast/ad0a25918602e1d5ac8a98c6c9764da1/" + lat + "," + lng;

        $.ajax({
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
}

function getData(result) {
    var F = result.currently.apparentTemperature;
    var icon = result.currently.icon;
    var summary = result.currently.summary;
    console.log(result.currently.apparentTemperature);
    console.log(result.currently.icon);
    console.log(result.currently.summary);
}
