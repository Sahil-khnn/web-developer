// Typing Animation
var typed = new Typed(".typing", {
  strings: [" ", "Web Designer", "web Developer", "Youtuber"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}
