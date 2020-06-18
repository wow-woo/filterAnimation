const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  console.log(e.pageX);
  console.log(e.pageY);
});

window.addEventListener("click", () => {
  cursor.classList.add("cursor-fade-out");
  setTimeout(() => {
    cursor.classList.remove("cursor-fade-out");
  }, 500);
});
