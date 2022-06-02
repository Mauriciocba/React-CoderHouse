const productos = [
{id: '1',
nombre: 'Iphone 13',
precio: 108450,
categoria: 'celulares',
img:'https://electromega.com.ar/wp-content/uploads/2021/08/Apple-iPhone-12-Pro-Max-PNG-Transparent-Images-Free.png',
stock: 25,
description:'iPhone 13 Pro y 13 Pro Max. Gran avance en cámaras. Nueva pantalla OLED con ProMotion. El chip más rápido en un smartphone. Y una batería increíble'},

{ id: '2', 
nombre: 'Motorola g8', 
precio: 30000, 
categoria: 'celulares', 
img:'https://motorolaes.vtexassets.com/arquivos/ids/156621/DOHA---COSMIC-BLUE---FRONT-SIDE.png?v=637160746470000000',
stock: 16, 
description:'Motorola Moto G8 Plus 64gb Celular Refabricado Liberado'},

{ id: '3', 
nombre: 'LG K12',
precio: 55000, 
categoria: 'celulares', 
img:'https://img.helpforsmartphone.com/abb9d29a5957b4c183e76c7742c7a22b-w300', 
stock: 10, 
description:'LG K12 el último modelo de la gama asequible de LG llega con certificación militar de resistencia.'},

{ id: '4', 
nombre: 'Samsung Galaxy A52',
precio: 55000, 
categoria: 'celulares', 
img:'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a525mzkearo/gallery/ar-galaxy-a52-a525-377973-sm-a525mzkearo-409828392?$650_519_PNG$', 
stock: 100, 
description:'Ya sea que estés enfocado en una tarea o en varias tareas a la vez, el Galaxy A52 ofrece un excelente rendimiento gracias a su procesador avanzado de ocho nucleos'} ,

{ id: '5', 
nombre: 'Samsung Galaxy A32 4G',
precio: 55000, 
categoria: 'celulares', 
img:'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a325mzbmaro/gallery/ar-galaxy-a32-a325-sm-a325mzbmaro-399841286?$650_519_PNG$', 
stock: 50, 
description:'Galaxy A32 · Una pantalla impresionante con el desplazamiento más fluido · Diseño minimalista con un estilo increíble · Una cámara impresionante para capturar paisajes.'} ,

{ id: '6', 
nombre: 'MOUSE GAMER',
precio: 10000, 
categoria: 'computacion', 
img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/073/395/products/m908-61-2cad186b200b88449915972745927254-1024-1024.png', 
stock: 20, 
description:'Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu Xtrike Me GM-216 encontrá eso que buscás en un solo aparato con la mejor tecnología.'} ,

{ id: '7', 
nombre: 'PLACA DE VIDEO MSI NVIDIA GEFORSE',
precio: 60000, 
categoria: 'computacion', 
img:'https://i2.wp.com/homeweb.com.ar/wp-content/uploads/2021/09/MSI-GT-730k-4GD3-OC-1-1.png?fit=500%2C500&ssl=1', 
stock: 30, 
description:'Placa de Video MSI Nvidia Geforce GT 730K 4GB DDR3 OC'} ,

{ id: '8', 
nombre: 'TECLADO GAMER TRUST GXT 835',
precio: 5000, 
categoria: 'computacion', 
img:'https://www.motomostorechile.cl/images/original/teclado-gamer-an-300-1121664-2.png', 
stock: 35, 
description:'TECLADO GAMER TRUST GXT 835 AZOR RETROILUMINADO ESP.'} 
]

export const listaProductos = ()=> {
    return new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(productos)
        }, 2000);
    })
    
}

export const productoId = (id) => {
    return new Promise(respuesta => {
        setTimeout(() => {
            respuesta(productos.find(prod => prod.id === id))
        }, 2000);
    })
}

export const productosPorCategoria = (categoriaId) => {
    return new Promise(respuesta => {
        setTimeout(() => {
            respuesta(productos.filter(prod => prod.categoria === categoriaId))
        }, 2000);
    })
}
