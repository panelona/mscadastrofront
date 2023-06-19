import {ThemeProvider} from '@mui/material/styles';
import theme from '../utils/theme';

import {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    return (

        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>


    );
}

export default MyApp;