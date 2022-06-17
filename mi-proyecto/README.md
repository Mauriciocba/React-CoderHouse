## Creador

Mauricio Torres. 

### Descripcion del proyecto
Es un Ecomerse- Con react.
que simula una tienda que vende celulares y accesorios para computacion.

`bash`
- $ git clone https://github.com/Mauriciocba/React-CoderHouse.git
- $ cd .\mi-proyecto\
- $ npm install
- $ npm start

`npm start`
Abra [http://localhost:3000](http://localhost:3000) para ver en su navegador.

## Firebase

Use las key para acceder a la base de datos. 
[https://github.com/Mauriciocba/React-CoderHouse/blob/proyecto-final/mi-proyecto/.env_Firebase] (KEY)

### Componentes principales

- NavBar 
- CarritoComponente
- ItemDetail , ItemDetailConteiner
- Item,ItemList , ItemListContainer
- Cart
- Login
- About
- PageNotFound

### Uso de componentes

Al abrir local host 3000, Se muestra un NavBar con 4 Link "Inicio" "Celulares" "Computación" "Acerca de nosotros". En la misma página tenemos un Componente Login para iniciar con Google. Más abajo tenemos todos los productos cargados provenientes de la base de datos FIREBASE. 
Si vamos a los Link "Celulares" "Computación" Se filtran los productos por categoría. El último muestra un link "Acerca de nosotros" que es la misión del E-comerse.

Al seleccionar un producto del "inicio" , nos va a llevar al detalle del producto, donde vamos a ver la cantidad de productos que deseamos llevar, al seleccionar la cantidad deseada podremos finalizar compra o seguir comprando. 

Finalizar compra. Nos llevara al carrito de productos, donde vemos la cantidad del producto, el precio unitario y el subtotal. En la misma página vamos a ver el total de todos los productos que añadimos al carrito. Además vamos a ver dos botones, uno para vaciar todo el carrito de compras y otro para pagar. Ese mismo te lleva al formulario de compra, donde ingresaremos NOMBRE, MAIL Y TELEFONO. Para finalizar la compra creamos una orden que se carga en la base de datos FIREBASE. 


### Gif del proyecto

![alt text](./public/imagenes/miProyecto.gif "Mi Proyecto")