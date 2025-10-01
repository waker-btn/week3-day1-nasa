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

  sortResults(searchResults);
  displayResults(parsedResults);
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

function sortResults(results) {
  let working = JSON.parse(results);
  let items = working.collection.items;
  let sorted;

  for (const result in items) {
    
  }
}

initialisePage();
