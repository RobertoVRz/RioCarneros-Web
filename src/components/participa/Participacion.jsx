function Participacion() {
  return (
    <div>
      <div>
        <h1>Participa</h1>
        <p>
          Tu participación es muy importante para mantener la vinculación entre
          gobierno, academia y población.{" "}
        </p>
      </div>
      <div className="bg-purple-600 w-full md:w-1/2 text-white p-20">
        <h1 className="text-3xl">Queremos saber de ti</h1>
        <div className="flex flex-col mb-5">
          <span className="">Nombre</span>
          <input type="text" className="bg-purple-600 border" />
        </div>
        <div className="flex flex-col mb-5">
          <span className="">Apellido</span>
          <input type="text" className="bg-purple-600 border" />
        </div>
        <div className="flex flex-col mb-5">
          <span className="">Email*</span>
          <input type="email" className="bg-purple-600 border" />
        </div>
        <div className="flex flex-col mb-5">
          <span className="">Teléfono</span>
          <input type="text" className="bg-purple-600 border" />
        </div>
        <div className="flex flex-col">
          <span className="">Mensaje</span>
          <input type="textarea" className="bg-purple-600 border" />
          <button className="btn btn-md bg-white text-purple-700 w-40">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Participacion;
