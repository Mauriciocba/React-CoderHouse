import '../estilos-css/Contenido.css'
function Contenido(props) {
    return(
        <div className="contenedor">
            <h1>{props.titulo}</h1>
            <h5>{props.subtitulo}</h5>
            <p>{props.parrafo}</p>
        </div>
    )
}

export default Contenido