const body = document.querySelector("body")

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    body.appendChild(notification);
};



export const handleNewUser = ({nickname}) => {
  fireNotification(`${nickname} Joined`, "rgb(88, 86, 214)")  
}

export const handleDisconnected = ({nickname}) => {
  fireNotification(`${nickname} Lefted`, "rgb(255, 59, 48)")
}