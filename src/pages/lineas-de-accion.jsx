export default function lineasAccion() {
  return (
    <div>
      <h1>Lineas de acción</h1>
      <p className="text-justify">
        Se parió un documento donde se sintetizan las líneas de acción
        propuestas por categorías, las cuales atienden las problemáticas vistas
        en el diagnóstico. La tabla sintetiza las propuestas generales para ir
        abordando las problemáticas mayores e ir transitando hacia el desarrollo
        de un Plan Ejecutivo que tenga las líneas de acción aterrizadas en
        actividades puntuales con los actores involucrados.{" "}
      </p>
      <div className="overflow-x-auto m-10 w-2/3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Categoría</th>
              <th className="text-lg">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Salud/seguridad</td>
              <td>
                El objetivo es salvaguardar la vida de las persona y garantizar
                la seguridad ante los eventos climáticos de la población
                ribereña
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Medio Ambiente</td>
              <td>
                Restaurar los servicios ecositémicos, proteger la flora y fauna.
                Mitigar los efectos del cambio climático. Sanear el rio y
                recuperar la vida acuática
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Desarrollo Social</td>
              <td>
                Garantizar el derecho aun medio ambiente sano, a mejorar el
                bienestar de las personas y de tansicionar a asentamientos
                humanos sustentables
              </td>
            </tr>
            <tr>
              <td>Gobernanza y políticas públicas</td>
              <td>
                Localizar las políticas públicas, programas de conservación
                convocatorias o reglamentacion pertinente para el saneamiento
                del río
              </td>
            </tr>
            <tr>
              <td>Economía</td>
              <td>
                Incorporar y caracterizar la sustentabilidad económica del
                proyecto con equidad social y calidad ambiental
              </td>
            </tr>
            <tr>
              <td>Educación</td>
              <td>
                A través de programas o proyectos hacer estrategias de educación
                ambiental para conscientizar a la población en materia del agua
              </td>
            </tr>
            <tr>
              <td>Saneamiento</td>
              <td>
                la contaminación del agua del río principal de la nanocuenca e
                incluso de sus corrientes sólo podrá ser atendida dándole
                tratamiento a las aguas residuales de los habitantes de Xalapa y
                el estado de Veracruz
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
