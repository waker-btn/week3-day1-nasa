function initialisePage() {

    const searchSubmit = document.querySelector(".header__search__submit");
    searchSubmit.addEventListener("click", commenceSearch);

}

function commenceSearch(e){

    let searchQuery = document.querySelector(".header__search__text-query").value;

    getResultsFromAPI(searchQuery);

}

async function getResultsFromAPI(searchQuery){

        try {
        const response = await fetch( + );
        if (!response.ok) {
            throw new Error("Network not OK");
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
        throw error;
    }


}

