function onGeoOk(position) {
  //위치를 받는 데 성공했다면 인자로 user의 위치(Object형태)로 전달해줄 것이다.
  const latitude = position.coords.latitude; //위도를 받는다.
  const longitude = position.coords.longitude; //경도를 받는다.
}
function onGeoError() {
  //위치를 받는 데 문제가 발생했을 때,
  //user가 위치 받는게 불가능하다면
  alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
