import "../css/main.css"
import Ficha from "./Ficha.jsx"
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
import { useEffect, useState } from "react"


const App = () => {

  const root = document.querySelector(':root');
  const [ficha, setFicha] = useState(null);
  const [fichaEnEspera, setFichaEnEspera] = useState(null);
  const [indexFicha, setIndexFicha] = useState(null);
  const [indexFichaEnEspera, setIndexFichaEnEspera] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [fichasMezcladas, setFichasMezcladas] = useState([]);
  let fiches = []

  const imagenes = [batman, captain, flash, green, ironman, punisher, robin, spiderman, superman, wonder]

  useEffect (() => {
    if(ficha && !fichaEnEspera){
      setIndexFichaEnEspera(indexFicha)
      setFichaEnEspera(ficha)
      setIndexFicha(null)
      setFicha(null)
    }  
    ficha && fichaEnEspera && verificarSeleccion()
  }, [ficha]);

  const verificarSeleccion = () => {
    if(ficha === fichaEnEspera){
      setPuntaje(puntaje + 1)
    }else{
      voltear(fichaEnEspera, indexFichaEnEspera)
      voltear(ficha, indexFicha)
    }
    setFicha(null)
    setFichaEnEspera(null)
    setIndexFicha(null)
    setIndexFichaEnEspera(null)
  }

  const voltear = (imagen, index) => {
    let tmp = [...fichasMezcladas]
    tmp.splice(index,1, <Ficha frente={imagen} index={index} setFicha={setFicha} setIndex={setIndexFicha}/>)
    setFichasMezcladas(tmp) 
    console.log(tmp)
  }

  const prepararFichas = (cantidad) => {
    let result = []
    let indexImg = 0
    for (let i = 0; i < cantidad/2; i++){
      result.push(imagenes[indexImg], imagenes[indexImg])
      indexImg = (indexImg + 1) % imagenes.length 
    }
    for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    setFichasMezcladas(result.map( (imagen, i) => ( <Ficha frente={imagen} index={i} setFicha={setFicha} setIndex={setIndexFicha} /> )))
  }

  return (
    <>
      <button type="button" onClick={ () => root.style.setProperty('--grid-cols', 6) }> Cambiar a grid a 6</button>
      <button type="button" onClick={ () => root.style.setProperty('--grid-cols', 4) }> Cambiar a grid a 4</button>
      <button type="button" onClick={ () => console.log(ficha) }> primera ficha</button>
      <button type="button" onClick={ () => console.log(fichaEnEspera) }> segunda ficha</button>
      <button type="button" onClick={ () => prepararFichas(16) }> preparar 16 fichas </button>
      <button type="button" onClick={ () => console.log(fichasMezcladas) }> fichas mezcladas</button>
      <button type="button" onClick={ () => console.log(indexFicha) }> primer index</button>
      <button type="button" onClick={ () => console.log(indexFichaEnEspera) }> segundo index</button>
      <button type="button" onClick={ () => console.log(puntaje) }> ver puntos</button>
      <button type="button" onClick={ () => setFichasMezcladas([]) }> limpiar tablero</button>

      <div className="tablero"> {fichasMezcladas} </div>

    </>
  );
}

export default App;
