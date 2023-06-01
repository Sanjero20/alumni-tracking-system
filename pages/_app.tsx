import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '@/context/AuthContext';
import { Nunito_Sans } from 'next/font/google';

const globalFont = Nunito_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BSU Alumni</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <AuthProvider>
        <div className={globalFont.className}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </>
  );
}
