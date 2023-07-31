console.log("hi");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let mastersong = document.getElementById("mastersong");

let songs = [
  { songName: "tum hi ho", filePath: "1.mp3", cover: "1.jpg" },
  { songName: "Asan nahi Yaha", filePath: "2.mp3", cover: "1.jpg" },
  { songName: "MilneHai Mujhse ", filePath: "3.mp3", cover: "1.jpg" },
  { songName: "ChahuMai YaNa", filePath: "4.mp3", cover: "1.jpg" },
  { songName: "kesariya", filePath: "5.mp3", cover: "1.jpg" },
  { songName: "Tu Mera Koi", filePath: "6.mp3", cover: "1.jpg" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});
songitem.forEach((element, i) => {
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");

      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target.id);
      makeallplays();
      mastersong.innerText = songs[songIndex].songName;
      songIndex = parseInt(e.target.id)
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src =`${songIndex}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{songIndex += 1;
    }
    audioElement.src =`${songIndex}.mp3`;
    mastersong.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{songIndex -= 1;
    }
    audioElement.src =`${songIndex}.mp3`;
    mastersong.innerText = songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})