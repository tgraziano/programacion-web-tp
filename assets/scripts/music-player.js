const TBODY = document.querySelector(".album-row-body");
const AUDIO_CONTROL = document.querySelector("#album-source");
const IMG_VINYL_CONTAINER = document.querySelector(".disk-vinyl-container");
const IMG_VINYL = document.querySelector(".disk-vinyl");
const TITLE_DETAIL = document.querySelector("#title-detail");

const rows = [
  {
    index: 1,
    title: "From Zero (Intro)",
    duration: "0:22",
    source: "/assets/audios/from-zero.mp3",
  },
  {
    index: 2,
    title: "The Emptiness Machine",
    duration: "3:10",
    source: "/assets/audios/the-emptiness-machine.mp3",
  },
  {
    index: 3,
    title: "Cut the Bridge",
    duration: "3:48",
    source: "/assets/audios/cut-the-bridge.mp3",
  },
  {
    index: 4,
    title: "Heavy Is the Crown",
    duration: "2:47",
    source: "/assets/audios/heavy-is-the-crown.mp3",
  },
  {
    index: 5,
    title: "Over Each Other",
    duration: "2:50",
    source: "/assets/audios/over-each-other.mp3",
  },
  {
    index: 6,
    title: "Casualty",
    duration: "2:20",
    source: "/assets/audios/casualty.mp3",
  },
  {
    index: 7,
    title: "Overflow",
    duration: "3:31",
    source: "/assets/audios/overflow.mp3",
  },
  {
    index: 8,
    title: "Two Faced",
    duration: "3:03",
    source: "/assets/audios/two-faced.mp3",
  },
  {
    index: 9,
    title: "Stained",
    duration: "3:05",
    source: "/assets/audios/stained.mp3",
  },
  {
    index: 10,
    title: "IGYEIH",
    duration: "3:29",
    source: "/assets/audios/igyeih.mp3",
  },
  {
    index: 11,
    title: "Good Things Go",
    duration: "3:29",
    source: "/assets/audios/good-things-go.mp3",
  },
];

const state = {
  current: -1,
  playing: false,
};

rows.map((row) => {
  const rowElement = document.createElement("tr");
  rowElement.classList.add("album-row");
  rowElement.innerHTML = `
    <td align="left" class="row-action row-text-gray">
      <span class="album-row-index">${row.index}</span>
      <button type="button" class="managment-record" data-audio="${row.index}">
        <img
          src="/assets/svgs/play.svg"
          width="17"
          height="20"
          alt="Play"
        />
      </button>
    </td>
    <td align="left">${row.title}</td>
    <td align="left" class="album-row-duration">${row.duration}</td>
  `;
  TBODY.appendChild(rowElement);
});

rows.map(({ index, source }) => {
  const BUTTON_ELEMENT = document.querySelector(
    `button[data-audio="${index}"]`
  );
  BUTTON_ELEMENT.addEventListener("click", () => {
    resetButtonsState();
    if (state.playing && state.current === index) {
      state.playing = false;
      AUDIO_CONTROL.pause();
      BUTTON_ELEMENT.innerHTML = `
        <img
          src="/assets/svgs/play.svg"
          width="17"
          height="20"
          alt="Play"
        />
      `;
    } else {
      state.current = index;
      state.playing = true;
      AUDIO_CONTROL.innerHTML = `<source src="${source}" type="audio/mpeg" />`;
      AUDIO_CONTROL.load();
      AUDIO_CONTROL.play();
      BUTTON_ELEMENT.innerHTML = `
        <img
          src="/assets/svgs/pause.svg"
          width="20"
          height="20"
          alt="Pause"
        />
      `;
    }
  });
});

const resetButtonsState = () => {
  const BUTTONS_MANAGEMENT = document.querySelectorAll(".managment-record");
  BUTTONS_MANAGEMENT.forEach((button) => {
    button.innerHTML = `
      <img
        src="/assets/svgs/play.svg"
        width="17"
        height="20"
        alt="Play"
      />
    `;
  });
};

AUDIO_CONTROL.onplay = () => {
  const BUTTON_ELEMENT = document.querySelector(
    `button[data-audio="${state.current}"]`
  );
  state.playing = true;
  BUTTON_ELEMENT.innerHTML = `
    <img
      src="/assets/svgs/pause.svg"
      width="20"
      height="20"
      alt="Pause"
    />
  `;
  IMG_VINYL_CONTAINER.classList.add("disk-vinyl-container-active");
  IMG_VINYL.classList.add("disk-vinyl-active");
  const row = rows.find((row) => row.index === state.current);
  TITLE_DETAIL.innerHTML = row.title;
};

AUDIO_CONTROL.onpause = () => {
  resetButtonsState();
  IMG_VINYL_CONTAINER.classList.remove("disk-vinyl-container-active");
  IMG_VINYL.classList.remove("disk-vinyl-active");
  TITLE_DETAIL.innerHTML = "";
};
