import '../ItemDetail/ItemDetail.css'
const ItemDetail =({titulo}) =>{
    return(
        <div className="itemDetail-container">
            <h1>Detalle producto</h1>
            <h5>Nombre</h5>
            <li>{titulo}</li>
        </div>
    )
}

export default ItemDetail