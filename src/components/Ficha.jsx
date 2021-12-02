import '../css/main.css';
import reverso from "../img/reverso.png";

const Ficha = ({animandose, onSelection, ficha}) => (
    <div className="ficha" onClick={() => (!ficha.volteada && !animandose) && onSelection(ficha)}>
        <div className={`ficha-voltear ${ficha.volteada && 'ficha-accion'}`}>
            <div>
                <img className="ficha-imagen" src={ficha.volteada ? ficha.imagen : reverso} />
            </div>
        </div>
    </div>
)

export default Ficha;