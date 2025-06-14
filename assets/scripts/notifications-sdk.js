const notifications = {};

const generateId = () => {
  return Date.now().toString(36);
};

const listElement = () => {
  const list = document.createElement("ul");
  list.classList.add("notifications-list");
  return list;
};

const itemElement = (id, content) => {
  const item = document.createElement("li");
  item.id = id;
  item.innerHTML = content;
  return item;
};

const showSuccessNotification = (message) => {
  const item = itemElement(
    generateId(),
    `<img src="/assets/svgs/alert-success.svg" alt="Alert Success" width="40" height="40" /> ${message}`
  );
  return item;
};

const showErrorNotification = (message) => {
  const item = itemElement(
    generateId(),
    `<img src="/assets/svgs/alert-error.svg" alt="Alert error" width="40" height="40" /> ${message}`
  );
  return item;
};

notifications.init = () => {
  const list = listElement();
  document.body.appendChild(list);
};

notifications.push = (type, message) => {
  const list = document.querySelector(".notifications-list");
  const item =
    type === "success"
      ? showSuccessNotification(message)
      : showErrorNotification(message);
  list.appendChild(item);
  const time = 3000; // 3 segundos
  setTimeout(() => {
    item.remove();
  }, time);
};

window["notificationsSDK"] = notifications;
