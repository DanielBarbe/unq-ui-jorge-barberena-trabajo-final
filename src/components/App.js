import "../css/main.css"
import Tablero from "./Tablero.jsx"
import Ficha from "./Ficha.jsx"

const App = () => {

  const root = document.querySelector(':root');

  return (
    <>
      {Tablero([Ficha(), Ficha(), Ficha(), Ficha(),Ficha(), Ficha(), Ficha(), Ficha(),Ficha(), Ficha(), Ficha(), Ficha(),Ficha(), Ficha(), Ficha(), Ficha()])}
      <button type="button" onClick={ () => root.style.setProperty('--grid-cols', 6) }> Cambiar a grid a 6</button>
      <button type="button" onClick={ () => root.style.setProperty('--grid-cols', 4) }> Cambiar a grid a 4</button>
    </>
  );
}

export default App;
