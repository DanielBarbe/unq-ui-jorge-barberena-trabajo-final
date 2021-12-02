import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ reiniciarJuego, finalizarJuego, ocultar, mostrandose, mensaje }) => { 

    return (
        mostrandose ? ReactDOM.createPortal(    
            <>
                <div className="modal-overlay"/>
                <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                    <p className="modal-txt"> {mensaje} </p>
                    <div className="center">
                        <button className="modal-btn" onClick={ () => { ocultar(); reiniciarJuego() } } >Volver a jugar</button>
                        <button className="modal-btn" onClick={ () => { ocultar(); finalizarJuego() } } >Finalizar juego</button>
                    </div>
                </div>
                </div>
            </>, document.body
        ) : null
    )
}

export default Modal;