import '../../styles/globals.scss';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
