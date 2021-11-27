import { useState } from "react";
import reverso from "../img/reverso.png";

const Ficha = ({frente, index , setFicha, setIndex}) => {

    const [imagen, setImagen] = useState(reverso)

    const voltearFicha = () => {
        if (imagen === reverso) {
            setImagen(frente)
            setFicha(frente)
            setIndex(index)
        }
    } 

    return  <button className="btn-ficha" onClick={ () => { voltearFicha() }}> 
                <img className="ficha"src={imagen} alt=""/>
            </button>
}

export default Ficha