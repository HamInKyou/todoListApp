const imges = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = imges[Math.floor(Math.random() * imges.length)]; //랜덤으로 이미지 고르기!

const bgImage = document.createElement("img"); //img 요소(태그)를 생성한다. -> 생성만 해두고 어디에도 배치하지 않았다.
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //위에서 생성한 img요소를 body안 맨 뒤에 배치한다!
