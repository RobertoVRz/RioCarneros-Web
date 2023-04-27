import Head from "next/head";
import Hero from "@/components/conoceme/Hero";
import SabiasQue from "@/components/conoceme/SabiasQue";
import Retos from "@/components/conoceme/Retos";
import Vulnerabilidad from "@/components/conoceme/Vulnerabilidad";

export default function Conoceme() {
  return (
    <>
      <Head>
        <title>Río Carneros | Conóceme</title>
        <meta name="description" content="Río Carneros | Conóceme" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <Hero />
        <SabiasQue />
        <Retos />
        <Vulnerabilidad />
      </div>
    </>
  );
}
