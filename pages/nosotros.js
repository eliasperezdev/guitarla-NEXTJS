
import Image from "next/image";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'

function Nosotros() {
    return ( 
        <Layout
            pagina="Nosotros"
        >

            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Sobre nosotros"/>
                    <div>
                        <p>
                        mattis mi quis porta semper. Nullam convallis nunc vitae nibh pellentesque, quis iaculis sapien efficitur. Nam tempus quam et neque tempor molestie. Nullam lobortis non nisl eget commodo. Nulla dignissim nisi accumsan efficitur posuere
                        </p>
                        <p>
                        mattis mi quis porta semper. Nullam convallis nunc vitae nibh pellentesque, quis iaculis sapien efficitur. Nam tempus quam et neque tempor molestie. Nullam lobortis non nisl eget commodo. Nulla dignissim nisi accumsan efficitur posuere
                        </p>
                    </div>
                </div>
            </main>

        </Layout>
     );
}

export default Nosotros;