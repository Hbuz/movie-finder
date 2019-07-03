const showDetails = (title, id) => {
  const selectedMovie = document.getElementById(id);
  const moviesContainer = document.getElementById("movies-container");
  if (selectedMovie) {

    detailsToggle(selectedMovie, moviesContainer, title);
  }
}



const detailsToggle = (selectedMovie, moviesContainer, title) => {
  if (selectedMovie.classList.contains("hide-details")) {

    title.length < 28 ? selectedMovie.classList.replace("hide-details", "show-details")
      : selectedMovie.classList.replace("hide-details", "show-details-long");

    closeOtherDetails(moviesContainer, selectedMovie);

  } else {
    selectedMovie.classList.replace("show-details", "hide-details");
    selectedMovie.classList.replace("show-details-long", "hide-details");
  }
}



const closeOtherDetails = (moviesContainer, selectedMovie) => {
  for (let i = 0; i < moviesContainer.children.length; i++) {
    const movie = moviesContainer.children[i];
    const movieDetails = movie.children[2];

    if (movie !== selectedMovie.parentNode &&
      (movieDetails.classList.contains("show-details") || movieDetails.classList.contains("show-details-long"))) {

      movieDetails.classList.replace("show-details", "hide-details");
      movieDetails.classList.replace("show-details-long", "hide-details");
    }
  }
}



const movieDetails = (title, type, year, id) => {
  const detailContainer = createDetailContainer(id);

  createPlayButton(detailContainer);

  createDetail("Title", title, detailContainer);
  createDetail("Type", type, detailContainer);
  createDetail("Year", year, detailContainer);

  return detailContainer;
}



const createDetailContainer = (id) => {
  const detailContainer = document.createElement("div");
  detailContainer.setAttribute("id", id);
  detailContainer.classList.add("hide-details");
  return detailContainer;
}



const createDetail = (name, value, container) => {
  const detail = document.createElement("div");
  detail.classList.add("detail");

  const nameElem = document.createElement("div");
  nameElem.classList.add("detail-name");
  nameElem.innerHTML = `${name}: `;
  detail.appendChild(nameElem);

  const valueElem = document.createElement("div");
  valueElem.classList.add("detail-value");
  valueElem.innerHTML = value;
  detail.appendChild(valueElem);
  container.appendChild(detail);
}



const createPlayButton = (detailContainer) => {
  const playButton = document.createElement("button");
  playButton.classList.add("detail");
  playButton.onclick = () => openPlaySample();
  playButton.innerHTML = "Play sample";
  playButton.style.cursor = 'pointer';
  detailContainer.appendChild(playButton);
}