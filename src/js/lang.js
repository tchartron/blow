document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('switch-lang').addEventListener('click', switchLang);
})

function switchLang(event) {
    console.log(event)
    document.getElementById('switch-lang-panel').classList.toggle('hidden')
}
