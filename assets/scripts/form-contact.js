// Vars
const FORM_CONTACT = document.querySelector(".form-contact");
const BUTTON_CONTACT = document.querySelector("button[name='button-contact']");

// Functions
const fetchSendReserve = (email) => {
  const time = 1000; // 1 segundo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "error@correo.com") {
        reject(
          new Error(
            "Hubo un error al enviar su mensaje, vuelva a intentarlo más tarde."
          )
        );
        return;
      }
      resolve({
        message: `¡Muchas gracias por contactarnos! le responderemos a ${email}.`,
      });
    }, time);
  });
};

const activeLoadingButton = () => {
  BUTTON_CONTACT.disabled = true;
  BUTTON_CONTACT.innerHTML = "Enviando...";
};

const disableLoadingButton = () => {
  BUTTON_CONTACT.disabled = false;
  BUTTON_CONTACT.innerHTML = "Enviar";
};

const handlerOnSubmit = (event) => {
  event.preventDefault();
  const NOTIFICATIONS_SDK = window["notificationsSDK"];
  const formData = new FormData(event.target);
  const email = formData.get("email");
  activeLoadingButton();

  fetchSendReserve(email)
    .then((response) => NOTIFICATIONS_SDK.push("success", response.message))
    .catch((error) => NOTIFICATIONS_SDK.push("error", error.message))
    .finally(() => disableLoadingButton());
};

// Listeners
FORM_CONTACT.addEventListener("submit", handlerOnSubmit);
