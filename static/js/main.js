document.addEventListener("DOMContentLoaded", function() {
    let navbar_links = document.querySelector('#nav-links').children;
    let current_location = window.location.href;
    let selected_navbar_link = [...navbar_links].find((item) => {
        (item.href === current_location)
    })
    // for (let i = 0; i <= navbar_links.length; i++) {
    //     if (document.querySelector('#nav-links').children)
    // }
    console.log(selected_navbar_link);
});

