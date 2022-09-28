import cubana from '../assets/images/torta-cubana.jpg'
import hawaiana from '../assets/images/torta-hawaina.jpg'
import jamon from '../assets/images/torta-jamon.jpg'
import mexicana from '../assets/images/torta-mexicana.jpg'
import Card from './Card'
function Publicacion() {
    const tortas =[
        {
            nombre:'Torta Cubana',
            ingredientes:'Pierna,Jamon,Quesillo,Aguacate',
            precio:"Precio: $"+80,
            imagen:cubana
        },
        {
            nombre:'Torta Hawaina',
            ingredientes:'Jamon,Piña,Quesillo',
            precio:"Precio: $"+60,
            imagen: hawaiana
        },
        {
            nombre:'Torta Mexicana',
            ingredientes:'Chorizo,Aguacate,Quesillo',
            precio:"Precio: $"+75,
            imagen: mexicana
        },
        {
            nombre:'Torta De Jamon',
            ingredientes:'Jamon,Quesillo',
            precio:"Precio: $"+50,
            imagen: jamon

        }
    ]
    return( 
        tortas.map((product)=>(
            <Card
                nombre={product.nombre}
                ingredientes={product.ingredientes}
                precio={product.precio}
                imagen={product.imagen}
            />
        ))
    );
}

export default Publicacion 