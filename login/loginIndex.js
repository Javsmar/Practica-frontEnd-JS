import { loaderController } from "../loader/loaderController.js";
import { loginController } from "./loginController.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');

    const loader = document.getElementById('loader');

    const {show, hide} = loaderController(loader);

    loginForm.addEventListener('startLoginUser', () => {
        show();
    });

    loginForm.addEventListener('finishLoginUser', () => {
        hide();
    })

    loginController(loginForm);

})

