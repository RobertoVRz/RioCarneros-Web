import Image from "next/image";

function Actividades() {
  return (
    <div>
      <h1 className="text-3xl">Eventos</h1>
      <p>
        Encuentra todos los eventos y actividades en las que puedes participar.
      </p>
      <div className="">
        <Image src="" alt="" />
        <div className="">
          <p>jue 15 de jun | A determinar</p>
          <h1>Reunión mesa interinstitucional seguimiento</h1>
          <p>Seguiento de las líneas de acción, actividades y gestión.</p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
      <div className="">
        <Image src="" alt="" />
        <div className="">
          <p>mié 22 de nov | A determinar</p>
          <h1>Recorrido "Fografías del río Carneros"</h1>
          <p>
            Un breve taller de composición de fotografía aplicado. Lograrás
            capturar los mejores ángulos de la vegetación que sobrevive ante un
            ambiente urbano a veces hostil por la contaminación del agua.
          </p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Actividades;
