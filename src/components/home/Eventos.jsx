function Eventos() {
  return (
    <section className="p-10">
      <div className="flex justify-between">
        <h1 className="text-5xl text-primary">Eventos</h1>
        <button className="btn">Ver todos</button>
      </div>
      <div className="divider"></div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-4xl">
          Reunión mesa interinstitucional seguimiento
        </div>
        <div className="collapse-content text-2xl">
          <p>hello</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-4xl">
          Reunión mesa interinstitucional seguimiento
        </div>
        <div className="collapse-content text-2xl">
          <p>hello</p>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Eventos;
