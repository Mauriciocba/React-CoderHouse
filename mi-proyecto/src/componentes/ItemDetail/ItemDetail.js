import '../ItemDetail/ItemDetail.css'
const ItemDetail =({nombre}) =>{
    return(
        <div className="itemDetail-container">
            <h1>Detalle producto</h1>
            <h5>Nombre</h5>
            <li>{nombre}</li>
        </div>
    )
}

export default ItemDetail