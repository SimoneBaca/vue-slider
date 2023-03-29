/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce*/

const { createApp } = Vue
  createApp({
    data() {
      return {
        activeImage: 5,
        movie: {
          titles: [
            "Marvel's Spiderman Miles Morale",
            "Ratchet & Clank: Rift Apart",
            "Fortnite",
            "Stray",
            "Marvel's Avengers",
          ],
          descriptions: [
            "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          ],
          images: [
            "img/01.webp",
            "img/02.webp",
            "img/03.webp",
            "img/04.webp",
            "img/05.webp",
          ],
        }
      }
    },
    mounted() {
      const myTimer = setInterval(() => {
      }, 3000);
    }
  }).mount('#app')