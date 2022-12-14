import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        </Head>
        <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode} >
          <Component {...pageProps} />
        </ChakraProvider>
    </>
  )
}

export default MyApp