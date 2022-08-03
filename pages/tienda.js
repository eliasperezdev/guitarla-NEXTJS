import Layout from "../components/Layout";
import ListadoTienda from "../components/ListadoTienda";

function Tienda({guitarras}) {
    console.log(guitarras);
    return ( 
        <Layout
            pagina="Tienda"
        >

            <h1>Tienda Virtual</h1>

            <ListadoTienda guitarras={guitarras}/>

        </Layout>
     );
}
export async function getServerSideProps ({query: {_id}}) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/guitarras`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()
    console.log(guitarras);
    return {
        props: {
            guitarras
        }
    }
}

export default Tienda;