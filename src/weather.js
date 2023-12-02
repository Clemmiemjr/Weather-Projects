function updateWeather(response) {
  let temperatureElement = document.querySelector("#temp-number");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#change-icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = `, ${response.data.condition.description}`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/ph`;
  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = `${Math.round(temperature)}c`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
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
