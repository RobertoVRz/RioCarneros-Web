import Image from "next/image";

function Guardianes() {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-10">
      <figure className="lg:w-[30vw] h-[50vh] relative">
        <Image
          src="https://static.wixstatic.com/media/6a2275_6ad1d29895d84a4db53f6aae385dddbb~mv2.jpg/v1/fill/w_417,h_664,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/6a2275_6ad1d29895d84a4db53f6aae385dddbb~mv2.jpg"
          fill
          alt="Rio Carneros"
          className="object-cover "
        />
      </figure>
      <div className="p-7 card rounded-none lg:w-[30vw] h-[50vh] bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-2xl font-light">Somos</h2>
          <p className="text-3xl font-light">
            Los que conformamos al territorio, nuestras relaciones y la relación
            con el ambiente que habitamos.
          </p>
          <div className="card-actions justify-start mt-5">
            <button className="btn">Guardianes del río Carneros</button>
          </div>
        </div>
      </div>
      <figure className="lg:w-[30vw] h-[50vh] relative">
        <Image
          src="https://static.wixstatic.com/media/6a2275_34bdc6ea46404c3dbeb5a4fa1a167ee4~mv2.jpg/v1/fill/w_363,h_577,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6a2275_34bdc6ea46404c3dbeb5a4fa1a167ee4~mv2.jpg"
          fill
          alt="Rio Carneros"
          className="object-cover object-top"
        />
      </figure>
    </div>
  );
}

export default Guardianes;
