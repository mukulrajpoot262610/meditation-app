const arrowBtn = document.getElementById("btn");
const userName = document.getElementById("name");
const userNameSpace = document.getElementById("user-name");
const welcomePage = document.getElementsByClassName("screen");
const mainPage = document.getElementsByClassName("screen-2");
const greeting = document.getElementById("salutation");
const para = document.getElementById("para");
var video = document.getElementById("video");
var min2 = document.getElementById("120");
var min4 = document.getElementById("240");
var min10 = document.getElementById("600");
var timerHead = document.getElementById("timer");
var timerBtn = document.getElementById("timers");
var source = document.createElement("source");
const music = document.getElementById("music");

arrowBtn.addEventListener("click", () => {
  welcomePage[0].style.display = "none";
  mainPage[0].style.display = "flex";
  if (userName.value === "") {
    userNameSpace.innerHTML = "Guest";
  } else {
    userNameSpace.innerHTML = userName.value;
  }
});

min2.addEventListener("click", () => {
  let counter = 0;
  timerBtn.style.visibility = "hidden";
  music.play();
  setInterval(() => {
    if (counter < 120) {
      timerHead.innerHTML = counter;
      counter += 1;
    }
    if (counter === 120) {
      music.pause();
      timerBtn.style.visibility = "unset";
      timerHead.innerHTML = "0";
    }
  }, 1000);
});

const timings = new Date(2021, 2, 21, 23).getHours();
console.log(timings);

min4.addEventListener("click", () => {
  let counter = 0;
  timerBtn.style.visibility = "hidden";
  music.play();
  setInterval(() => {
    if (counter < 240) {
      counter += 1;
      timerHead.innerHTML = counter;
    }
    if (counter === 240) {
      music.pause();
      timerBtn.style.visibility = "unset";
      timerHead.innerHTML = "";
    }
  }, 1000);
});

min10.addEventListener("click", () => {
  let counter = 0;
  timerBtn.style.visibility = "hidden";
  music.play();
  setInterval(() => {
    if (counter < 600) {
      counter += 1;
      timerHead.innerHTML = counter;
    }
    if (counter === 600) {
      music.pause();
      timerBtn.style.visibility = "unset";
      timerHead.innerHTML = "";
    }
  }, 1000);
});

if (timings >= 4 && timings <= 12) {
  greeting.innerHTML = "☕ Good Morning ☕";
  para.innerHTML = "We wish you have a good day";
  source.setAttribute("src", "./1.mp4");
  video.appendChild(source);
  music.setAttribute("src", "./1.mp3");
} else if (timings > 12 && timings <= 16) {
  source.setAttribute("src", "./2.mp4");
  video.appendChild(source);
  greeting.innerHTML = "🕑 Good Afternoon 🕑";
  music.setAttribute("src", "./2.mp3");
} else if (timings > 16 && timings <= 20) {
  greeting.innerHTML = "🌆 Good Evening 🌆";
  para.innerHTML = "We hope you are having a refreshing evening";
  source.setAttribute("src", "./3.mp4");
  video.appendChild(source);
  music.setAttribute("src", "./3.mp3");
} else if (timings > 20 && timings <= 24) {
  greeting.innerHTML = "😴 Good Night 😴";
  para.innerHTML = "Time to ride the rainbow to dreamland!";
  source.setAttribute("src", "./4.mp4");
  video.appendChild(source);
  music.setAttribute("src", "./4.mp3");
} else {
  greeting.innerHTML = "😴 Good Night 😴";
  para.innerHTML = "Time to ride the rainbow to dreamland!";
  source.setAttribute("src", "./4.mp4");
  music.setAttribute("src", "./4.mp3");
  video.appendChild(source);
}
