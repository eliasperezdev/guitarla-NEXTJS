import Entrada from "./Entrada";
import styles from '../styles/Blog.module.css'

function ListadoBlog({entradas}) {
    return (
        <>
            <h2 className="heading"> Blog </h2>
            <div className={styles.blog}>
                {entradas.map(entrada =>( 
                    <Entrada 
                        key={entrada._id} 
                        entrada={entrada}
                    />
                ))}
            </div>
        </>
     );
}

export default ListadoBlog;