
// SELECT HTML ELEMENTS

const recipesGrid = document.getElementById("recipesGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const sortSelect = document.getElementById("sortSelect");
const emptyMessage = document.getElementById("emptyMessage");

const recipeModal = document.getElementById("recipeModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

 //  APPLICATION STATE

let selectedCategory = "all";
let searchText = "";
let sortOption = "default";

let favoriteIds = [];

try {
    const savedFavorites = JSON.parse(
        localStorage.getItem("moroccanFoodFavorites")
    );

    if (Array.isArray(savedFavorites)) {
        favoriteIds = savedFavorites.filter(id =>
            allRecipes.some(recipe => recipe.id === id)
        );
    }
} catch (error) {
    console.warn("Impossible de lire les favoris sauvegardés.", error);
}

// SAVE FAVORITES

function saveFavorites() {
    try {
        localStorage.setItem(
            "moroccanFoodFavorites",
            JSON.stringify(favoriteIds)
        );
    } catch (error) {
        console.warn("Impossible de sauvegarder les favoris.", error);
    }
}


// DISPLAY RECIPE CARDS

function createRecipeCard(recipe) {
    const isFavorite = favoriteIds.includes(recipe.id);

    const card = document.createElement("article");
    card.className = "recipe-card";

    const image = document.createElement("img");
    image.className = "recipe-image";
    image.src = recipe.image;
    image.alt = recipe.title;
    image.loading = "lazy";

    image.addEventListener("error", () => {
        image.alt = `Image indisponible : ${recipe.title}`;
    }, { once: true });

    const info = document.createElement("div");
    info.className = "recipe-info";

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const category = document.createElement("span");
    category.className = "recipe-category";
    category.textContent = recipe.category;

    const description = document.createElement("p");
    description.className = "recipe-description";
    description.textContent = recipe.shortDescription;

    const time = document.createElement("p");
    time.className = "recipe-time";
    time.textContent = `⏱ ${recipe.time} minutes`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const detailsButton = document.createElement("button");
    detailsButton.className = "details-btn";
    detailsButton.textContent = "View details";
    detailsButton.addEventListener("click", () => {
        openRecipeDetails(recipe.id);
    });

    const favoriteButton = document.createElement("button");
    favoriteButton.className = "favorite-btn";
    favoriteButton.textContent = isFavorite
        ? " Ajouté aux favoris"
        : " Add to favorites";

    favoriteButton.setAttribute(
        "aria-pressed",
        String(isFavorite)
    );

    favoriteButton.addEventListener("click", () => {
        toggleFavorite(recipe.id);
    });

    actions.append(detailsButton, favoriteButton);

    info.append(title, category, description, time, actions);
    card.append(image, info);

    return card;
}

//FILTER AND SORT RECIPES

function getFilteredRecipes() {
    let filteredRecipes = allRecipes.filter(recipe => {
        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category === selectedCategory;

        const searchableText = (
            recipe.title + " " +
            recipe.category + " " +
            recipe.shortDescription + " " +
            recipe.fullDetails
        ).toLocaleLowerCase("fr");

        const matchesSearch = searchableText.includes(searchText);

        return matchesCategory && matchesSearch;
    });

    if (sortOption === "title") {
        filteredRecipes.sort((a, b) =>
            a.title.localeCompare(b.title, "fr")
        );
    } else if (sortOption === "time") {
        filteredRecipes.sort((a, b) => a.time - b.time);
    }

    return filteredRecipes;
}


//RENDER THE MAIN CATALOG
function renderRecipes() {
    const filteredRecipes = getFilteredRecipes();

    recipesGrid.replaceChildren();

    filteredRecipes.forEach(recipe => {
        recipesGrid.appendChild(createRecipeCard(recipe));
    });

    emptyMessage.hidden = filteredRecipes.length > 0;
}


//FAVORITES
function toggleFavorite(recipeId) {
    if (favoriteIds.includes(recipeId)) {
        favoriteIds = favoriteIds.filter(id => id !== recipeId);
    } else {
        favoriteIds.push(recipeId);
    }

    saveFavorites();
    renderRecipes();
    renderFavorites();
}

function renderFavorites() {
    favoritesGrid.replaceChildren();

    const favoriteRecipes = allRecipes.filter(recipe =>
        favoriteIds.includes(recipe.id)
    );

    favoriteRecipes.forEach(recipe => {
        favoritesGrid.appendChild(createRecipeCard(recipe));
    });

    const favoritesSection = document.querySelector(".favorites-section");
    const favoritesTitle = favoritesSection.querySelector("h2");

    if (favoriteRecipes.length === 0) {
        favoritesTitle.textContent = " Mes recettes préférées";
    } else {
        favoritesTitle.textContent =
            `Mes recettes préférées (${favoriteRecipes.length})`;
    }
}
 //RECIPE DETAILS MODAL
function openRecipeDetails(recipeId) {
    const recipe = allRecipes.find(item => item.id === recipeId);

    if (!recipe) return;

    modalBody.replaceChildren();

    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.title;
    image.className = "recipe-image";
    image.style.borderRadius = "12px";

    const title = document.createElement("h2");
    title.id = "modalTitle";
    title.textContent = recipe.title;

    const category = document.createElement("p");
    category.textContent = `Category: ${recipe.category}`;

    const time = document.createElement("p");
    time.textContent = `Preparation time: ${recipe.time} minutes`;

    const details = document.createElement("p");
    details.textContent = recipe.fullDetails;

    modalBody.append(image, title, category, time, details);

    recipeModal.classList.add("show");
    recipeModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeModal.focus();
}

function hideRecipeDetails() {
    recipeModal.classList.remove("show");
    recipeModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}


//  EVENT LISTENERS


// Live search
searchInput.addEventListener("input", event => {
    searchText = event.target.value.trim().toLocaleLowerCase("fr");
    renderRecipes();
});

// Category filters
categoryFilters.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");

    if (!button) return;

    selectedCategory = button.dataset.category;

    categoryFilters.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn === button);
    });

    renderRecipes();
});

// Sorting
sortSelect.addEventListener("change", event => {
    sortOption = event.target.value;
    renderRecipes();
});

// Close modal using the close button
closeModal.addEventListener("click", hideRecipeDetails);

// Close modal by clicking the overlay
recipeModal.addEventListener("click", event => {
    if (event.target === recipeModal) {
        hideRecipeDetails();
    }
});

// Close modal using Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && recipeModal.classList.contains("show")) {
        hideRecipeDetails();
    }
});

//INITIALIZE THE APP

renderRecipes();
renderFavorites();
