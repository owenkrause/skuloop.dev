import Head from 'next/head'
import '/styles/App.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>skuloop</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="personal website"/>
        <link rel="icon" type="image/png" href="../pixel-brick.png" />
        <link rel="apple-touch-icon" href="../pixel-brick.png" />
        <link rel="canonical" href="https://skuloop.dev" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp