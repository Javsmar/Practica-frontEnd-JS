import { buildNotification } from "./notificationsView.js";

export const notificationsController = (notifications) => {

    const showNotifications = (message, type) => {
        notifications.innerHTML = buildNotification(message, type);
        notifications.classList.add('notificationsAnuncio')
        setTimeout(() => {
            notifications.innerHTML = '';
        }, 3000)
    } 
    
    return showNotifications;
}