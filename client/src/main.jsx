import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://charts-and-cards-production.up.railway.app",
  cache: new InMemoryCache(),
  formatError: (formattedError, error) => {
    if (formattedError.extensions.code === ApolloServerErrorCode.BAD_REQUEST) {
      return {
        ...formattedError,
        message:
          "An error occurred before your server could attempt to parse the given GraphQL operation.",
      };
    }

    return formattedError;
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
