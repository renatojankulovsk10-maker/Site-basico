function foto1() {
  let imagem = document.querySelector(".foto1");

  const imagemOriginal = "Imagens/capa 1.jpeg";
  const imagemAlternativa = "Imagens/1.jpg";

  let nomeAtual = imagem.src.split("/").pop();

  if (nomeAtual === "1.jpg") {
    imagem.src = imagemOriginal;
  } else {
    imagem.src = imagemAlternativa;
  }
}
function foto2() {
    let imagem = document.querySelector(".foto2")

    const imagemOriginal = "Imagens/segundo lugar.jpeg"
    const imagemAlternativa = "Imagens/2.jpg"

    let nomeAtual = imagem.src.split("/").pop();

    if (nomeAtual === "2.jpg") {
        imagem.src = imagemOriginal;
    } else {
        imagem.src = imagemAlternativa;
    }
    
}
function foto3() {
    const container = document.getElementById("media3");
    const elementoAtual = container.querySelector(".foto3, video");

    if (elementoAtual.tagName === "IMG") {
        container.innerHTML = `
      <video class="video3" width="200" heigth="200" autoplay muted onclick="foto3()">
        <source src="Videos/3.mp4" type="video/mp4">
        Seu navegador não suporta vídeo.
      </video> `;
    } else {
        container.innerHTML = `
      <img class="foto3" src="Imagens/3 lugar.jpeg" width="300" onclick="foto3()" />
    `;
    }
    
}