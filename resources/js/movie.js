const parseMovies = (search) => {
  Object.keys(search).forEach(key => {

    const { Poster: poster, Title: title, Type: type, Year: year, imdbID: id } = search[key];

    const img = createPoster(poster, title);
    const posterTitle = createPosterTitle(title);
    const posterShadow = createPosterShadow(title, type, year, id, img, posterTitle);

    document.getElementById('movies-container').appendChild(posterShadow);
  })
}



const createPoster = (poster, title) => {
  const img = document.createElement("img");
  img.setAttribute("src", poster);
  img.setAttribute("onerror", "this.src='./resources/images/NoPoster.jpg'");
  img.setAttribute("alt", title);
  return img
}



const createPosterTitle = (title) => {
  const posterTitle = document.createElement("div");

  title.length < 28 ? posterTitle.classList.add("poster-title") : posterTitle.classList.add("poster-title-long");

  posterTitle.innerHTML = title;
  return posterTitle;
}



const createPosterShadow = (title, type, year, id, img, posterTitle) => {

  const posterShadow = document.createElement("div");
  posterShadow.classList.add("poster-shadow")

  posterShadow.appendChild(img);
  posterShadow.appendChild(posterTitle);

  posterShadow.appendChild(movieDetails(title, type, year, id));

  posterShadow.addEventListener("mouseenter", () => posterTitle.style.opacity = 0.0);
  posterShadow.addEventListener("mouseleave", () => posterTitle.style.opacity = 1.0);

  posterShadow.onclick = () => {
    showDetails(title, id);
    posterShadow.scrollIntoView();
  }
  return posterShadow;
}



const noResults = () => {
  let noResultsText = document.createElement("div");
  noResultsText.classList.add("no-results-text");
  noResultsText.innerHTML = `No movies found!`;
  document.getElementById('movies-container').appendChild(noResultsText);
}