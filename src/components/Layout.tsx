import Head from 'next/head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import type { Router } from 'next/router';

interface LayoutProps {
    children: React.ReactNode;
    router: Router;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>MB Portfolio</title>
            </Head>
            <Navbar path={props.router.asPath} />
            <main>{props.children}</main>
            <Footer year={2024}>Michael Bocelli. All Rights Reserved.</Footer>
        </>
    );
}
