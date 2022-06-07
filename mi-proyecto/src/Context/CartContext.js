import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (agregarProducto) => {
        setCart([...cart, agregarProducto])
    }

    const contadorProductosCarrito = () =>{
        let acumulador = 0
        cart.forEach(prod => {
            acumulador += prod.inicial
        })

        return acumulador
    }


    const eliminarProducto = (id) => {
        const nuevaCart = cart.filter(prod => prod.id !== id)
        setCart(nuevaCart)
    }
    return(
        <CartContext.Provider value={{ cart, addItem,contadorProductosCarrito,eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext