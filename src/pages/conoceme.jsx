import React from "react";
import Hero from "@/components/conoceme/Hero";
import SabiasQue from "@/components/conoceme/SabiasQue";
import Retos from "@/components/conoceme/Retos";
import Vulnerabilidad from "@/components/conoceme/Vulnerabilidad";

export default function Conoceme() {
  return (
    <div>
      <Hero />
      <SabiasQue />
      <Retos />
      <Vulnerabilidad />
    </div>
  );
}
