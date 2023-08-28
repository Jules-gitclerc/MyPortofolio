import '../styles/globals.css'
import {I18nextProvider} from 'react-i18next';
import i18n from '../i18next';
import {HydrationProvider, Client} from "react-hydration-provider";

function MyApp({Component, pageProps}) {
    return (
        <HydrationProvider>
            <Client>
                <I18nextProvider i18n={i18n}>
                    <Component {...pageProps} />
                </I18nextProvider>
            </Client>
        </HydrationProvider>
    );
}

export default MyApp;
