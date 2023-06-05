import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Nunito_Sans } from 'next/font/google';
import AuthWrapper from '@/services/auth/AuthWrapper';

const globalFont = Nunito_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BSU Alumni</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className={globalFont.className}>
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      </div>
    </>
  );
}
