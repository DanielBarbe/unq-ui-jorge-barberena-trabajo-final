import ReactDOM from 'react-dom';

const Modal = ({ reiniciarJuego, finalizarJuego, ocultar, mostrandose, mensaje }) => { 

    return (
        mostrandose ? ReactDOM.createPortal(    
            <>
                <div className="modal-custom-overlay"/>
                <div className="modal-custom-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal-custom">
                    <p className="modal-custom-txt"> {mensaje} </p>
                    <div className="center">
                        <button className="modal-custom-btn" onClick={ () => { ocultar(); reiniciarJuego() } } >Volver a jugar</button>
                        <button className="modal-custom-btn" onClick={ () => { ocultar(); finalizarJuego() } } >Finalizar juego</button>
                    </div>
                </div>
                </div>
            </>, document.body
        ) : null
    )
}

export default Modal;