const listPages = (totalResults, currentPage) => {
  const totalPages = (totalResults / 10) + 1
  for (let i = 1; i < totalPages; i++) {
    let pageNumber = document.createElement("a");

    if (currentPage != i) {
      pageNumber.setAttribute("href", `index.html?title=${title}&page=${i}`);
      pageNumber.classList.add("page-number");
    } else {
      pageNumber.classList.add("current-page-number");
    }

    pageNumber.innerHTML = i;
    let pageDiv = document.createElement("div");
    pageDiv.appendChild(pageNumber);
    document.getElementById('pages-container').appendChild(pageDiv);
  }
}