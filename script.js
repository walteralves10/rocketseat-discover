function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "logo-light")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "logo-dark")
  }
}
