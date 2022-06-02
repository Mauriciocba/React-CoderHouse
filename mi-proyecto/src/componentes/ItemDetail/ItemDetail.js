import '../ItemDetail/ItemDetail.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({description, img, nombre, categoria,stock }) => {
    const [quantity, setQuantity] = useState(0)
    
    
    const handleOnAdd = (inicial) => {
        console.log('agregue al carrito')
        console.log(inicial)
        setQuantity(inicial)
    }
    
    return (
        <div className="container-itemDetail">
            <div className="card-detail-categoria">
                <div className="card__header">
                    <img id="imagen-card" src={img} alt="card__image" className="card__image" width="600" />
                </div>
                <div className="card__body">
                    <span class="tag tag-blue">{categoria}</span>
                    <h4>{nombre}</h4>
                    <p>{description}</p>

                    { quantity > 0  ? <Link className='boton-itemCount' to='/cart'>Finalizar compra</Link> : 
                    <ItemCount stock={stock} onAdd={handleOnAdd} />}
        
                </div>
            </div>
        </div>
    )
}

export default ItemDetail