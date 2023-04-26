import "@/styles/globals.css";
import { Barlow } from "next/font/google";
import Layout from "@/layouts/Layout";

const barlow = Barlow({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={barlow.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
