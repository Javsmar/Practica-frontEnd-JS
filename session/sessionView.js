export const buildUnauthorizedSession = () => {
    return `
    <ul>
        <li>
            <a href="./login.html">login</a>
            <a href="./registerUser.html">registro</a>
        </li>
    </ul>
`
}

export const buildAuthenticatedSession = () => {
    return `
    <button>Cerrar sesión</button>
    `
}