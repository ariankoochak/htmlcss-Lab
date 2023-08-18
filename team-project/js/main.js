window.addEventListener("scroll", () =>{

    if (window.scrollY >= 4355) {
        window.scrollTo(0,4345)
    }
});

const upBtn = document.getElementsByClassName("upper-btn")[0];
upBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})



const obj1 = document.getElementsByClassName("chIndex")[3];
const obj2 = document.getElementsByClassName("text-left")[0];
const obj3 = document.getElementsByClassName("small-square")[0];
const obj4 = document.getElementsByClassName("small-image")[0];
const obj5 = document.getElementsByClassName("small-left-text")[0];

window.addEventListener('mousemove',(e)=>{
        let mouseX = -(window.innerWidth - e.clientX) / 100;
        let mouseY = -(window.innerHeight - e.clientY) / 100;
        obj1.style.transform = `translate(${mouseX}px,${mouseY}px) rotate(45deg)`;
        obj2.style.transform = `translate(${-mouseX}px,${-mouseY}px) rotate(45deg)`;
        obj3.style.transform = `translate(${mouseX}px,${-mouseY}px) rotate(45deg)`;
        obj4.style.transform = `translate(${-mouseX}px,${-mouseY}px) rotate(45deg)`;
        obj5.style.transform = `translate(${-mouseX}px,${mouseY}px) rotate(45deg)`;
})