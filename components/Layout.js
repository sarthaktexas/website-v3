import Head from '../components/Head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Layout({heading, children}) {
    return (
        <div className="text-white pointer-events-none">
            <Head />
            <main className="my-10 md:mt-20 md:mb-10 px-10 md:px-0 md:w-1/2 mx-auto">
                <section className="flex flex-col space-y-5">
                    <h1 className="font-bold text-5xl">{heading}</h1>
                    <Nav />
                    {children}
                </section>
                <Footer />
            </main>
        </div>
    )
}