import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { CartProvider } from "../context/CartContext";
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes/theme";
import GlobalStyles from "../styles/global";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <GlobalStyles />
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
