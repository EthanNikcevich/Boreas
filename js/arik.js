$.ajax({
    url: "https://api.darksky.net/forecast/ad0a25918602e1d5ac8a98c6c9764da1/37.8267,-122.4233",
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(result) { console.log(result) },
    error: function() { alert('Failed!'); }
});

