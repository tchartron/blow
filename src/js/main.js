document.addEventListener("DOMContentLoaded", function() {
  // ---------------- Selected Navbar Link -------------------------
  let navbar_links = document.querySelectorAll('.nav-links a');
  let current_location = window.location.href;
  let selected_navbar_link = [...navbar_links].filter((item) => {
    return (item.href === current_location)
  })
  if (typeof selected_navbar_link !== 'undefined') {
    if (Array.isArray(selected_navbar_link)) {
      for (let element of selected_navbar_link) {
        element.className = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      }
    } else {
      selected_navbar_link.className = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    }
  }

  // ---------------- Switch Theme -------------------------
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    document.getElementById('dark').classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark')
    document.getElementById('light').classList.add('hidden');
  }
  // Switch theme action
  document.getElementById('switch-theme').addEventListener('click', switchTheme);

  // ---------------- Toggle Sidebar -------------------------
  document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);

  // ---------------- Toggle Mobile menu -------------------------
  document.getElementById('toggle-mobile-menu').addEventListener('click', toggleMobileMenu);
});

function switchTheme() {
  let current_theme = ([...document.documentElement.classList].includes('dark')) ? 'dark' : 'light';
  if (current_theme === 'dark') {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('light').classList.add('hidden');
    document.getElementById('dark').classList.remove('hidden');
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('dark').classList.add('hidden');
    document.getElementById('light').classList.remove('hidden');
  }
}

function toggleSidebar() {
  let sidebar = document.getElementById('sidebar');
  if ([...sidebar.classList].includes('translate-x-0')) {
    document.body.style.removeProperty("overflow")
    sidebar.classList.remove('translate-x-0')
    sidebar.classList.add('-translate-x-full')
  } else {
    document.body.style.setProperty("overflow", "hidden")
    sidebar.classList.remove('-translate-x-full')
    sidebar.classList.add('translate-x-0')
  }
}

function toggleMobileMenu() {
  let menu = document.getElementById('mobile-menu');
  if ([...menu.classList].includes('translate-y-0')) {
    document.body.style.removeProperty("overflow")
    menu.classList.remove('translate-y-0')
    menu.classList.add('-translate-y-full')
  } else {
    document.body.style.setProperty("overflow", "hidden")
    menu.classList.remove('-translate-y-full')
    menu.classList.add('translate-y-0')
  }
}
