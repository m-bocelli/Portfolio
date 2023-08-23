import Head from 'next/head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>MB Portfolio</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
