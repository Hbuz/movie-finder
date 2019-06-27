const listPages = (title, totalResults, currentPage) => {

  const totalPages = Math.floor((totalResults / 10) + 1)

  if (currentPage <= 8) {
    if (totalPages < 8) {
      pageRange(title, 1, totalPages, currentPage);
    } else {
      pageRange(title, 1, 8, currentPage);
      let ceilingPage = 8 + 1;
      addNav(title, ceilingPage);
      addOuterPage(title, totalPages);
    }
  } else if (currentPage >= totalPages - 8) {
    addOuterPage(title, 1);
    let floorPage = totalPages - 8;
    let previousPage = floorPage -1;
    addNav(title, previousPage);
    pageRange(title, floorPage, totalPages, currentPage);
  } else {
    addOuterPage(title, 1);
    let floorPage = currentPage - 3;
    let previousPage = floorPage -1;
    addNav(title, previousPage);
    let ceilingPage = Number(currentPage) + 2;
    pageRange(title, floorPage, ceilingPage, currentPage);
    let nextPage = ceilingPage +1;
    addNav(title, nextPage);
    addOuterPage(title, totalPages);
  }

}


const pageRange = (title, floorPage, ceilingPage, currentPage) => {
  for (let i = floorPage; i <= ceilingPage; i++) {
    let pageLink = document.createElement("a");

    if (currentPage != i) {
      pageLink.setAttribute("href", `index.html?title=${title}&page=${i}`);
      pageLink.classList.add("page-number");
    } else {
      pageLink.classList.add("current-page-number");
    }
    addPage(pageLink, i)
  }
}



const addOuterPage = (title, numberText) => {
  let pageLink = document.createElement("a");
  pageLink.setAttribute("href", `index.html?title=${title}&page=${numberText}`);
  pageLink.classList.add("page-number");
  pageLink.innerHTML = numberText;
  let pageDiv = document.createElement("div");
  pageDiv.appendChild(pageLink);
  document.getElementById('pages-container').appendChild(pageDiv);
}


const addPage = (pageLink, numberText) => {
  pageLink.innerHTML = numberText;
  let pageDiv = document.createElement("div");
  pageDiv.appendChild(pageLink);
  document.getElementById('pages-container').appendChild(pageDiv);
}


const addNav = (title, nextPage) => {
  let pageLink = document.createElement("a");
  pageLink.setAttribute("href", `index.html?title=${title}&page=${nextPage}`);
  pageLink.classList.add("page-number");
  pageLink.innerHTML = `...`;
  let pageDiv = document.createElement("div");
  pageDiv.appendChild(pageLink);
  document.getElementById('pages-container').appendChild(pageDiv);
}