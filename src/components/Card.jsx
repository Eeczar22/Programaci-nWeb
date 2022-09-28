import '../assets/styles/Card.css'
function Card({nombre,ingredientes,precio,imagen}) {
    return (  
        <div className='contenedor-card'>
        <img
            className='imagen-card'
            src={imagen}
            alt=''/>
        <div className='contenedor-texto-card'>
            <p className='nombre-card'>
                <h1><strong>{nombre}</strong></h1>
            </p>
            <p className='ingredientes-card'>
                <h2>Ingredientes</h2>
                <strong>{ingredientes}</strong>
            </p>
            <p className='precio-card'>"{precio}"</p>
        </div>
    </div>
    );
}

export default Card;