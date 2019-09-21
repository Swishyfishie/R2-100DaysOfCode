class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-description");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.feels = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }
  // (fTemp - 32) * 5) / 9
  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `Temperature is ${weather.main.temp}°C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/01d@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feels.textContent = `Longitude: ${weather.coord.lon} | Latitude: ${weather.coord.lat}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} KM/h`;
    this.pressure.textContent = `The pressure is ${weather.main.pressure} Bar`;
  }
}
