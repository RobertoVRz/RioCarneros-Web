export default function Retos() {
  return (
    <div>
      <div className="bg-purple-700 w-1/2 m-5 text-white">
        <div className="m-10">
          <h1 className="text-3xl mb-5">Retos y problemáticas</h1>
          <p>
            Los asentamientos humanos y el crecimiento de la ciudad de Xalapa ha
            impactado enormemente en la situación de la nanocuenca del río
            Carneros. Generando un efecto dominó.
          </p>
        </div>
        <div className="flex flex-wrap m-10">
          <div className="border w-1/2 p-5">
            <h1 className="text-2xl">Ambientales</h1>
            <ul>
              <li>Contaminación del agua por descargas residuales.</li>
              <li>Deforestación.</li>
              <li>Pérdida de la biodiversidad y los servicios ecosistémicos</li>
              <li>
                Sitio de vertedero de basura urbana y restos de construcción.{" "}
              </li>
            </ul>
          </div>
          <div className="border w-1/2 p-5">
            <h1 className="text-2xl">Sociales</h1>
            <ul>
              <li>Vulnerabilidad ante eventos climáticos.</li>
              <li>Pérdidas económicas.</li>
              <li>Falta conciencia ambiental.</li>
              <li>
                Prácticas no sustentables (invasión, tirar basura, etc.).{" "}
              </li>
              <li>Problemas de salud y mal olor.</li>
            </ul>
          </div>
          <div className="border w-1/2 p-5 mb-10">
            <h1 className="text-2xl">Espaciales</h1>
            <ul>
              <li>
                Pérdida de laterales del río dificulta la construcción del
                drenaje en algunas zonas.
              </li>
              <li>
                Falta de protección y conservación de las zonas ribereñas.
              </li>
              <li>Falta de espacios de recreación.</li>
              <li>
                Infraestructura deficiente para la seguridad de la población.{" "}
              </li>
              <li>
                Falta infraestructura para el drenaje de las casas y calles
                alrededor.
              </li>
            </ul>
          </div>
          <div className="border w-1/2 p-5 mb-10">
            <h1 className="text-2xl">Políticos</h1>
            <ul>
              <li>
                Falta de vinculación entre dependencias gubernamentales (en
                materia del río Carneros)
              </li>
              <li>
                Desarticulación en la gestión entre dependencias y ciudadanía.
              </li>
              <li>
                Ambigüedad en las responsabilidades y reglamentación de cada
                dependencia.
              </li>
              <li>Falta de relevancia mediática. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
