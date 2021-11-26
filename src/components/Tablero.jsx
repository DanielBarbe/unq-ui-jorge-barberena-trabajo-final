import ficha from "./Ficha.jsx"
import "../css/main.css"

const Tablero = (fichas) => {

    return (
        <main className="tablero">
            {fichas}
        </main>
    )

}

export default Tablero