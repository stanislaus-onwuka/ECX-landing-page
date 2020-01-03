const Mission = document.querySelector(".vision-list1")
const Vision = document.querySelector(".vision-list2")
const Philosophy = document.querySelector(".vision-list3")


const MissionC = document.querySelector(".content-container1")
const VisionC = document.querySelector(".content-container2")
const PhilosophyC = document.querySelector(".content-container3")

Mission.addEventListener("click",missionFn)

function missionFn() {
    // console.log("xup")
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
    // console.log("xup2")
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
    // console.log("xup3")
    MissionC.classList.add("no-display");
    PhilosophyC.classList.add("yes-display");
    PhilosophyC.classList.remove("no-display");
    VisionC.classList.add("no-display");
    Mission.classList.remove("active1");
    Vision.classList.remove("active1");
    Philosophy.classList.add("active1");
}

const navC = document.querySelector(".container2");
var previousScroll = window.scrollY;
window.addEventListener("scroll", scrollFn);

function scrollFn() {
    if (window.scrollY < previousScroll) {
        console.log("going up")
        navC.classList.remove("nav-down")
        navC.classList.add("nav-up")
    } else if (window.scrollY > previousScroll) {
        console.log("going down")
        navC.classList.add("nav-down")
        navC.classList.remove("nav-up")
    } else {
        navC.classList.add("nav-up")
    }
    previousScroll = window.scrollY;
}

const menu = document.querySelector(".hidden-menu");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");


const show = function () {
    nav.classList.toggle("sample");
    menu.querySelector(".span2").classList.toggle("spanTrans")
    body.classList.toggle("overflow-for-body")
}


menu.addEventListener("click", show)
