import Image from "next/image";

function Comunidad() {
  return (
    <div className="p-10 bg-base-100">
      <h1 className="text-5xl text-primary">
        Bienvenido a la comunidad de la nanocuenca del río Carneros
      </h1>
      <p className="py-6 text-2xl">
        Espacio de diálogo colectivo, gestión y vinculación para el saneamiento
        de este hermoso cuerpo de agua.
      </p>
      <div className="flex">
        <Image
          src="https://static.wixstatic.com/media/6a2275_9d1fb2def0654069ab5a0d05dd2c1a5f~mv2.jpg/v1/fill/w_596,h_532,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6a2275_9d1fb2def0654069ab5a0d05dd2c1a5f~mv2.jpg"
          width={500}
          height={500}
          alt="Rio Carneros"
        />
        <div className="card rounded-none m-10 p-10 w-full bg-primary h-full text-white">
          <div className="card-body">
            <h2 className="card-title text-2xl font-light">Sabemos que</h2>
            <p className="text-3xl font-regular">
              La recuperación ambiental no está en manos de una sola persona o
              institución, sino que es un proceso de cambio y planeación en
              conjunto.{" "}
            </p>
            <div className="card-actions justify-start mt-5">
              <button className="btn text-morado">
                Conoce el plan maestro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunidad;
