function FormConoceme() {
  return (
    <div className="flex flex-col lg:flex-row h-[40rem]">
      <div className="bg-primary w-full md:w-1/2 text-white p-20">
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
        src="https://static.wixstatic.com/media/6a2275_6c94106eb7d84dbdba8c0571e73ac2ec~mv2.jpg/v1/fill/w_400,h_747,al_bl,q_80,usm_0.66_1.00_0.01,enc_auto/6a2275_6c94106eb7d84dbdba8c0571e73ac2ec~mv2.jpg"
        className="w-full lg:w-1/2 h-full object-cover"
      />
    </div>
  );
}

export default FormConoceme;
