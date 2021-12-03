import '../css/main.css';
import reverso from "../img/reverso.png";

const Ficha = ({animandose, onSelection, ficha}) => (
    <div onClick={() => (!ficha.volteada && !animandose) && onSelection(ficha)}>
        <div className={`ficha-voltear ${ficha.volteada && 'ficha-accion'}`}>
            <img className="ficha-imagen img-responsive" src={ficha.volteada ? ficha.imagen : reverso} />
        </div>
    </div>
)

export default Ficha;