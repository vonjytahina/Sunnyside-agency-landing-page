const hamburgerButton = document.querySelector('.hamburger-button')
const mobileMenu = document.querySelector('.mobile-menu')

// toggle mobile menu display
hamburgerButton.onclick = () => {
  if(!mobileMenu.classList.contains("show-mobile-menu")) {
    mobileMenu.classList.add("show-mobile-menu")
    mobileMenu.classList.remove("hide-mobile-menu")
  } else if (mobileMenu.classList.contains("show-mobile-menu")) {
    mobileMenu.classList.remove("show-mobile-menu")
    mobileMenu.classList.add("hide-mobile-menu")
  }
}