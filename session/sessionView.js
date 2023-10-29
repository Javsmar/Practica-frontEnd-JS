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
    <a href="./anuncioscreation.html">create anuncio</a>
    <button>Cerrar sesión</button>
    `
}