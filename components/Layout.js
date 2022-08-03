import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";



function Layout({children, pagina, guitarra}) {
    return ( 
    <div>
        <Head>
            <title>Guitar LA - {pagina}</title>
            <meta name="description" content="Sitio de ventas de guitarras" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap" rel="stylesheet"/>      
        </Head>
        <Header
            guitarra={guitarra}
        />
        {children}
        <Footer/>
    </div> );
}
Layout.defaultProps = {
    guitarra: null
}

export default Layout;