const buttonHover = document.querySelector(".btn-hover");
const buttonArrow = document.querySelector(".btn-arrow");

document.addEventListener("mouseover", () => {
  buttonHover.classList.toggle("btnHover--purple");
  buttonArrow.classList.toggle("btnArrow--black");
});
