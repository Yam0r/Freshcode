const COLORS = ["red", "yellow","green","blue", "orange"];
const menuContainer = document.querySelector('.container');
const items = document.querySelectorAll('.item');
let activeElement = menuContainer.querySelector('.active');

items.forEach((i, index) => {
    i.addEventListener("click", () => {
        if(activeElement == i) return;
        if(activeElement) activeElement.classList.remove("active");
        i.classList.add("active");
        document.body.style.backgroundColor = COLOR[index];
        activeElement = i;
    })
});

