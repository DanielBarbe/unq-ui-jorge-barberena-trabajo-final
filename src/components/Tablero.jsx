import Ficha from "./Ficha.jsx"

const Tablero = ({animandose, onSelection, fichas}) => {
    return (
        <main className="tablero">
            {fichas.map( (ficha, i) => {
                return <Ficha key={`${i}_${ficha.imagen}`} animandose={animandose} onSelection={onSelection} ficha={ficha} />
            })}
        </main>
    );
}

export default Tablero;