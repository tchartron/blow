document.addEventListener("DOMContentLoaded", function() {
    let navbar_links = document.querySelector('#nav-links').children;
    let current_location = window.location.href;
    let selected_navbar_link = [...navbar_links].find((item) => {
        return (item.href === current_location)
    })
    selected_navbar_link.className = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    // for (let i = 0; i <= navbar_links.length; i++) {
    //     if (document.querySelector('#nav-links').children)
    // }
    console.log(selected_navbar_link);
});

