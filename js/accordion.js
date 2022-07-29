const accordionHeaders = document.querySelectorAll(".accordion__header");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
