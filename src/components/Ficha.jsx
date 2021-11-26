import { useEffect, useState } from "react"
import reverso from "../img/reverso.png"

const Ficha = (frente, setFichaSeleccionada, estaVolteada) => {

    const [volteada, setVolteada] = useState(estaVolteada);

    const onClick = () => {
        if (!volteada) {
            setVolteada(true)
            setFichaSeleccionada(frente)    
        }
    } 

    return  <button className="btn-ficha" onClick={() => { onClick() }}> 
                <img className="ficha"src={volteada ? frente : reverso} />
            </button>
}

export default Ficha