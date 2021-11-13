document.addEventListener("DOMContentLoaded", function() {
  // ---------------- TOC Scrollspy --------------------
  const navbar_height = document.getElementById('navbar').clientHeight
  const table_of_content = document.getElementById('toc')
  var scroll_position = window.scrollY
  // const navSections = new Array($('.toc').length);
  window.addEventListener('scroll', activeTocItem)

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
  console.log(scroll_position)
}
