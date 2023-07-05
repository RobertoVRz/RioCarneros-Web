import React from "react";

export default function guardianesDelRio() {
  return (
    <div className="py-28 px-5 lg:px-10">
      <h1 className="text-5xl text-primary">Guardianes del río</h1>
      <p className="text-2xl my-5">
        Una población reparando su tejido social a través de las redes que se
        establecieron en los últimos años en esta zona baja de la nanocuenca.
      </p>
      <div className="flex flex-col lg:flex-row">
        <img
          src="https://static.wixstatic.com/media/6a2275_6984b46d371b408eaf07ccefbad18d73~mv2.jpeg/v1/fill/w_856,h_574,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a2275_6984b46d371b408eaf07ccefbad18d73~mv2.jpeg"
          alt="Guardianes del río"
          className="w-full lg:w-1/2"
        />

        <p className="text-2xl my-5 lg:pl-5">
          Hay antecedentes de formación de redes vecinales, mediante Patronatos,
          que se han organizado para limpiar ciertas zonas del río.
          <br />
          <br /> El interés de estas redes vecinales evolucionó para buscar
          estrategias de preservación/conservación del territorio.
          <br />
          <br /> Actualmente se encuentran trabajando en otros proyectos
          internos en beneficio de la comunidad.
        </p>
      </div>
      <h1 className="text-5xl text-primary mt-10">Nuestro trabajo</h1>
      <p className="text-2xl my-5">
        El bienestar de la población va de la mano con el saneamiento de la
        nanocuenca. En una relación equilibrada ambas ambiente y personas, se
        encuentran en expansión hacia formas de vida donde participan
        activamente sus miembros en un entorno de respeto y con la voluntad de
        resolver problemáticas en conjunto. ​
        <br /> <br />
        Coordinándose entre vecinos, dependencias gubernamentales y gestores de
        la academia los Guardianes del río se organizan para mejorar las
        condiciones de la comunidad y la nanocuenca.
      </p>
      <div className="flex flex-col-reverse lg:flex-row mt-20">
        <div>
          <h1 className="text-5xl text-primary mt-10">Misión</h1>
          <p className="text-2xl my-5">
            Lograr el saneamiento de la nanocuenca del río Carneros y mejorar
            las condiciones de vida de todos los habitantes de ella.
          </p>

          <h1 className="text-5xl text-primary mt-10">Visión</h1>
          <p className="text-2xl my-5">
            Servir como un referente de gestión en conjunto con diferentes
            niveles de gobierno, la sociedad civil y la academia.
          </p>

          <h1 className="text-5xl text-primary mt-10">Valores</h1>
          <ul className="text-2xl my-5 list-disc list-inside lg:flex flex-wrap flex-none">
            <li className="mx-auto">Bienestar</li>
            <li className="mx-auto">Unión</li>
            <li className="mx-auto">Respeto</li>
            <li className="mx-auto">Organización</li>
            <li className="mx-auto">Voluntad</li>
          </ul>
        </div>
        <img
          src="https://static.wixstatic.com/media/6a2275_f146951138744c4ea7adf130d2690316~mv2.jpg/v1/fill/w_983,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6a2275_f146951138744c4ea7adf130d2690316~mv2.jpg"
          alt="Guardianes del río "
          className="w-full lg:w-1/2 lg:p-6 object-cover"
        />
      </div>
    </div>
  );
}
