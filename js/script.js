

const Mission = document.querySelector(".vision-list1")
const Vision = document.querySelector(".vision-list2")
const Philosophy = document.querySelector(".vision-list3")


const MissionC = document.querySelector(".content-container1")
const VisionC = document.querySelector(".content-container2")
const PhilosophyC = document.querySelector(".content-container3")

Mission.addEventListener("click",missionFn)

function missionFn() {
    console.log("xup")
    MissionC.classList.add("yes-display");
    MissionC.classList.remove("no-display");
    PhilosophyC.classList.add("no-display");
    VisionC.classList.add("no-display");
    Mission.classList.add("active1");
    Vision.classList.remove("active1");
    Philosophy.classList.remove("active1")
}

Vision.addEventListener("click", visionFn)

function visionFn() {
    console.log("xup2")
    MissionC.classList.add("no-display");
    PhilosophyC.classList.add("no-display");
    VisionC.classList.add("yes-display");
    VisionC.classList.remove("no-display");
    Mission.classList.remove("active1");
    Vision.classList.add("active1");
    Philosophy.classList.remove("active1")
}

Philosophy.addEventListener("click", philoFn)

function philoFn() {
    console.log("xup3")
    MissionC.classList.add("no-display");
    PhilosophyC.classList.add("yes-display");
    PhilosophyC.classList.remove("no-display");
    VisionC.classList.add("no-display");
    Mission.classList.remove("active1");
    Vision.classList.remove("active1");
    Philosophy.classList.add("active1");
}

// const imgSlide = document.querySelector('.slide');
// const images = ['"./images/Achievements slides/Totel_Photography-6587.jpg"','"./images/Achievements slides/Totel_Photography-6634.jpg"','"./images/Achievements slides/Totel_Photography-6772.jpg"','"./images/Achievements slides/Totel_Photography-6915.jpg"'];


// let x = 0;

// function slider() {
//     if (x < images.length){
//         x = x + 1;
//     }else{
//         x = 1;
//     }
//     imgSlide.innerHTML = "<img src="+images[x-1]+" class = slide-img>";
// }

// setInterval(slider, 2000);
const navC = document.querySelector(".container2")
var previousScroll = window.scrollY;
window.addEventListener("scroll", scrollFn);

function scrollFn() {
    if (window.scrollY < previousScroll) {
        console.log("going up")
        navC.classList.add("nav-down")
    } else {
        console.log("going down")
        navC.classList.remove("nav-down")
    }
    previousScroll = window.scrollY;
    console.log(previousScroll)
}

const menu = document.querySelector(".hidden-menu");
const nav = document.querySelector(".nav")

const show = function () {
    console.log("welp")
    nav.classList.toggle("sample");
    // menu.querySelector(".span2").classList.toggle("spanDel");
    menu.querySelector(".span2").classList.toggle("spanTrans")
}


menu.addEventListener("click", show)
