// DOM Elements
const audioPlayer = document.querySelector("#album-audio");
const buttonPlayFromZero = document.querySelector(
  "button[name='play-from-zero']"
);
const buttonCutTheBridge = document.querySelector(
  "button[name='play-cut-the-bridge']"
);
const buttonCasualty = document.querySelector("button[name='play-casualty']");
const buttonGoodThingsGo = document.querySelector(
  "button[name='play-good-things-go']"
);
const buttonHeavyIsTheCrown = document.querySelector(
  "button[name='play-heavy-is-the-crown']"
);
const buttonIgyeih = document.querySelector("button[name='play-igyeih']");
const buttonOverEachOther = document.querySelector(
  "button[name='play-over-each-other']"
);
const buttonOverflow = document.querySelector("button[name='play-overflow']");
const buttonStained = document.querySelector("button[name='play-stained']");
const buttonTheEmptinessMachine = document.querySelector(
  "button[name='play-the-emptiness-machine']"
);
const buttonTwoFaced = document.querySelector("button[name='play-two-faced']");
const imgVinyl = document.querySelector(".img-vinyl");

// Global vars
const songs = {
  fromZero: "/assets/audios/from-zero.mp3",
  casualty: "/assets/audios/casualty.mp3",
  cutTheBridge: "/assets/audios/cut-the-bridge.mp3",
  goodThingsGo: "/assets/audios/good-things-go.mp3",
  heavyIsTheCrown: "/assets/audios/heavy-is-the-crown.mp3",
  igyeih: "/assets/audios/igyeih.mp3",
  overEachOther: "/assets/audios/over-each-other.mp3",
  overflow: "/assets/audios/overflow.mp3",
  stained: "/assets/audios/stained.mp3",
  theEmptinessMachine: "/assets/audios/the-emptiness-machine.mp3",
  twoFaced: "/assets/audios/two-faced.mp3",
};

const svgStop = `
  <img
    src="/assets/svgs/pause.svg"
    alt="Pause"
    width="21"
    height="23"
  />
`;

const svgPlay = `
  <img
    src="/assets/svgs/play.svg"
    alt="Play"
    width="20"
    height="23"
  />
`;

// Functions
const changeToPauseIcon = () => {
  buttonPlayFromZero.innerHTML = svgStop;
  buttonCutTheBridge.innerHTML = svgStop;
  buttonCasualty.innerHTML = svgStop;
  buttonGoodThingsGo.innerHTML = svgStop;
  buttonHeavyIsTheCrown.innerHTML = svgStop;
  buttonIgyeih.innerHTML = svgStop;
  buttonOverEachOther.innerHTML = svgStop;
  buttonOverflow.innerHTML = svgStop;
  buttonStained.innerHTML = svgStop;
  buttonTheEmptinessMachine.innerHTML = svgStop;
  buttonTwoFaced.innerHTML = svgStop;
};

const isPlaying = () =>
  !audioPlayer.paused && !audioPlayer.ended && audioPlayer.readyState > 2;

const managmentSong = (key) => {
  if (isPlaying()) {
    audioPlayer.pause();
    imgVinyl.classList.remove("img-vinyl-active");
    return;
  }
  audioPlayer.src = songs[key];
  audioPlayer.volume = 0.05;
  changeToPauseIcon();
  imgVinyl.classList.add("img-vinyl-active");
  audioPlayer.load();
  audioPlayer.play();
};

// DOM Events
buttonPlayFromZero.addEventListener("click", () => managmentSong("fromZero"));
buttonCutTheBridge.addEventListener("click", () =>
  managmentSong("cutTheBridge")
);
buttonCasualty.addEventListener("click", () => managmentSong("casualty"));
buttonGoodThingsGo.addEventListener("click", () =>
  managmentSong("goodThingsGo")
);
buttonHeavyIsTheCrown.addEventListener("click", () =>
  managmentSong("heavyIsTheCrown")
);
buttonIgyeih.addEventListener("click", () => managmentSong("igyeih"));
buttonOverEachOther.addEventListener("click", () =>
  managmentSong("overEachOther")
);
buttonOverflow.addEventListener("click", () => managmentSong("overflow"));
buttonStained.addEventListener("click", () => managmentSong("stained"));
buttonTheEmptinessMachine.addEventListener("click", () =>
  managmentSong("theEmptinessMachine")
);
buttonTwoFaced.addEventListener("click", () => managmentSong("twoFaced"));

audioPlayer.addEventListener("ended", () => {
  imgVinyl.classList.remove("img-vinyl-active");
  buttonPlayFromZero.innerHTML = svgPlay;
  buttonCutTheBridge.innerHTML = svgPlay;
  buttonCasualty.innerHTML = svgPlay;
  buttonGoodThingsGo.innerHTML = svgPlay;
  buttonHeavyIsTheCrown.innerHTML = svgPlay;
  buttonIgyeih.innerHTML = svgPlay;
  buttonOverEachOther.innerHTML = svgPlay;
  buttonOverflow.innerHTML = svgPlay;
  buttonStained.innerHTML = svgPlay;
  buttonTheEmptinessMachine.innerHTML = svgPlay;
  buttonTwoFaced.innerHTML = svgPlay;
});

audioPlayer.addEventListener("pause", () => {
  imgVinyl.classList.remove("img-vinyl-active");
  buttonPlayFromZero.innerHTML = svgPlay;
  buttonCutTheBridge.innerHTML = svgPlay;
  buttonCasualty.innerHTML = svgPlay;
  buttonGoodThingsGo.innerHTML = svgPlay;
  buttonHeavyIsTheCrown.innerHTML = svgPlay;
  buttonIgyeih.innerHTML = svgPlay;
  buttonOverEachOther.innerHTML = svgPlay;
  buttonOverflow.innerHTML = svgPlay;
  buttonStained.innerHTML = svgPlay;
  buttonTheEmptinessMachine.innerHTML = svgPlay;
  buttonTwoFaced.innerHTML = svgPlay;
});
