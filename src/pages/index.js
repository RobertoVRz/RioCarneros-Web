import Head from "next/head";
import Hero from "@/components/home/Hero";
import Comunidad from "@/components/home/Comunidad";

export default function Home() {
  return (
    <>
      <Head>
        <title>Río Carneros</title>
        <meta
          name="description"
          content="Tiger Gloves | Guantes 100% Mexicanos "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <Hero />
        <Comunidad />
      </div>
    </>
  );
}
