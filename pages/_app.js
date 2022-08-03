import '../styles/normalize.css'
import '../styles/globals.css'
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(()=> {
    const carritoJS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoJS)
  }, [])

  useEffect(()=> {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])


  const agregarCarrito = producto => {
    if(carrito.some (articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id===producto.id) {
          articulo.cantidad = producto.cantidad
        } 
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map(articulo => {
      if(articulo.id===producto.id) {
        articulo.cantidad = producto.cantidad
      } 
      return articulo
    })

    setCarrito(carritoActualizado)
  }
  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( art => art.id !== id)
    setCarrito(carritoActualizado)
  }

  console.log(carrito);
  return <Component {...pageProps} eliminarProducto={eliminarProducto} actualizarCantidad={actualizarCantidad} agregarCarrito={agregarCarrito} carrito={carrito} />
}

export default MyApp
