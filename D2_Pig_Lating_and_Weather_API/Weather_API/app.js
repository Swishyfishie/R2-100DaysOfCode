// initialize

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const ui = new UI();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

//get stored location

document.addEventListener("DOMContentLoaded", getWeather);

// change location event

document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  // set location in local storage
  storage.setLocationData(city, country);

  // get and display weather

  getWeather();

  //close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.warn(err));
}
