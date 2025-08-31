document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".navbar .btn"); // bulb button
  const navbar = document.querySelector(".navbar");

  themeBtn.addEventListener("click", function () {
    navbar.classList.toggle("nav-colored");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".navbar .btn"); // lightbulb button
  const video = document.querySelector(".video-section video"); // background video

  // set two video sources (light mode / dark mode)
  const lightVideo = "assests/2792370-hd_1920_1080_30fps.mp4"; // your default
  const darkVideo = "assests/10back.mp4"; // replace with your new video

  let isLight = true; // track state

  themeBtn.addEventListener("click", function () {
    if (isLight) {
      video.querySelector("source").setAttribute("src", darkVideo);
    } else {
      video.querySelector("source").setAttribute("src", lightVideo);
    }

    // reload video after changing source
    video.load();
    video.play();

    // toggle state
    isLight = !isLight;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".navbar .btn"); // lightbulb button
  const backBodies = document.querySelectorAll(".prabal1 .back-body"); // all back-body inside prabal1

  themeBtn.addEventListener("click", function () {
    backBodies.forEach(function (el) {
      el.classList.toggle("prabal-colored");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".navbar .btn"); // light button
  const projectsSection = document.querySelector(".Projects"); // Projects section

  themeBtn.addEventListener("click", function () {
    projectsSection.classList.toggle("projects-colored");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".navbar .btn"); // lightbulb button
  const formSection = document.querySelector(".prabal-form"); // whole form section

  themeBtn.addEventListener("click", function () {
    formSection.classList.toggle("form-colored");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".navbar .btn"); // lightbulb button
  const footer = document.querySelector(".prabal-foot"); // footer

  themeBtn.addEventListener("click", function () {
    footer.classList.toggle("footer-light");
  });
});
