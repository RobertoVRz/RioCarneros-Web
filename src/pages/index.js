export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://static.wixstatic.com/media/6a2275_55b74a8097dd45f9bb43b364b34a86b1~mv2.jpg/v1/fill/w_1291,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_55b74a8097dd45f9bb43b364b34a86b1~mv2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-5 text-white">
          <h1 className="mb-10 text-5xl md:text-7xl font-bold">¡Muy Pronto!</h1>
          <p className="mb-5 text-2xl md:text-3xl">
            ¡Bienvenido! Nos complace anunciar que muy pronto lanzaremos nuestra
            nueva página web para el río Carneros.
          </p>

          <p className="mb-5 text-2xl md:text-3xl">
            ¡Mantente atento para más detalles próximamente!
          </p>
        </div>
      </div>
    </div>
  );
}
