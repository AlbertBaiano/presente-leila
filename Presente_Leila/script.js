// Álbum de fotos da Leila.
// As legendas foram retiradas dos nomes originais dos arquivos, sem .jpg/.jpeg.
// Para adicionar/trocar uma foto: coloque o arquivo dentro de "fotos" e edite
// o caminho e a legenda de um item nesta lista.

const openButton = document.getElementById("openAlbum");

openButton.addEventListener("click", () => {
  document.querySelector(".message").scrollIntoView({
    behavior: "smooth"
  });
});

const fotos = [
  { arquivo: "fotos/foto-01.jpg", legenda: 'Boca parecendo cu kkk' },
  { arquivo: "fotos/foto-02.jpg", legenda: 'Como eu te enxergo' },
  { arquivo: "fotos/foto-03.jpeg", legenda: 'Depois de correr, fuder na chuva' },
  { arquivo: "fotos/foto-04.jpg", legenda: '🔥☀️🐆' },
  { arquivo: "fotos/foto-05.jpg", legenda: 'MINI LELÊ' },
  { arquivo: "fotos/foto-06.jpg", legenda: 'Nosso Album!!' },
  { arquivo: "fotos/foto-07.jpg", legenda: 'Nosso dia na UESB' },
  { arquivo: "fotos/foto-08.jpg", legenda: 'Nosso filho vadio' },
  { arquivo: "fotos/foto-09.jpg", legenda: 'Primeira vez de vc arrumando meu cabelo de verdade' },
  { arquivo: "fotos/foto-10.jpg", legenda: 'Só o mel' }
];

const albumGrid = document.getElementById("albumGrid");

fotos.forEach((foto, index) => {
  const card = document.createElement("article");
  card.className = `photo-card ${index % 2 === 0 ? "tilted-left" : "tilted-right"}${index > 1 ? " lower" : ""}`;

  const image = document.createElement("img");
  image.className = "photo-image";
  image.src = foto.arquivo;
  image.alt = foto.legenda;
  image.loading = "lazy";

  const tape = document.createElement("div");
  tape.className = "tape";
  tape.setAttribute("aria-hidden", "true");

  const caption = document.createElement("p");
  caption.textContent = foto.legenda;

  card.append(image, tape, caption);
  albumGrid.appendChild(card);
});


/* Música de fundo: tenta iniciar ao abrir o site; alguns navegadores exigem
   uma interação do visitante. O botão da capa também inicia/pausa a música. */
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const vinylDisc = document.getElementById("vinylDisc");
const musicStatus = document.getElementById("musicStatus");

function updateMusicState(isPlaying) {
  vinylDisc.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
  musicStatus.textContent = isPlaying ? "♫ Tocando agora" : "♫ Toque para ouvir";
}

async function playBackgroundMusic() {
  try {
    await backgroundMusic.play();
    updateMusicState(true);
  } catch (error) {
    updateMusicState(false);
  }
}

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    await playBackgroundMusic();
  } else {
    backgroundMusic.pause();
    updateMusicState(false);
  }
});

backgroundMusic.addEventListener("play", () => updateMusicState(true));
backgroundMusic.addEventListener("pause", () => updateMusicState(false));
window.addEventListener("load", () => {
  playBackgroundMusic();
});
