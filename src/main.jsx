import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BiddingContext } from "./context/Context.mjs";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.mjs";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const Root = () => {
  const [bidding, setBidding] = useState([]);

  const biddingContextValue = {
    bidding,
    setBidding,
  };

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BiddingContext.Provider value={biddingContextValue}>
            <App />
          </BiddingContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
