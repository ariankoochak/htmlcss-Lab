const texts = document.getElementsByClassName("text");

const btn = document.getElementById("btn");


const icons = document.querySelectorAll('a img');

document.body.style.backgroundColor = "white";

btn.addEventListener("click", () => {
    if (document.body.style.backgroundColor === 'white'){
        for (const text of texts) {
            text.style.color = "white";
        }
        for (const icon of icons){
            icon.classList.add('icon')
        }
    document.body.style.backgroundColor = 'black';
    btn.textContent = "Light Mode"
    }
    else{
        for (const text of texts) {
            text.style.color = "black";
        }
        for (const icon of icons) {
            icon.classList.remove("icon");
        }
        document.body.style.backgroundColor = "white";
        btn.textContent = "Dark Mode";
    }
});
