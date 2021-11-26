import "../css/main.css"
import Tablero from "./Tablero.jsx"
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
  const [primeraFicha, setPrimeraFicha] = useState(null);
  const [segundaficha, setSegundaFicha] = useState(null);
  const [puntaje, setPuntaje] = useState(0);

  useEffect (() => {
    if(primeraFicha && !segundaficha){
      setSegundaFicha(primeraFicha)
      setPrimeraFicha(null)
    }  
    primeraFicha && segundaficha && verificarSeleccion()
  }, [primeraFicha]);

  const verificarSeleccion = () => {
    if(primeraFicha === segundaficha){
      setPuntaje(puntaje + 1)
      setPrimeraFicha(null)
      setSegundaFicha(null)
    } 
  }

  return (
    <>
      {Tablero([Ficha(batman, setPrimeraFicha), Ficha(batman, setPrimeraFicha), 
                Ficha(captain, setPrimeraFicha), Ficha(captain, setPrimeraFicha),
                Ficha(flash, setPrimeraFicha), Ficha(flash, setPrimeraFicha), 
                Ficha(green, setPrimeraFicha), Ficha(green, setPrimeraFicha),
                Ficha(ironman, setPrimeraFicha), Ficha(ironman, setPrimeraFicha),
                Ficha(punisher, setPrimeraFicha), Ficha(punisher, setPrimeraFicha)])}
      
      <button type="button" onClick={ () => root.style.setProperty('--grid-cols', 6) }> Cambiar a grid a 6</button>
      <button type="button" onClick={ () => root.style.setProperty('--grid-cols', 4) }> Cambiar a grid a 4</button>
      <button type="button" onClick={ () => console.log(primeraFicha) }> 1</button>
      <button type="button" onClick={ () => console.log(segundaficha) }> 2</button>
    </>
  );
}

export default App;
