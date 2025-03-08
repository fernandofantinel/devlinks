function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Fernando Fantinel sorrindo usando óculos de sol, alargadores pretos, camiseta preta e barba em fundo roxo e azul com degradê."
    )
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de Fernando Fantinel sorrindo usando óculos de grau, alargadores pretos, camiseta preta e barba em fundo amarelo."
    )
  }
}
