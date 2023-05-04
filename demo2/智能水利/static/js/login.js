// let frameWidth = 0;
// let frameHeight = 0;
// // let width = 1920;
// // let height = 932;
// const frame = document.querySelector("bsd-frame");
// window.onload = function () {
//   function setSize() {
//     this.frameWidth = this.width || screen.width;
//     this.frameHeight = this.height || screen.height;
//     const frame = document.querySelector(".bsd-frame");
//     frame.style.width = this.frameWidth + "px";
//     frame.style.height = this.frameHeight + "px";
//   }
//   function setScale() {
//     console.log(11);
//     const bodyWidth = document.body.clientWidth;
//     const bodyHeight = document.body.clientHeight;
//     console.log(bodyWidth, bodyHeight);
//     const scaleX = bodyWidth / this.frameWidth;
//     const scaleY = bodyHeight / this.frameHeight;
//     const frame = document.querySelector(".bsd-frame");
//     frame.style.transform = `scale(${scaleX},${scaleY})`;
//   }
//   setSize();
//   setScale();
//   window.addEventListener("resize", setScale);
// };

let btn = document.getElementById("btn");
btn.onclick = function () {
  console.log(111);
  window.location.href = "./index.html";
};
