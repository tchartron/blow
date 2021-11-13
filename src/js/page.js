document.addEventListener("DOMContentLoaded", function() {
  // ---------------- TOC Scrollspy --------------------
  if (document.getElementById('toc') !== null) {

    const table_of_content_links = document.querySelectorAll('#toc li a')

    let page_titles_ids = [];
    [...table_of_content_links].forEach((item)=> {
      page_titles_ids.push(item.href.substring(item.href.indexOf("#")))
    })
    const page_titles_elements = document.querySelectorAll(page_titles_ids.join(','));

    let reversed_title_elements = [...page_titles_elements].reverse();
    let elem = getActiveTocElement(reversed_title_elements) || page_titles_elements[0]; //If no element has gone outside of viewport on y axis
    findCorrespondingTocTitle(elem).classList.add('bg-blue-700') //page load
    var previous_elem = elem

    window.addEventListener('scroll', () => {
      let element = getActiveTocElement(reversed_title_elements) || page_titles_elements[0];

      if (element !== previous_elem) {
        findCorrespondingTocTitle(previous_elem).classList.remove('bg-blue-700')
        findCorrespondingTocTitle(element).classList.add('bg-blue-700')
        previous_elem = element
      }
    })
  }
});
function getActiveTocElement(elements) {
  return [...elements].find((item) => {
    return (item.getBoundingClientRect().y <= 0)
  })
}
function findCorrespondingTocTitle(element) {
  return [...document.querySelectorAll('#toc li a')].find((item) => {
    return item.href.substring(item.href.indexOf("#")) === `#${element.id}`
  })
}
