import DropDownMenu from "./DropDownMenu.jsx";

const NavBar = (iniciarJuego, reiniciarJuego, setTamañoTablero, setCantJugadores, partidaEnCurso, puntajes, turno) => {

    const cantidadDeJugadores = [{etiqueta: "1 Jugador", valor:1}
                                ,{etiqueta: "2 Jugadores", valor:2}]

    const tamañosTablero = [{etiqueta: "4x4", valor:4}
                           ,{etiqueta: "6x6", valor:6}
                           ,{etiqueta: "8x8", valor:8}]

    return (
        <>
            <button type="button" onClick={ () => !partidaEnCurso && iniciarJuego() }>Iniciar Juego</button>
            <button type="button" onClick={ () => reiniciarJuego() }>Reiniciar Juego</button>
            {DropDownMenu("1 Jugador", cantidadDeJugadores, setCantJugadores)}
            {DropDownMenu("4x4", tamañosTablero, setTamañoTablero)}
            {`Puntajes J1: ${puntajes[0]} - J2 ${puntajes[1]} | Turno Jugador: ${turno}`} 


        </>    
    )

}

export default NavBar;