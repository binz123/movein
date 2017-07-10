//配置常量
const location_address = window.location.host;
if (location_address == "localhost:1234") {
  var OAB_URL = "http://www.easy-mock.com/mock/595f3bce9adc231f357acf92/api/mine";
}
export default {
  oaburl: OAB_URL
}
