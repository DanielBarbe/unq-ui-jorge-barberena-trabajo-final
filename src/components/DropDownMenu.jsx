const DropDownMenu = (valorDefault, listaDeOpciones, setValor, partidaEnCurso) => {

    return (
        <select className="drop-menu" defaultValue={valorDefault} onChange={(e) => {!partidaEnCurso && setValor(e.target.value)}} disabled={partidaEnCurso}>
            {listaDeOpciones.map((opcion) => 
                <option value={opcion.valor}>{opcion.etiqueta}</option>
            ) }
        </select>
    )

}

export default DropDownMenu;