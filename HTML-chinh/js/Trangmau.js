function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-navigation pull-right font-transform-inherit") {
        x.className += " responsive";
    } else {
        x.className = "header-navigation pull-right font-transform-inherit";
    }
}

function Chooselanguage() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}