import DropDownMenu from "./DropDownMenu.jsx";

const NavBar = (iniciarJuego, finalizarJuego, setTamañoTablero, setCantJugadores, partidaEnCurso, puntajes, turno, cantJugadores) => {

    const cantidadDeJugadores = [{etiqueta: "1 Jugador", valor:1}
                                ,{etiqueta: "2 Jugadores", valor:2}]

    const tamañosTablero = [{etiqueta: "4x4", valor:4}
                           ,{etiqueta: "6x6", valor:6}
                           ,{etiqueta: "8x8", valor:8}]

    return (
        <>
            <div className="nav">
                <span className="nav-txt">Partida para:</span>
                {DropDownMenu("1 Jugador", cantidadDeJugadores, setCantJugadores, partidaEnCurso)}
                <span className="nav-txt">Tamaño tablero:</span>
                {DropDownMenu("4x4", tamañosTablero, setTamañoTablero, partidaEnCurso)}
                <button className="nav-btn" type="button" onClick={ () => iniciarJuego() } disabled={partidaEnCurso}>Iniciar Juego</button>
                <button className="nav-btn" type="button" onClick={ () => finalizarJuego()} disabled={!partidaEnCurso}>Finalizar Juego</button>
            </div>
            <div className={`nav nav-puntaje ${cantJugadores === 1 && "nav-fix-height"} ${!partidaEnCurso && "nav-hidden"}`}>
                <span className="nav-txt nav-txt-puntaje">{cantJugadores > 1 ? `Puntajes: Jugador1: ${puntajes[0]} - Jugador2: ${puntajes[1]} | Turno actual: Jugador ${turno+1}`
                                                             : `Puntos: ${puntajes[0]}`}</span>
            </div> 
        </>    
    )

}

export default NavBar;