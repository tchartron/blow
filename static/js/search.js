document.addEventListener("DOMContentLoaded", function() {
  let search_input = document.getElementById('search').addEventListener('click', openSearch)
  // search();
});

function openSearch() {
  console.log("open modal")
  let search_modal = document.getElementById('search-modal');
  console.log(search_modal)
}

function search() {
  let index = elasticlunr.Index.load(window.searchIndex);
}
