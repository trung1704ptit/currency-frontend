import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import 'antd/dist/antd.less';
import '../components/Layout.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const AppLayout = dynamic(() => import('../components/Layout'), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Currency converter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
