import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>POC NextJS</title>
        <meta name="description" content="Proof of concept NextJS SSR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        POC NextJS
      </Typography>
    </div>
  );
}
