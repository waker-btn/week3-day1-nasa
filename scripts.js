let searchResults;
let parsedResults;

function initialisePage() {
  const searchSubmit = document.querySelector(".header__search__submit");
  searchSubmit.addEventListener("click", commenceSearch);
}

async function commenceSearch(e) {
  e.preventDefault();

  let searchQuery = document.querySelector(".header__search__text-query").value;

  searchResults = await getResultsFromAPI(searchQuery);

  parsedResults = await sortResults(searchResults);
//   displayResults(parsedResults);
}

async function getResultsFromAPI(searchQuery) {
  let query = encodeURIComponent(searchQuery);

  let fetchAddress = "https://images-api.nasa.gov/search?q=" + query;

  try {
    const response = await fetch(fetchAddress);
    if (!response.ok) {
      throw new Error("Network not OK");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch collection:", error);
    throw error;
  }
}

function displayResults() {}

async function sortResults(results) {
  let working = results;
  let items = working.collection.items;
  let sorted = [];

  for (const result in items) {
    let entry = {};

    entry.id = items[result].data[0].nasa_id;
    entry.description = items[result].data[0].description;

    for (link in items[result].links) {
      if (items[result].links[link].rel == "preview") {
        entry.image = items[result].links[link].href;
        break;
      }
    }

    sorted.push(entry);
  }

  return sorted;

}

initialisePage();
