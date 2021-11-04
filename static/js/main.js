document.addEventListener("DOMContentLoaded", function() {
    let navbar_links = document.querySelector('#nav-links').children;
    [...navbar_links].find((item) => { console.log(item.href.indexOf('/')) })
    navbar_links.find((item) => {
        (item.attr(''))
    });
    // for (let i = 0; i <= navbar_links.length; i++) {
    //     if (document.querySelector('#nav-links').children)
    // }
    console.log(navbar_links);
});

