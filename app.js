// const fullImg = document.querySelector(".full-img");
// const smallImg = document.querySelectorAll(".gallery img");
// const modal = document.querySelector(".modal");

// // console.log(smallImg);
// smallImg.forEach(function (img) {
//   img.addEventListener("click", function () {
//     modal.classList.add("open");
//     fullImg.classList.add("open");

//     // Changin' the images dynamically
//     const originalQuality = img.getAttribute("alt");
//     fullImg.src = `img/full/${originalQuality}.jpg`;
//   });
// });

// modal.addEventListener("click", function (e) {
//   if (e.target.classList.contains("modal")) {
//     modal.classList.remove("open");
//     fullImg.classList.remove("open");
//   }
// });

// Receive without pride; let go without attachment

// Marcus Aurelius

const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img"); // don't forget to select them all
const modal = document.querySelector(".modal");

console.log(smallImg);

smallImg.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
  });
});
