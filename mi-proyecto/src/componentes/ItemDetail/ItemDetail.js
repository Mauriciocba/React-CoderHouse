import '../ItemDetail/ItemDetail.css'
import {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Context/CartContext';

const ItemDetail = ({id,description, img, nombre,precio, categoria,stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem , iniciarProducto } = useContext(CartContext)
 
    const handleOnAdd = (inicial) => {
        setQuantity(inicial)
        
        addItem({id,nombre,precio,inicial,img,description,categoria})
      
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

                    { quantity > 0  ? <Link className='boton-itemCount' to='/cart'>Finalizar compra</Link>: 
                    <ItemCount stock={stock} onAdd={handleOnAdd} numeroInicia={iniciarProducto(id)?.inicial}/> }
                    
                    { quantity > 0  ? <Link className='boton-itemCount' to='/'>Continuar comprando</Link>: 
                     null }
                   
                 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail