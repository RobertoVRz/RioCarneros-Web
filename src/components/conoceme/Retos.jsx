export default function Retos() {
  return (
    <div>
      <div className="bg-primary w-full text-white">
        <div className="p-10">
          <h1 className="text-5xl mb-5">Retos y problemáticas</h1>
          <p className="text-2xl mt-2">
            Los asentamientos humanos y el crecimiento de la ciudad de Xalapa ha
            impactado enormemente en la situación de la nanocuenca del río
            Carneros. Generando un efecto dominó.
          </p>
        </div>
        <div className="flex flex-wrap mx-5 lg:mx-10">
          <div className="border w-full md:w-1/2 p-10">
            <h1 className="text-3xl mb-5">Ambientales</h1>
            <ul>
              <li className="mb-2 text-xl list-disc">
                Contaminación del agua por descargas residuales.
              </li>
              <li className="mb-2 text-xl list-disc">Deforestación.</li>
              <li className="mb-2 text-xl list-disc">
                Pérdida de la biodiversidad y los servicios ecosistémicos
              </li>
              <li className="mb-2 text-xl list-disc">
                Sitio de vertedero de basura urbana y restos de construcción.{" "}
              </li>
            </ul>
          </div>
          <div className="border w-full md:w-1/2 p-10">
            <h1 className="text-3xl mb-5">Sociales</h1>
            <ul>
              <li className="mb-2 text-xl list-disc">
                Vulnerabilidad ante eventos climáticos.
              </li>
              <li className="mb-2 text-xl list-disc">Pérdidas económicas.</li>
              <li className="mb-2 text-xl list-disc">
                Falta conciencia ambiental.
              </li>
              <li className="mb-2 text-xl list-disc">
                Prácticas no sustentables (invasión, tirar basura, etc.).{" "}
              </li>
              <li className="mb-2 text-xl list-disc">
                Problemas de salud y mal olor.
              </li>
            </ul>
          </div>
          <div className="border w-full md:w-1/2 p-10 md:mb-10">
            <h1 className="text-3xl mb-5">Espaciales</h1>
            <ul>
              <li className="mb-2 text-xl list-disc">
                Pérdida de laterales del río dificulta la construcción del
                drenaje en algunas zonas.
              </li>
              <li className="mb-2 text-xl list-disc">
                Falta de protección y conservación de las zonas ribereñas.
              </li>
              <li className="mb-2 text-xl list-disc">
                Falta de espacios de recreación.
              </li>
              <li className="mb-2 text-xl list-disc">
                Infraestructura deficiente para la seguridad de la población.{" "}
              </li>
              <li className="mb-2 text-xl list-disc">
                Falta infraestructura para el drenaje de las casas y calles
                alrededor.
              </li>
            </ul>
          </div>
          <div className="border w-full md:w-1/2 p-10 mb-10 md:mb-10">
            <h1 className="text-3xl mb-5">Políticos</h1>
            <ul>
              <li className="mb-2 text-xl list-disc">
                Falta de vinculación entre dependencias gubernamentales (en
                materia del río Carneros)
              </li>
              <li className="mb-2 text-xl list-disc">
                Desarticulación en la gestión entre dependencias y ciudadanía.
              </li>
              <li className="mb-2 text-xl list-disc">
                Ambigüedad en las responsabilidades y reglamentación de cada
                dependencia.
              </li>
              <li className="mb-2 text-xl list-disc">
                Falta de relevancia mediática.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
