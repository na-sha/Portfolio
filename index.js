
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const logo = document.querySelector(".logo")

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

logo.onclick = function () {
    location.href = "./index.html";
};
let progress = document.querySelector("progress");
let counter = 0;

setInterval(() => {
    if (counter === 60) {
        clearInterval;
    } else {
        counter += 1;
        progress.innerHTML = progress + "%";
    }

}, 25)

// retrieve the element
"use strict";
element = document.getElementById("frontend-tab");
circlebar = document.getElementById("circle-bar");

// reset the transition by...
element.addEventListener("click", function (e) {
    e.preventDefault;

    // -> removing the class
    circlebar.classList.remove("circle");

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void circlebar.offsetWidth;

    // -> and re-adding the class
    circlebar.classList.add("circle");
}, false);
