import { useState, createContext, useEffect, useContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalApagarr, setTotall] = useState(0)
    

    useEffect(() => {
        calcularTotal()
    }, [cart])

    const addItem = (agregarProducto) => {
   
        if (!estaEnCart(agregarProducto.id)) {
        setCart([...cart, agregarProducto])
        }else{
            const nuevaCart = cart.map(prod =>{
                if(prod.id === agregarProducto.id){
                    const nuevoProducto = {
                        ...prod,
                        inicial: agregarProducto.inicial
                    }
                    return nuevoProducto
                }else{
                    return prod
                }
            })
            setCart(nuevaCart)
        }
    
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


    const estaEnCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const iniciarProducto = (id) => {
        return cart.find(prod => prod.id === id)
    }


    const borrarTodoCarrito = () => {
        setCart([])
    }

    const calcularTotal = () => {
        let total = 0 
        cart.forEach(prod => {
            total += prod.precio * prod.inicial
        })
        setTotall(total)

    } 


    return(
        <CartContext.Provider value={{ cart, addItem, 
                                      contadorProductosCarrito, 
                                      eliminarProducto, 
                                      iniciarProducto, 
                                      borrarTodoCarrito, 
                                      calcularTotal,}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext)
}

export default CartContext