import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers";
import styles from '../../styles/Entrada.module.css'

function EntradaBlog({entrada}) {

    const {contenido, imagen, published_at, titulo} = entrada
    
    return ( 
        <Layout 
            pagina={titulo}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt="Imagen entrada"></Image>
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
     );
}


{/* Forma de connsultar estaticamente */}

//Renderiza antes en el servidor y permitira mejorar el SEo en cambio el dinamico solo se renderiza en el navegador
export async function getStaticPaths () {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.map(entrada => ({
        params: { url: entrada.url}
    }))
    return {
        paths,
        fallback: false
    }
}

//Se requiere ambos el staticpaths y luego el static props, el fallback permitira renderizar de a pocos, si es falso manda todo a renderizar, no bueno cuando son muchos

export async function getStaticProps ({params: {url}}) {

    const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    console.log(entrada);
    return {
        props: {
            entrada: entrada[0]
        }
    }
}

{/* Termina el estatico y incia el dinamico */}

// export async function getServerSideProps ({query: {_id}}) {

//     const url = `process.env.NEXT_PUBLIC_API_URL/blogs/${_id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()
//     console.log(entrada);
//     return {
//         props: {
//             entrada
//         }
//     }
// }

export default EntradaBlog;