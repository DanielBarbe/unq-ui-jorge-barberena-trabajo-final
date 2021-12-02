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
import { useState } from "react"

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

  const iniciarJuego = () => {
    setPartidaEnCurso(true);
    definirColumnasTablero()
    const imagenesMezcladas = prepararImagenes(tamañoTablero * tamañoTablero);
    setFichasMezcladas(imagenesMezcladas.map( (imagen, i) => ({ index: i, imagen, volteada: false }) ));
    prepararFichas();
  }

  const reiniciarJuego = () => {
    setPartidaEnCurso(true);
    definirColumnasTablero()
    setPuntajes([0,0]);
    prepararFichas();
  }

  const definirColumnasTablero = () => {
    root.style.setProperty('--grid-cols', tamañoTablero)
  }

  const prepararFichas = () => {
    const imagenesMezcladas = prepararImagenes(tamañoTablero * tamañoTablero);
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
    let tmp = [...puntajes]
    tmp[turno]++
    setPuntajes(tmp)
  }

  const onSelection = ficha => {
    const fichaVolteada = { ...ficha, volteada: true };
    let fichasMezcladasCopia = [...fichasMezcladas];
    fichasMezcladasCopia.splice(ficha.index, 1, fichaVolteada);
    setFichasMezcladas(fichasMezcladasCopia);
    if(fichaElegida === null) {
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

  return (
    <>
      {NavBar(iniciarJuego, reiniciarJuego, setTamañoTablero, setCantJugadores, partidaEnCurso, puntajes, turno)}
      <Tablero fichas={fichasMezcladas} animandose={animandose} onSelection={onSelection} />
    </>
  );
}

export default App;