import Image from "next/image";

function Actividades() {
  return (
    <div className="py-28 px-5 lg:px-10 min-h-screen">
      <h1 className="text-5xl text-primary mb-5">Eventos</h1>
      <p className="text-2xl mb-10">
        Encuentra todos los eventos y actividades en las que puedes participar.
      </p>

      <div className="divider"></div>

      <div className="collapse-title text-center lg:text-left text-4xl">
        No hay eventos próximos
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Actividades;
