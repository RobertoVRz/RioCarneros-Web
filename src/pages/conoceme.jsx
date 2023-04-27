import Hero from "@/components/conoceme/Hero";
import Historia from "@/components/conoceme/Historia";
import Head from "next/head";

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
        <Historia />
      </div>
    </>
  );
}
