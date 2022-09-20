import "../styles/globals.css";
import React, { useState, useEffect, useCallback } from "react";
import type { AppProps } from "next/app";

// @Layout
import AppLayout from "Layout/AppLayout";

// @components
import Loading from "components/loading";

// @context
import { SupplyContext, useSupplyContext } from "context/SupplyContext";

// @AOS
import AOS from "aos";
import "aos/dist/aos.css";

// @near
import { initContract } from "near/utils";

//----------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(true);
  const [inited, setInited] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    window.nearInitPromise = initContract()
      .then(() => setInited(true))
      .catch(console.error);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const getTotalSupply = useCallback(async () => {
    const num = await window?.contract?.nft_total_supply();
    setTotalSupply(num);
    getTotalSupply();
  }, []);

  useEffect(() => {
    getTotalSupply();
  }, [getTotalSupply]);

  return (
    <SupplyContext.Provider value={{ totalSupply }}>
      {inited ? (
        loaded ? (
          <Loading />
        ) : (
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        )
      ) : (
        <></>
      )}
    </SupplyContext.Provider>
  );
}

export default MyApp;
