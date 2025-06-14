// Agregar fecha limite falsa
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const dateLimit = new Date(Date.now() + day);

function getTimes() {
  const now = new Date();
  const diff = dateLimit - now;

  if (diff <= 0)
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const format = (num) => String(num).padStart(2, "0");

  return {
    days: format(days),
    hours: format(hours),
    minutes: format(minutes),
    seconds: format(seconds),
  };
}

const updateCountdown = () => {
  const daysContainer = document.querySelector("#date-days");
  const hoursContainer = document.querySelector("#date-hours");
  const minutesContainer = document.querySelector("#date-minutes");
  const secondsContainer = document.querySelector("#date-seconds");
  const { days, hours, minutes, seconds } = getTimes();
  daysContainer.innerText = days;
  hoursContainer.innerText = hours;
  minutesContainer.innerText = minutes;
  secondsContainer.innerText = seconds;
};

function initDateCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

initDateCountdown();
