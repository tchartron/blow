document.addEventListener("DOMContentLoaded", function() {
  // ---------------- TOC Scrollspy --------------------
  const navbar_height = document.getElementById('navbar').clientHeight
  const table_of_content = document.getElementById('toc')
  const table_of_content_items = document.querySelectorAll('#toc li a')
  const page_content = document.getElementById('page-content')
  // const navSections = new Array($('.toc').length);
  // window.addEventListener('scroll', activeTocItem)

  // let has_one_active_toc = false
  let current_selected_toc = null
  const observer = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('observe')
      // Add 'active' class if observation target is inside viewport
      // console.log(entry.isIntersecting)
      // console.log(entry.intersectionRatio)
      if (entry.isIntersecting) {
        // has_one_active_toc = true
        console.log(entry, 'active')
        let res = findCorrespondingTocTitle(entry.target)
        if (typeof res !== 'undefined' && (current_selected_toc === null || current_selected_toc !== res)) {
          // console.log('here')
            if (current_selected_toc !== null) {
              // console.log(res)
              current_selected_toc.parentElement.classList.remove('bg-blue-800');
            }
            current_selected_toc = res
        }
        // console.log(res)
        res.parentElement.classList.add('bg-blue-800');
      } else {
        // has_one_active_toc = false
        // console.log(entry, 'inactive')
        // let res = findCorrespondingTocTitle(entry.target)
        // res.classList.remove('bg-blue-800');
      }
    })
  }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  })

  // const boxElList = document.querySelectorAll('.box');
  var nav_section_ids = [];
  [...table_of_content_items].forEach((item)=> {
    nav_section_ids.push(item.href.substring(item.href.indexOf("#")))
  })
  const nav_sections_list = document.querySelectorAll(nav_section_ids.join(','));
  nav_sections_list.forEach((el) => {
    observer.observe(el);
  })
});

function findCorrespondingTocTitle(section) {
  return [...document.querySelectorAll('#toc li a')].find((item) => {
    return item.href.substring(item.href.indexOf("#")) === `#${section.id}`
  })
}
