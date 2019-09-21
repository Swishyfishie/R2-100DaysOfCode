class Weather {
  constructor(city, country) {
    this.apiKey = "52195519e3ed9f265c414e0c13714ef5";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from api

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
