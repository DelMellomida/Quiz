document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.box img');

    menuItems.forEach(menu => {
        menu.addEventListener('click', () => {
            const desc = document.querySelector('.box .description');
            desc.style.visibility = "visible";
        })
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cancelBtn = document.querySelectorAll('.box .description .fa-solid fa-xmark');

    menuItems.forEach(menu => {
        menu.addEventListener('click', () => {
            const desc = document.querySelector('.box .description');
            desc.style.visibility = "visible";
        })
    });
});

var cartBtn = document.querySelector(".btnImage");

cartBtn.onclick = function(){
    var desc = document.getElementById(".description"); 
    desc.style.visibility = "visible";
}