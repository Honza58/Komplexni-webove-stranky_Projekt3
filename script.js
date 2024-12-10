const body = document.querySelector("body");
const underMain = document.querySelector(".undermain");
const menuIcon = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossMenu = document.querySelector(".cross-menu");
const hamburgerMenuLight = document.querySelector(".hamburger-menu-light");
const navigation = document.querySelector("nav");
const Modes = document.querySelector(".modes");
const modeLight = document.querySelector(".mode-light");
const modeDark = document.querySelector(".mode-dark");
const darkTheme = document.querySelector(".dark-theme");
const paragraph = document.querySelector(".paragraph");
const paragraphLight = document.querySelector(".paragraph-light");
const images = document.querySelector(".pictures");
const arrowUp = document.querySelector(".arrow-up-big");
const pictures = document.querySelectorAll(".picture");



// přepínání dark-light módů
Modes.addEventListener("click", () => {
  if (modeLight.style.display !== "none") {
    modeLight.style.display = "none";
    modeDark.style.display = "block";
    hamburgerMenuLight.style.display = "none";
    hamburgerMenu.style.display = "block";
  } else {
    modeLight.style.display = "block";
    modeDark.style.display = "none";
    hamburgerMenuLight.style.display = "block";
    hamburgerMenu.style.display = "none";
    underMain.style.borderBottom = "block";
  }
  document.body.classList.toggle("dark-theme"); // Přepnutí režimu vždy při kliknutí
});


// otevření a zavření nabídky menu(nav) při dark anebo light theme
let menuOpen = false;

menuIcon.addEventListener("click", () => {
  if (!menuOpen) {
    hamburgerMenu.classList.add("hidden");
    hamburgerMenuLight.classList.add("hidden");
    crossMenu.classList.add("visible");
    navigation.classList.add("visible");
    menuOpen = true;
  } else {
    hamburgerMenu.classList.add("visible");
    hamburgerMenuLight.classList.add("visible");
    crossMenu.classList.remove("visible");
    navigation.classList.remove("visible");
    menuOpen = false;
  }
});


// kliknutí na šipku a posun stránky nahoru
arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// obrázky po najetí kurzoru myši
pictures.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.35)";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});


// kontrola emailu, hesla
const form = document.querySelector(".form");
let email1 = document.querySelector(".email1");
let email2 = document.querySelector(".email2");
let password1 = document.querySelector(".password1");
let password2 = document.querySelector(".password2");
let emailNotification1 = document.querySelector(".emailNotification1");
let passwordNotification1 = document.querySelector(".passwordNotification1");
let passwordNotification3 = document.querySelector(".passwordNotification3");
let input = document.querySelectorAll(".input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  valid = true;

  if (email1.value.trim() === "" || email2.value.trim() === "") {
    emailNotification1.style.display = "block";
    valid = false;
  } else {
    email1.value = "";
    email2.value = "";
    emailNotification1.style.display = "none";
    input.forEach((input) => {
      input.value = "";
    })
  }
  // shoda hesel
  if (password1.value.trim() === "" || password2.value.trim() === "") {
    passwordNotification1.style.display = "block";
    valid = false;
  } else if (password1.value.trim() !== password2.value.trim()) {
    password1.value = "";
    password2.value = "";
    passwordNotification3.style.display = "block";
    valid = false;
  } else if (password1.value.trim() === password2.value.trim()) {
    password1.value = "";
    password2.value = "";
    passwordNotification1.style.display = "none";
    passwordNotification3.style.display = "none";
    valid = false;
  } else {
    input.value = "";
  }
});


// šipka scroll
const bigArrow = document.querySelector(".arrow-up-big");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    bigArrow.style.display = "block";
  } else {
    bigArrow.style.display = "none";
  }
});
bigArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// Menu - rozjíždění podtržení
const menuLi = document.querySelectorAll(".menuli");

menuLi.forEach((eLi) => {
  const line = eLi.querySelector(".line");
  const ironFurnitureLine = eLi.querySelector(".ironFurnitureLine");
  const nightTableLine = eLi.querySelector(".nightTableLine");
  const introduction = eLi.querySelector(".introduction");

  if (line) {
    eLi.addEventListener("mouseenter", () => {
      line.style.width = "80px";
    });
    eLi.addEventListener("mouseleave", () => {
      line.style.width = "0";
    });
  } else if (introduction) {
    eLi.addEventListener("mouseenter", () => {
      introduction.style.width = "25%";
    });
    eLi.addEventListener("mouseleave", () => {
      introduction.style.width = "0";
    });
  } else if (nightTableLine) {
    eLi.addEventListener("mouseenter", () => {
      nightTableLine.style.width = "50%";
    });
    eLi.addEventListener("mouseleave", () => {
      nightTableLine.style.width = "0";
    });
  } else if (ironFurnitureLine) {
    eLi.addEventListener("mouseenter", () => {
      ironFurnitureLine.style.width = "83%";
    });
    eLi.addEventListener("mouseleave", () => {
      ironFurnitureLine.style.width = "0";
    });
  }
});
