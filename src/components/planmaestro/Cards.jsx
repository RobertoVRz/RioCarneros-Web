import Image from "next/image";
import Link from "next/link";

function Cards() {
  return (
    <div className="flex flex-col md:flex-row p-5">
      <div className="card lg:w-1/2 bg-base-100 shadow-xl image-full mb-10 lg:mb-0 mx-5">
        <figure>
          <Image
            src="https://static.wixstatic.com/media/6a2275_6b4d2ffc08b14900ad5bdf5464d6c636~mv2.jpeg/v1/fill/w_315,h_520,al_c,q_80,enc_auto/6a2275_6b4d2ffc08b14900ad5bdf5464d6c636~mv2.jpeg"
            fill
            className="rounded-lg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-4xl">Diagnostico</h1>
          <p className="text-2xl">
            Resultado de ls colaboración entre academia y gobierno se realizó un
            diagnóstico de la nanocuenca.{" "}
          </p>
          <div className="card-actions justify-end">
            <Link href="/diagnostico">
            <button className="btn btn-primary">Leer más</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card lg:w-1/2 bg-base-100 shadow-xl image-full  mx-5">
        <figure>
          <Image
            src="https://static.wixstatic.com/media/6a2275_4383f8fc0df04da29fa7e06b00f794dd~mv2.jpg/v1/fill/w_489,h_805,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_4383f8fc0df04da29fa7e06b00f794dd~mv2.jpg"
            alt="Shoes"
            fill
            className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-4xl">Lineas de acción</h1>
          <p className="text-2xl">
            Son parte del instrumento de planeación para el saneamiento del Río
            Carneros.{" "}
          </p>
          <div className="card-actions justify-end">
            <Link href="/lineas-de-accion">
            <button className="btn btn-primary">Leer más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

/*

<div className="card card-side bg-base-100 shadow-xl h-96 w-full">
        <figure>
          <img
            src="https://static.wixstatic.com/media/6a2275_6b4d2ffc08b14900ad5bdf5464d6c636~mv2.jpeg/v1/fill/w_315,h_520,al_c,q_80,enc_auto/6a2275_6b4d2ffc08b14900ad5bdf5464d6c636~mv2.jpeg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Diagnostico</h1>
          <p>
            Resultado de ls colaboración entre academia y gobierno se realizó un
            diagnóstico de la nanocuenca.{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Leer más</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl h-96 w-full">
        <figure>
          <img
            src="https://static.wixstatic.com/media/6a2275_4383f8fc0df04da29fa7e06b00f794dd~mv2.jpg/v1/fill/w_489,h_805,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_4383f8fc0df04da29fa7e06b00f794dd~mv2.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Lineas de acción</h1>
          <p>
            Resultado de ls colaboración entre academia y gobierno se realizó un
            diagnóstico de la nanocuenca.{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Leer más</button>
          </div>
        </div>
      </div>
*/
