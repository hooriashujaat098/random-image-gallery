const imgContainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imgNum = 8;
  addNewImgs();
});

function addNewImgs() {
  for (let index = 0; index < imgNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
    imgContainerEl.appendChild(newImgEl);
  }
}
