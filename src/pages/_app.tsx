import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../styles/theme';
import { SidebarDrowerProvider } from '../contexts/SidebarDrowerContext';

if (process.env.NODE_ENV === "development") {
  
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrowerProvider>
        <Component {...pageProps} />
      </SidebarDrowerProvider>
    </ChakraProvider>
  )
}

export default MyApp
