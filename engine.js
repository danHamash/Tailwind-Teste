
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
    menu.classList.add("right-4");
    menu.classList.add("h-[50vh]");
    menu.classList.add("w-full");
    menu.classList.add("gap-4");
    menu.classList.add("duration-200");
    menu.classList.add("text-center");
    menu.classList.add("pt-8");
    
  });
