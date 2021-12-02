const DropDownMenu = (valorDefault, listaDeOpciones, setValor) => {

    return (
        <select defaultValue={valorDefault} onChange={(e) => {setValor(e.target.value)}}>
            {listaDeOpciones.map((opcion) => 
                <option value={opcion.valor}>{opcion.etiqueta}</option>
            ) }
        </select>
    )

}

export default DropDownMenu;