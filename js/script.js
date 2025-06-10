/* Start header */
let logo = document.querySelector("header > .container > .logo > img");
let container = document.querySelector("header > .container");

document.body.onscroll = () => {
  if (scrollY > 0) {
    logo.style.cssText = `transition: 0.3s height; height: 60px;`;
    container.style.cssText = `background-color: white;`;
  }
  if (scrollY === 0) {
    logo.style.cssText = `height: 77.5px;`;
    container.style.cssText = `background-color: transparent;`;
  }
};

let drawer = document.querySelector(".drawer");
let flex = true;

drawer.onclick = (event) => {
  if (flex) {
    document.querySelector(".container > ul").style.display = "flex";
    flex = !flex;
  } else {
    document.querySelector(".container > ul").style.display = "none";
    flex = !flex;
  }
  event.stopPropagation();
};

document.onclick = () => {
  if (!flex) {
    document.querySelector(".container > ul").style.display = "none";
    flex = !flex;
  }
};

/* End header */

/* Start Portfolio */
document.addEventListener("scroll", () => {
  const portfolioSection = document.querySelector(".portfolio .imgs");

  const rect = portfolioSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight) {
    document.querySelectorAll(".portfolio .imgs .box").forEach((box) => {
      box.classList.add("scale");
    });
  } else {
    document.querySelectorAll(".portfolio .imgs .box").forEach((box) => {
      box.classList.remove("scale");
    });
  }
});
/* End Portfolio */
