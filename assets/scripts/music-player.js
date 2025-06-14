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
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 20 20"
      version="1.1"
    >
      <title>multimedia / 14 - multimedia, stop icon, circle, button</title>
      <g
        id="Free-Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          transform="translate(-1117.000000, -378.000000)"
          id="Group"
          stroke="#FFF"
          stroke-width="2"
        >
          <g transform="translate(1115.000000, 376.000000)" id="Shape">
            <path
              d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z"
            ></path>
            <path
              d="M8,8.54627417 L8,15.4537258 C8,15.5986067 8.05755372,15.7375537 8.16,15.84 C8.26244628,15.9424463 8.40139325,16 8.54627417,16 L15.4537258,16 C15.5986067,16 15.7375537,15.9424463 15.84,15.84 C15.9424463,15.7375537 16,15.5986067 16,15.4537258 L16,8.54627417 C16,8.40139325 15.9424463,8.26244628 15.84,8.16 C15.7375537,8.05755372 15.5986067,8 15.4537258,8 L8.54627417,8 C8.40139325,8 8.26244628,8.05755372 8.16,8.16 C8.05755372,8.26244628 8,8.40139325 8,8.54627417 Z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
`;

const svgPlay = `
  <svg
    fill="#FFF"
    height="30px"
    width="30px"
    version="1.1"
    viewBox="0 0 60 60"
    >
    <g>
      <path
        d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
      />
      <path
        d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
      />
    </g>
  </svg>
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
