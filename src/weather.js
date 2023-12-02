function updateWeather(response) {
  let temperatureElement = document.querySelector("#temp-number");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} kmph`;
  temperatureElement.innerHTML = `${Math.round(temperature)}c`;
}

function searchCity(city) {
  let apiKey = "8t94954492f3aa97ffbbff3b440e4odd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSumbit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");

  searchCity(searchInput.value);
}

let searchFieldElement = document.querySelector("#search-field");
searchFieldElement.addEventListener("submit", handleSearchSumbit);
