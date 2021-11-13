document.addEventListener("DOMContentLoaded", function() {
  // ---------------- TOC Scrollspy --------------------
  const navbar_height = document.getElementById('navbar').clientHeight
  const table_of_content = document.getElementById('toc')
  const page_content = document.getElementById('page-content')
  // const navSections = new Array($('.toc').length);
  window.addEventListener('scroll', activeTocItem)

  const observer = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Add 'active' class if observation target is inside viewport
      if (entry.intersectionRatio > 0) {
        console.log(entry, 'active')
        entry.target.classList.add('bg-blue-800');
      } else {
        console.log(entry, 'inactive')
        entry.target.classList.remove('bg-blue-800');
      }
    })
  }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  })

  // const boxElList = document.querySelectorAll('.box');
  var nav_sections = [];
  [...document.querySelectorAll('#toc li a')].forEach((item)=> {
    nav_sections.push(item.href.substring(item.href.indexOf("#")))
  })
  const list = document.querySelectorAll(nav_sections.join(','));
  list.forEach((el) => {
    observer.observe(el);
  })
  // console.log(nav_sections)

  // observer.observe(page_content);

  // tocItems.each(function (i) {
  //   let id = $(this).attr("id").substring(5);
  //   navSections[i] = document.getElementById(id);
  // })

  // function isVisible(tocIndex) {
  //   const current = navSections[tocIndex];
  //   const next = tocIndex < tocItems.length - 1 ? navSections[tocIndex + 1] : $("section.section").get(1);

  //   const c = current.getBoundingClientRect();
  //   const n = next.getBoundingClientRect();
  //   const h = (window.innerHeight || document.documentElement.clientHeight);

  //   return (c.top <= h) && (c.top + (n.top - c.top) - menuBarHeight >= 0);
  // }

  // function activateIfVisible() {
  //   for (b = true, i = 0; i < tocItems.length; i++) {
  //     if (b && isVisible(i)) {
  //       tocItems[i].classList.add('is-active');
  //       b = false;
  //     } else
  //       tocItems[i].classList.remove('is-active');
  //   }
  // }

  // var isTicking = null;
  // window.addEventListener('scroll', () => {
    // if (!isTicking) {
      // window.requestAnimationFrame(() => {
        // activateIfVisible();
      //   isTicking = false;
      // });
      // isTicking = true;
    // }
  // }, false);
});

function activeTocItem() {
  let scroll_position = window.scrollY
  console.log(scroll_position)
}
