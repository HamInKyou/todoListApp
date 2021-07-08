const imges = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = imges[Math.floor(Math.random() * imges.length)]; //랜덤으로 이미지 고르기!

document.body.style.backgroundImage = `url(img/${chosenImage})`;
