import "@/styles/globals.scss";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { Header } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
