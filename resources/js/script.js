"use strict";

const searchMovie = () => {
  let title = document.getElementById("search-bar").value;

  window.location.href = `index.html?title=${title}&page=1`;
}



const fetchMovies = (title, page) => {

  fetch(`http://www.omdbapi.com/?apikey=338f9a63&s=${title}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      const { Search: search, totalResults } = data

      if(totalResults > 0){
        parseMovies(search);
        listPages(title, totalResults, page);
      } else {
        noResults();
      }
    })
    .catch(error => console.error(error));
}


let urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const page = urlParams.get('page');

if (title) {
  fetchMovies(title, page);
}