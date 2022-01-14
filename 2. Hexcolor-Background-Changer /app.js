// (function () {
//   const button = document.querySelector("#btn");
//   const body = document.querySelector("body");
//   const hexValues = [
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//   ];
//   const value = document.querySelector("#hex-value");

//   button.addEventListener("click", changeHex);

//   function changeHex() {
//     let hex = "#";

//     for (let i = 0; i < 6; i++) {
//       const index = Math.floor(Math.random() * hexValues.length);
//       hex += hexValues[index];
//       console.log(index);
//       console.log(hex);
//     }
//     value.textContent = hex;
//     body.style.backgroundColor = hex;
//   }
// })();

const button = document.querySelector("#btn");
const body = document.querySelector("body");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const value = document.querySelector("#hex-value");

button.addEventListener("click", changeHex);

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index]; // 할당 연산자(더하기 할당) 이용하기
    // hex = hex + hexValues[index]
    // hex = #12
    // ... 이런식으로 6자리
    console.log(index);
    console.log(hex);
  }
  value.textContent = hex;
  body.style.backgroundColor = hex;
}
