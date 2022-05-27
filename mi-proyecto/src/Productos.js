const productos = [
{id: '1',
nombre: 'iphone 13',
precio: 108450,
categoria: 'celular',
img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf4cTGB7QuQ1LRP7ortUTFUHZL-ejotzijMDOmbLQXbxEm2YIzUYkkOskw2ODUDCLo95EYCSgWGls2EKVw0NSpjs6X2tRz',
stock: 25,
description:'Iphone 13'},

{ id: '2', 
nombre: 'Motorola g8', 
precio: 30000, categoria: 'celular', 
img:'https://i.blogs.es/fad653/moto-g8/840_560.jpg',
stock: 16, 
description:'motorola g8'},

{ id: '3', 
nombre: 'LG K12',
precio: 55000, 
categoria: 'celular', 
img:'https://www.notebookcheck.org/uploads/tx_nbc2/celular-smartphone-k12-max-dual-chip-6-26-lg_276885-581x581.jpg', 
stock: 10, 
description:'LG K12'},

{ id: '4', 
nombre: 'Samsung Galaxy A52',
precio: 55000, 
categoria: 'celular', 
img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPVMzZMYdZ_UGmW7OfuU-sdANZ9ISai_-OeHh3eoZ7UPYMlVjGKTMC-zlsg3PNuitvz9l_ShJd766L5f5MGSBtg2M2JAzcCA', 
stock: 10, 
description:'Samsung Galaxy A52'} ,

{ id: '5', 
nombre: 'Samsung Galaxy A32 4G',
precio: 55000, 
categoria: 'celular', 
img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5FoweEZcFCEnwTg9Kwr75JAgYKENPf8RkQvCVA6US6Y5LdGqCveavGW9PY7xLVHNQfPcIFooftxDJLRu5-dovT0MElJ35', 
stock: 10, 
description:'Samsung Galaxy A32 4G'} 
]

export const listaProductos = ()=> {
    return new Promise((respuesta) => {
        setTimeout(() => {
            respuesta(productos)
        }, 1000);
    })
    
}

export const productoId = (id) => {
    return new Promise(respuesta => {
        setTimeout(() => {
            respuesta(productos.find(prod => prod.id === id))
        }, 1000);
    })
}
