import "@/styles/globals.css";
import { barlow } from "@/fonts";
import Layout from "@/layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout className={barlow.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
