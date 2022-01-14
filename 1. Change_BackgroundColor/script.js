const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const colors = [
  "orange",
  "gold",
  "green",
  "teal",
  "blue",
  "red",
  "purple",
  "salmon",
  "palevioletred",
  "thistle",
  "wheat",
  "whitesmoke",
  "yellow"
];

btn.style.backgroundColor = "#111";
body.style.backgroundColor = "violet";
btn.addEventListener("click", changeColor);

function changeColor() {
  const colorIndex = parseInt(Math.ceil(Math.random() * colors.length));
  body.style.backgroundColor = colors[colorIndex];
  // console.log(colorIndex);
}

// 컬러가 담긴 배열 인덱스를 랜덤으로 추출해주는 상수 만들기
// 배경컬러가 그 상수로 움직이도록.
// 랜덤값 중 같은 게 출력되는 건 어쩔 수 없는 듯.
// 이건 배열에 담는 것이 아니기 때문에 중복값들을 어떻게 처리할 수가 없나보다. 최대한 색깔 수를 많이 하는 수밖에 없나...
