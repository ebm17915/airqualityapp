function weather() {
    var location = document.getElementById("location");
    var apiKey = "4da3cbbcc82c2597492c5d26269fb6bf";
    var url = "https://api.forecast.io/forecast/";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      location.innerHTML =
        "Latitude is " + latitude + "° Longitude is " + longitude + "°";
  
      $.getJSON(
        url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
        function(data) {
          $("#temp").html(data.currently.temperature + "° F");
          $("#minutely").html(data.minutely.summary);
        }
      );
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  
    location.innerHTML = "Locating...";
  }
  
  weather();
  