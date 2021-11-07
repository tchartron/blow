document.addEventListener("DOMContentLoaded", function() {
  // let search_input = document.getElementById('search').addEventListener('click', openSearch)

  // var openmodal = document.querySelectorAll('.modal-open')
  // for (var i = 0; i < openmodal.length; i++) {
  //   openmodal[i].addEventListener('click', function(event){
  //     event.preventDefault()
  //     toggleModal()
  //   })
  // }
  let search_input = document.getElementById('search');
  search_input.addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
  })

  const overlay = document.querySelector('.modal-overlay')
  overlay.addEventListener('click', toggleModal)

  let closemodal = document.getElementById('close-modal')
  closemodal.addEventListener('click', toggleModal)
  // for (var i = 0; i < closemodal.length; i++) {
  //   closemodal[i].addEventListener('click', toggleModal)
  // }

  document.onkeydown = function(evt) {
    evt = evt || window.event
    let isEscape = false
    let isCmdK = false
    console.log(evt)
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc")
      isCmdK = (evt.key === "k" && evt.key === "Meta")
      console.log("first")
    } else {
      isCmdK = (evt.keyCode === 75 && evt.metaKey || evt.keyCode === 75 && evt.keyCode === 224)
      isEscape = (evt.keyCode === 27)
      console.log("second")
    }
    console.log(isCmdK)
    if ((isEscape && document.body.classList.contains('modal-active')) || isCmdK) {
      toggleModal()
    }
  };
});

function toggleModal () {
  const body = document.querySelector('body')
  // const modal = document.querySelector('.modal')
  const modal = document.getElementById('search-modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}

// function openSearch() {
//   console.log("open modal");
//   let search_modal = document.getElementById('search-modal');
//   search_modal.classList.remove('hidden');
//   console.log(search_modal);
// }

function search() {
  let index = elasticlunr.Index.load(window.searchIndex);
}
