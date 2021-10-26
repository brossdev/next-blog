import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
