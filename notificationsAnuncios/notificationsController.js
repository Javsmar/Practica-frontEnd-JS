import { buildNotification } from "./notificationsView.js";

export const notificationsController = (notifications) => {
    const showNotifications = (message) => {
        notifications.innerHTML = buildNotification(message);
        notifications.classList.add('notificationsAnuncio')
        setTimeout(() => {
            notifications.innerHTML = '';
        }, 3000)
    } 
    return showNotifications;
}