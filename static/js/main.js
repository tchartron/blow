document.addEventListener("DOMContentLoaded", function() {
  // ---------------- Selected Navbar Link -------------------------
  let navbar_links = document.querySelector('#nav-links').children;
  let current_location = window.location.href;
  let selected_navbar_link = [...navbar_links].find((item) => {
    return (item.href === current_location)
  })
  if (typeof selected_navbar_link !== 'undefined') {
    selected_navbar_link.className = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
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
