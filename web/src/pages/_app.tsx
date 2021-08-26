import '../../styles/globals.scss';
import { Layout } from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider, useStore } from 'react-redux';
import store, { wrapper } from '../redux/store';
import { AppContext, AppProps } from 'next/app';
import withRedux, { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
    const r = useRouter();
    const store = useStore();

    // useEffect(() => {
    //     console.log(r);
    // });

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={store.__persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    console.log(pageProps);

    return { pageProps };
};

export default wrapper.withRedux(MyApp);
