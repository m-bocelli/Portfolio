import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../index.css';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Layout router={router}>
            <Component {...pageProps} />
        </Layout>
    );
}
