const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); //현재 시간정보 불러오기
  //시간을 불러왔는데, 2자리 맞추기 위해 padStart사용
  //padStart는 number에 쓸 수 없기 때문에 String()으로 감싸서 string으로 바꿈
  //2자리를 맞추기 위해, 앞에 0으로 채워준다!
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //setInterval이 1초 이후에 실행되니까, 페이지 로드 되었을 때 먼저 바로 실행되게!
setInterval(getClock, 1000); //1초마다 시간정보를 새로 받는다!
