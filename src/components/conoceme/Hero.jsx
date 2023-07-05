function Hero() {
  return (
    <div className="mb-10 px-5 lg:px-10">
      <h1 className="text-5xl text-primary">¡Hola! Soy el río Carneros</h1>
      <p className="py-6 text-2xl">
        Soy parte de la gran cuenca río la Antigua, una región hidrológica
        prioritaria, según CONABIO, ubicada en la parte central del estado de
        Veracruz.
      </p>

      <img
        src="https://static.wixstatic.com/media/6a2275_55b74a8097dd45f9bb43b364b34a86b1~mv2.jpg/v1/fill/w_1149,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_55b74a8097dd45f9bb43b364b34a86b1~mv2.jpg"
        className="w-full h-96 object-cover"
      />
    </div>
  );
}

export default Hero;
