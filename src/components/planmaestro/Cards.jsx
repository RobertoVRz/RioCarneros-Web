import Image from "next/image";

function Cards() {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div className="card w-84 md:w-96 bg-base-100 shadow-xl image-full m-2 md:m-10">
        <figure>
          <Image
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            width={350}
            height={350}
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
      <div className="card w-84 md:w-96 bg-base-100 shadow-xl image-full m-2 md:m-10">
        <figure>
          <Image
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            width={350}
            height={350}
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
    </div>
  );
}

export default Cards;
