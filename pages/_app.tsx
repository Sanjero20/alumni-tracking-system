import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AuthWrapper from '@/services/auth/AuthWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BSU Alumni</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </>
  );
}
