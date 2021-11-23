document.addEventListener("DOMContentLoaded", function() {
  // let search_input = document.getElementById('search').addEventListener('click', openSearch)

  // var openmodal = document.querySelectorAll('.modal-open')
  // for (var i = 0; i < openmodal.length; i++) {
  //   openmodal[i].addEventListener('click', function(event){
  //     event.preventDefault()
  //     toggleSearchModal()
  //   })
  // }
  let nav_search_input = document.getElementById('search');
  nav_search_input.addEventListener('click', function(event){
    event.preventDefault()
    toggleSearchModal()
  })

  const overlay = document.querySelector('.modal-overlay')
  overlay.addEventListener('click', toggleSearchModal)

  let closemodal = document.querySelectorAll('.modal-close')
  // closemodal.addEventListener('click', toggleSearchModal)
  for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleSearchModal)
  }

  document.onkeydown = function(evt) {
    evt = evt || window.event
    let isEscape = false
    let isCmdK = false
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc")
      isCmdK = (evt.key === "k" && evt.metaKey === true)
    } else {
      isCmdK = (evt.keyCode === 75 && evt.metaKey)
      isEscape = (evt.keyCode === 27)
    }
    if (isCmdK) { evt.preventDefault() }
    if ((isEscape && document.body.classList.contains('search-active')) || isCmdK) {
      toggleSearchModal();
    }
  };

  let search_index = elasticlunr.Index.load(window.searchIndex);
  let elasticlunr_options = {
    bool: "AND",
    fields: {
      title: {boost: 2},
      body: {boost: 1},
    }
  };
  let search_term = "";
  let search_results = "";
  let search_input = document.getElementById('search-input');
  let search_results_container = document.getElementById('search-results');
  search_input.addEventListener('keyup', function(event) {
    // Trigger search
    if ([...document.body.classList].includes('search-active') && search_input.value.trim().length > 3) {
      // console.log('search')
      search_term = search_input.value.trim();
      // console.log(search_term)
      search_results = search_index.search(search_term, elasticlunr_options);
      // console.log(search_results)
      if (Array.isArray(search_results) && search_results.length > 0) {
        let result_list = document.getElementById('results-list');
        result_list.replaceChildren();
        let item = "";
        for (i = 0; i < search_results.length; i++) {
          let item = formatResultItem(search_results[i]);
          result_list.appendChild(item);
        }
      }
      // if (results.length === 0) {
      //   $searchResults.style.display = "none";
      //   return;
      // }
    }
  })
});

function toggleSearchModal () {
  const modal = document.getElementById('search-modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  document.body.classList.toggle('search-active')
  if ([...document.body.classList].includes('search-active')) {
    // window.setTimeout(function() {
    document.getElementById('search-input').value = ""
    document.getElementById('search-input').focus()
    // }, 500);
  }
}

function formatResultItem(search_result) {
  console.log(search_result)
  let formatted_result = `<li class="flex hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-gray-200 p-2 rounded-lg border border-black dark:border-gray-200 bg-gray-200 dark:bg-gray-500 rounded-lg hover:shadow-xl mb-2">
  <a href="${search_result.doc.path}">
  <span class="text-xl text-bold">${search_result.doc.title}</span>
  <span class="text-lg">${search_result.doc.description}</span>
  </a>
  </li>`
  return htmlToElement(formatted_result)
}

// Credits : https://stackoverflow.com/a/35385518/7098666
function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

// function openSearch() {
//   console.log("open modal");
//   let search_modal = document.getElementById('search-modal');
//   search_modal.classList.remove('hidden');
//   console.log(search_modal);
// }

// function search() {
//   let index = elasticlunr.Index.load(window.searchIndex);
// }
