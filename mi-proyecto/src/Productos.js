const productos = [
{id: '1',
nombre: 'iphone 13',
precio: 108450,
categoria: 'celulares',
img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf4cTGB7QuQ1LRP7ortUTFUHZL-ejotzijMDOmbLQXbxEm2YIzUYkkOskw2ODUDCLo95EYCSgWGls2EKVw0NSpjs6X2tRz',
stock: 25,
description:'Iphone 13'},

{ id: '2', 
nombre: 'Motorola g8', 
precio: 30000, 
categoria: 'celulares', 
img:'https://i.blogs.es/fad653/moto-g8/840_560.jpg',
stock: 16, 
description:'motorola g8'},

{ id: '3', 
nombre: 'LG K12',
precio: 55000, 
categoria: 'celulares', 
img:'https://www.notebookcheck.org/uploads/tx_nbc2/celular-smartphone-k12-max-dual-chip-6-26-lg_276885-581x581.jpg', 
stock: 10, 
description:'LG K12'},

{ id: '4', 
nombre: 'Samsung Galaxy A52',
precio: 55000, 
categoria: 'celulares', 
img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPVMzZMYdZ_UGmW7OfuU-sdANZ9ISai_-OeHh3eoZ7UPYMlVjGKTMC-zlsg3PNuitvz9l_ShJd766L5f5MGSBtg2M2JAzcCA', 
stock: 10, 
description:'Samsung Galaxy A52'} ,

{ id: '5', 
nombre: 'Samsung Galaxy A32 4G',
precio: 55000, 
categoria: 'celulares', 
img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5FoweEZcFCEnwTg9Kwr75JAgYKENPf8RkQvCVA6US6Y5LdGqCveavGW9PY7xLVHNQfPcIFooftxDJLRu5-dovT0MElJ35', 
stock: 10, 
description:'Samsung Galaxy A32 4G'} ,

{ id: '6', 
nombre: 'MOUSE GAMER',
precio: 10000, 
categoria: 'computacion', 
img:'https://cf.shopee.com.ar/file/8305e736378cff580dcadbfd5fe2bfa6', 
stock: 10, 
description:'MOUSE GAMER PARA JUGAR A FULL'} ,

{ id: '7', 
nombre: 'Placa de video Nvidia MSI GeForce 200',
precio: 60000, 
categoria: 'computacion', 
img:'https://http2.mlstatic.com/D_NQ_NP_761848-MLA32007295689_082019-O.webp', 
stock: 10, 
description:'Placa de video Nvidia MSI GeForce 200 Series 210 N210-MD1G/D3 1GB Imagen 2 de 2 de Placa de video Nvidia MSI GeForce 200 Series 210 N210-MD1G/D3 1GBPlaca de video Nvidia MSI GeForce 200 Series 210 N210-MD1G/D3 1GB'} ,

{ id: '8', 
nombre: 'TECLADO GAMER TRUST GXT 835',
precio: 5000, 
categoria: 'computacion', 
img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/067/624/products/b11-5fee2624ee5635664316210211070459-1024-1024.jpg', 
stock: 10, 
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
