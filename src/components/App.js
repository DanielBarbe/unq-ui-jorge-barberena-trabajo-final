import "../css/main.css"
import Tablero from "./Tablero.jsx"
import batman from "../img/batman.png"
import captain from "../img/captain.png"
import flash from "../img/flash.png"
import green from "../img/green.png"
import ironman from "../img/ironman.png"
import punisher from "../img/punisher.png"
import robin from "../img/robin.png"
import spiderman from "../img/spiderman.png"
import superman from "../img/superman.png"
import wonder from "../img/wonder.png"
import NavBar from "./NavBar.jsx"
import Modal from "./Modal.jsx"
import { useEffect, useState } from "react"

const imagenes = [batman, captain, flash, green, ironman, punisher, robin, spiderman, superman, wonder]

const App = () => {

  const root = document.querySelector(':root');
  const [animandose, setAnimandose] = useState(false);
  const [fichaElegida, setFichaElegida] = useState(null);
  const [fichasMezcladas, setFichasMezcladas] = useState([]);
  const [tamañoTablero, setTamañoTablero] = useState(4);
  const [partidaEnCurso, setPartidaEnCurso] = useState(false);
  const [puntajes, setPuntajes] = useState([0,0]);
  const [cantJugadores, setCantJugadores] = useState(1);
  const [turno, setTurno] = useState(0);
  const [resultado, setResultado] = useState ("")
  const [mostarModal, setMostrarModal] = useState (false)

  const iniciarJuego = () => {
    setPartidaEnCurso(true);
    definirColumnasTablero()
    prepararFichas();
  }

  const reiniciarJuego = () => {
    reiniciarPuntosYTurno()
    iniciarJuego()
  }

  const finalizarJuego = () => {
    reiniciarPuntosYTurno();
    setFichasMezcladas([]);
    setPartidaEnCurso(false);
  }

  const reiniciarPuntosYTurno = () => {
    setTurno(0);
    setPuntajes([0,0]);
  }

  const definirColumnasTablero = () => {
    root.style.setProperty('--grid-cols', tamañoTablero)
  }

  const prepararFichas = () => {
    let imagenesMezcladas = prepararImagenes(tamañoTablero * tamañoTablero);
    setFichasMezcladas(imagenesMezcladas.map( (imagen, i) => ({ index: i, imagen, volteada: false }) ));
  }

  const prepararImagenes = (cantidad) => {
    let result = [];
    let indexImg = 0;
    for (let i = 0; i < cantidad/2; i++){
      result.push(imagenes[indexImg], imagenes[indexImg]);
      indexImg = (indexImg + 1) % imagenes.length ;
    }
    for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return [...result];
  }

  const cambiarTurno = () => {
    setTurno((turno + 1) % cantJugadores);
  }

  const sumarPuntoAJugadorActivo = () => {
    let tmp = [...puntajes];
    tmp[turno]++;
    setPuntajes(tmp);
  }

  const onSelection = (ficha) => {
    let fichaVolteada = { ...ficha, volteada: true };
    let fichasMezcladasCopia = [...fichasMezcladas];
    fichasMezcladasCopia.splice(ficha.index, 1, fichaVolteada);
    setFichasMezcladas(fichasMezcladasCopia);
    if(!fichaElegida) {
      setFichaElegida(ficha);
    } else if (fichaElegida.imagen === ficha.imagen) {
      setFichaElegida(null);
      sumarPuntoAJugadorActivo();
      cambiarTurno();
    } else {
      setAnimandose(true);
      setTimeout(() => {
        fichasMezcladasCopia.splice(ficha.index, 1, ficha);
        fichasMezcladasCopia.splice(fichaElegida.index, 1, fichaElegida);
        setFichasMezcladas(fichasMezcladasCopia);
        setFichaElegida(null);
        setAnimandose(false);
        cambiarTurno();
      }, 1000);
    }
  }

  const mostrarResultado = () => {
    let res
    if(puntajes[0] > puntajes[1]){
      res = cantJugadores === 1 ? "Fin de la partida" : "Ganador Jugador 1"
    } else if (puntajes[0] < puntajes[1]) {
      res = "Ganador Jugador 2"
    } else {
      res = "Empate"
    }
    setResultado(res)
    setMostrarModal(true)
  }

  useEffect( () => {
    let puntajeTotal = (tamañoTablero * tamañoTablero) / 2
    if (puntajeTotal === puntajes[0] + puntajes[1]){
      mostrarResultado()
    }
  },[puntajes])

  return (
    <>
      {NavBar(iniciarJuego, finalizarJuego, setTamañoTablero, setCantJugadores, partidaEnCurso, puntajes, turno, cantJugadores)}
      <Tablero fichas={fichasMezcladas} animandose={animandose} onSelection={onSelection} />
      <Modal reiniciarJuego={reiniciarJuego}
             finalizarJuego={finalizarJuego}
             ocultar={() => setMostrarModal(!mostarModal)} 
             mostrandose={mostarModal} 
             mensaje={resultado}/>
    </>
  );
}

export default App;