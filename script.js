function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
        img.setAttribute('src', "./assets/avatar-light.png")
  } else {
   img.setAttribute("src", "./assets/avatar.png")
  }  
    //Mensagem alt - feita por mim //
      if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto do professô, dark mode")
  } else {
    img.setAttribute("alt", "Foto do professô, de oculos e camisa preta")
  }  
}