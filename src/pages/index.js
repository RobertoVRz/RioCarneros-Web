import Head from "next/head";
import Hero from "@/components/home/Hero";
import Comunidad from "@/components/home/Comunidad";
import Eventos from "@/components/home/Eventos";
import Guardianes from "@/components/home/Guardianes";

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
        <Eventos />
        <Guardianes />
      </div>
    </>
  );
}
