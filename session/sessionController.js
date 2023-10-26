import { buildUnauthorizedSession, buildAuthenticatedSession } from "./sessionView.js";

export const sessionController = (sessionNav) => {
    if(isUserLoggedIn()){
        sessionNav.innerHTML = buildAuthenticatedSession();
        
        const logoutButton = sessionNav.querySelector('button');
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token');

            sessionController(sessionNav);
        })
    }else{
        sessionNav.innerHTML = buildUnauthorizedSession();
    }
}


const isUserLoggedIn = () => {
    return localStorage.getItem('token')
}