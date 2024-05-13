import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

 

export default function App({ Component, pageProps }: AppProps) {
  return (
      <React.StrictMode>
              <Component {...pageProps} />
          <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
          <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
      </React.StrictMode>
  );
}
