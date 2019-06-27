const NAVIGATOR = `...`;
const FIRST_PAGE = 1;
const PAGE_RANGE = 8;



const listPages = (title, totalResults, currentPage) => {

  const totalPages = Math.floor((totalResults / 10) + 1)

  let floorPage = 0;
  let ceilingPage = 0;

  switch (true) {
    case (currentPage <= PAGE_RANGE):
      if (totalPages < PAGE_RANGE) {
        addPageRange(title, FIRST_PAGE, totalPages, currentPage);
      } else {
        addPageRange(title, FIRST_PAGE, PAGE_RANGE, currentPage);

        addLastPageNav(title, PAGE_RANGE, totalPages);
      }
      break;

    case (currentPage >= totalPages - PAGE_RANGE):
      floorPage = totalPages - PAGE_RANGE;
      addFirstPageNav(title, floorPage);

      addPageRange(title, floorPage, totalPages, currentPage);
      break;

    default:
      floorPage = currentPage - 3;
      addFirstPageNav(title, floorPage);

      ceilingPage = Number(currentPage) + 2;
      addPageRange(title, floorPage, ceilingPage, currentPage);

      addLastPageNav(title, ceilingPage, totalPages);
      break;
  }
}



const addPageRange = (title, floorPage, ceilingPage, currentPage) => {
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



const addPage = (pageLink, numberText) => {
  pageLink.innerHTML = numberText;
  let pageDiv = document.createElement("div");
  pageDiv.appendChild(pageLink);
  document.getElementById('pages-container').appendChild(pageDiv);
}



const addFirstPageNav = (title, floorPage) => {
  addOuterNav(title, FIRST_PAGE);
  let previousPagination = floorPage - 1;
  addOuterNav(title, previousPagination, NAVIGATOR);
}



const addLastPageNav = (title, ceilingPage, totalPages) => {
  let nextPagination = ceilingPage + 1;
  addOuterNav(title, nextPagination, NAVIGATOR);
  addOuterNav(title, totalPages)
}



const addOuterNav = (title, numberText, navigator) => {
  let pageLink = document.createElement("a");
  pageLink.setAttribute("href", `index.html?title=${title}&page=${numberText}`);
  pageLink.classList.add("page-number");

  navigator ? pageLink.innerHTML = navigator : pageLink.innerHTML = numberText;

  let pageDiv = document.createElement("div");
  pageDiv.appendChild(pageLink);
  document.getElementById('pages-container').appendChild(pageDiv);
}