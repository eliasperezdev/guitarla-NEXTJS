import Link from "next/link";
import styles from '../styles/NoEncontrado.module.css'
function NoEncontrado() {
    return ( 
           <div className={styles.no_encontrado}>
                <h1 className="heading">Pagina 404 Elias</h1>
                <Link href="/"><a>Volver al inicio</a></Link>
           </div>
     );
}

export default NoEncontrado;