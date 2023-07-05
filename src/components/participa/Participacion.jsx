function Participacion() {
  return (
    <div className="py-28 px-5 lg:px-10">
      <h1 className="text-5xl text-primary">Participa</h1>
      <p className="text-2xl my-5">
        Tu participación es muy importante para mantener la vinculación entre
        gobierno, academia y población.{" "}
      </p>
      <div className="flex flex-col lg:flex-row lg:h-[40rem]">
        <div className="bg-primary w-full md:w-1/2 text-white p-10">
          <h1 className="text-3xl mb-10">¿Quieres unirte? Contáctanos</h1>
          <div className="flex flex-col mb-5">
            <input
              type="text"
              placeholder="Nombre"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="text"
              placeholder="Apellido"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="text"
              placeholder="Correo"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="text"
              placeholder="Compañía/Organización"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex flex-col mb-5">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <button className="btn btn-md bg-white text-primary w-40">
            Submit
          </button>
        </div>
        <img
          src="https://static.wixstatic.com/media/6a2275_3ddf1f5fdc8c4ada91a4e50698a5217e~mv2.jpeg/v1/fill/w_626,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_3ddf1f5fdc8c4ada91a4e50698a5217e~mv2.jpeg"
          className="w-full lg:w-1/2 h-full object-cover lg:p-10"
        />
      </div>
    </div>
  );
}

export default Participacion;
