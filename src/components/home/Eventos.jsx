function Eventos() {
  return (
    <section className="p-10">
      <div className="flex justify-between">
        <h1 className="text-5xl">Eventos</h1>
        <btn className="btn">Ver todos</btn>
      </div>
      <div className="divider"></div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title  text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Reunión mesa interinstitucional seguimiento
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>hello</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title  text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Reunión mesa interinstitucional seguimiento
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>hello</p>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Eventos;
