const api = 'https://programming-quotes-api.herokuapp.com';
const timeId = "author";
const dateId = "quote";
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const consoleGreeting = "Hello World! - from popup_script.js";

function setTimeAndDate(timeElement, dateElement) {
  let date = new Date();
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  const time = date.getHours() + ":" + minutes;
  //In "date.getMonth", 0 indicates the first month of the year
  //In "date.getDay", 0 represents Sunday
  date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
  timeElement.innerHTML = time;
  dateElement.innerHTML = date;
}

console.log(consoleGreeting);

document.addEventListener("DOMContentLoaded",function(dcle) {
  let timeElement = document.getElementById(timeId);
  let dateElement = document.getElementById(dateId);
  setTimeAndDate(timeElement,dateElement);
  makeRequest(`${api}/quotes/random`, 'GET', xhr => {
    console.log(xhr);
    if (xhr.readyState == 4) {
      document.getElementById("quote").innerHTML = xhr.responseText;
    } else {
      document.getElementById("quote").innerHTML = xhr.readyState;
    }
  });
});


const makeRequest = (url, method = "GET", callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = callback;
  xhr.send();
}