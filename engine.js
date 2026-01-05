
  const btn = document.querySelector("button");
  const menu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.add("flex");
    menu.classList.add("flex-col");
    menu.classList.add("items-center");
    menu.classList.add("z-50");
    menu.classList.add("bg-nav")
    menu.classList.add("absolute");
    menu.classList.add("top-0");
    menu.classList.add("right-0");
    menu.classList.add("h-[50vh]");
    menu.classList.add("w-full");
    menu.classList.add("gap-4");
    menu.classList.add("duration-200");
    menu.classList.add("text-center");
    menu.classList.add("pt-8");
    
  });

  const carousel = document.getElementById("teamCarousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const total = carousel.children.length;

  let index = 0;

  function isMobile() {
    return window.innerWidth < 1024;
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    index = (index + 1) % total;
    updateCarousel();
  }

  function prev() {
    index = (index - 1 + total) % total;
    updateCarousel();
  }

  nextBtn.addEventListener("click", () => {
    if (isMobile()) next();
  });

  prevBtn.addEventListener("click", () => {
    if (isMobile()) prev();
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      carousel.style.transform = "translateX(0)";
      index = 0;
    }
  });
