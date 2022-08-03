export const formatearFecha = fecha => {
    const fechanueva= new Date(fecha)


    const opciones = {
        year: 'numeric',
        month:'long',
        day: '2-digit'
    }
    return fechanueva.toLocaleDateString('es-ES', opciones)
}

