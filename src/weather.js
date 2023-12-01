function handleSearchSumbit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}

let searchFieldElement = document.querySelector("#search-field");
searchFieldElement.addEventListener("submit", handleSearchSumbit);
