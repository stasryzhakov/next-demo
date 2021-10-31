import { Layout } from '../components/Layout';

import '../../styles/globals.scss';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
