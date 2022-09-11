// Typing Animation
var typed = new Typed(".typing", {
  strings: [
    " ",
    "Web Designer",
    "web Developer",
    "Youtuber",
    "Graphic Designer",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  console.log(navList[i]);
}
