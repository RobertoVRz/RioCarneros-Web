function Eventos() {
  return (
    <section className="p-10">
      <div className="flex justify-between">
        <h1 className="text-5xl text-primary">Eventos</h1>
        <button className="btn btn-primary btn-outline lg:btn-wide font-bold">
          Ver todos
        </button>
      </div>
      <div className="divider"></div>

      <div className="collapse-title text-center lg:text-left text-4xl">No hay eventos próximos</div>
      <div className="divider"></div>
    </section>
  );
}

export default Eventos;
