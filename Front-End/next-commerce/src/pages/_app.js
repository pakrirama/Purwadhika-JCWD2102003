import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import rootReducers from "../Redux/store";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Cookie from "../Layout/Cookie";

const store = configureStore({ reducer: rootReducers });

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Cookie>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Cookie>
    </Provider>
  );
}

export default MyApp;
