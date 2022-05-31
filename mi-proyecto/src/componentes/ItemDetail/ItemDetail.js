import '../ItemDetail/ItemDetail.css'
const ItemDetail = ({ description, img, nombre, categoria }) => {
    return (
        <div class="container-itemDetail">
            <div class="card-detail-categoria">
                <div class="card__header">
                    <img id="imagen-card" src={img} alt="card__image" className="card__image" width="600" />
                </div>
                <div class="card__body">
                    <span class="tag tag-blue">{categoria}</span>
                    <h4>{nombre}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail