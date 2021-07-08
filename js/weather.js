const API_KEY = "3dfc9f9c36383a6875c27edf1796ae87";

function onGeoOk(position) {
  //위치를 받는 데 성공했다면 인자로 user의 위치(Object형태)로 전달해줄 것이다.
  const latitude = position.coords.latitude; //위도를 받는다.
  const longitude = position.coords.longitude; //경도를 받는다.

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
  //JavaScript가 url로 요청을 했다!
  //fetch는 promise다.
  //promise? -> 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것
  //서버에 요청하고 응답이 올 때까지 기다렸다가 수행한다.
}
function onGeoError() {
  //위치를 받는 데 문제가 발생했을 때,
  //user가 위치 받는게 불가능하다면
  alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
