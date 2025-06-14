// Vars
const FORM_RESERVE = document.querySelector(".form-booking");
const BUTTON_RESERVE = document.querySelector("button[name='button-reserve']");

// Functions
const fetchSendReserve = (email, _sign) => {
  const time = 1000; // 1 segundo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "error@correo.com") {
        reject(
          new Error(
            "Hubo un error al enviar su reserva, vuelva a intentarlo más tarde."
          )
        );
        return;
      }
      resolve({
        message: `¡Muchas gracias por su reservación! se ha enviado el comprobante a ${email}.`,
      });
    }, time);
  });
};

const activeLoadingButton = () => {
  BUTTON_RESERVE.disabled = true;
  BUTTON_RESERVE.innerHTML = "Enviando...";
};

const disableLoadingButton = () => {
  BUTTON_RESERVE.disabled = false;
  BUTTON_RESERVE.innerHTML = "Reservar";
};

const handlerOnSubmit = (event) => {
  event.preventDefault();
  const NOTIFICATIONS_SDK = window["notificationsSDK"];
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const sign = formData.get("sign");
  activeLoadingButton();

  fetchSendReserve(email, sign)
    .then((response) => NOTIFICATIONS_SDK.push("success", response.message))
    .catch((error) => NOTIFICATIONS_SDK.push("error", error.message))
    .finally(() => disableLoadingButton());
};

// Listeners
FORM_RESERVE.addEventListener("submit", handlerOnSubmit);
