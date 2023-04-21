import Image from "next/image";

function Hero() {
  return (
    <figure className="w-screen h-[50vh] relative">
      <Image
        src="https://static.wixstatic.com/media/6a2275_55b74a8097dd45f9bb43b364b34a86b1~mv2.jpg/v1/fill/w_1640,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_55b74a8097dd45f9bb43b364b34a86b1~mv2.jpg"
        alt="Hero"
        className="object-cover"
        fill
      />
    </figure>
  );
}

export default Hero;
