
import Link from 'next/link'
import Curso from '../components/Curso'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'
import ListadoTienda from '../components/ListadoTienda'

export default function Home({guitarras, curso, entradas}) {
  console.log(entradas);
  return (
    <div className="">
      <Layout
        pagina="Inicio"
        guitarra={guitarras[3]}
      >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra coleccion</h1>
        <ListadoTienda guitarras={guitarras}/>
      </main>
      <Curso curso={curso}/>

      <section className='contenedor'>
         <ListadoBlog entradas={entradas}/>
      </section>
      </Layout>

    </div>
  )
}


//Forma de realizar multiples consultas
export async function getServerSideProps ({query: {_id}}) {

  const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/guitarras`
  const urlCursos = `${process.env.NEXT_PUBLIC_API_URL}/cursos`
  const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=3&_sort=created_at:desc` 


  const [resGuitarras, resCursos, resBlog] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCursos),
      fetch(urlBlog)
  ]) 

  const [guitarras, curso, entradas] = await Promise.all([
      resGuitarras.json(),
      resCursos.json(),
      resBlog.json()

  ])
  return {
      props: {
          guitarras,
          curso,
          entradas
      }
  }
}