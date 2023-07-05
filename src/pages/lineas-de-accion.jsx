export default function lineasAccion() {
  return (
    <div className="py-28 mx-5 lg:mx-10">
      <h1 className="text-5xl text-primary">Lineas de acción</h1>
      <p className="text-2xl mt-5 text-left">
        Aplicando un método de investigación mixto, se correlacionó la
        información obtenida en el análisis de SEDEMA con la información
        obtenida en la estrategia de “Mapeo de zonas para la conservación” del
        trabajo recepcional de la MGAS de la UV. De está manera se pudieron
        determinar geoespacialmente las zonas vulnerables y los puntos críticos
        de la nanocuenca. Información que se recopiló de primera mano con los
        habitantes de la parte baja de la nanocuenca del río Carneros.
      </p>
      <p className="text-2xl mt-5 text-left">
        Este diagnóstico permitió identificar de manera puntual información
        general y específica sobre las necesidades de la nanocuenca. A partir de
        socializar esta información con la mesa de trabajo, compuesta por
        especialistas y vecinos, se ha realizado una propuesta de acciones, el
        cual es en esencia un Instrumento de Planeación, basado en un formato
        similar al de la Estrategia de Gestión Hídrica del ayuntamiento de
        Xalapa (2019), para atender las problemáticas puntuales que existen.
        <br /> <br />
        Este Instrumento de Planeación ha sido llamado “Plan Integral de
        Saneamiento del río Carneros”, y tiene diferentes estrategias divididas
        por temáticas en común. Atender la fuente del origen de las
        problemáticas existentes fue un factor determinante al desarrollarse las
        propuestas. Por lo que las acciones deben tomar en cuenta la zona de la
        nanocuenca y su función, para lograr restaurar el equilibrio natural y
        los servicios ecosistémicos de la cuenca. <br /> <br /> Se plantean 7
        categorías a modo de organizar y facilitar la información para la
        planificación. Las cuales agrupan los diferentes temas y sectores en
        función de sus áreas temáticas:
      </p>

      <div className="my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl text-primary">Categoría</th>
              <th className="text-2xl text-primary">Descripción</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {/* row 1 */}
            <tr>
              <td className="font-bold">Salud/seguridad</td>
              <td>
                El objetivo es salvaguardar la vida de las persona y garantizar
                la seguridad ante los eventos climáticos de la población
                ribereña
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="font-bold">Medio Ambiente</td>
              <td>
                Restaurar los servicios ecositémicos, proteger la flora y fauna.
                Mitigar los efectos del cambio climático. Sanear el rio y
                recuperar la vida acuática
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="font-bold">Desarrollo Social</td>
              <td>
                Garantizar el derecho aun medio ambiente sano, a mejorar el
                bienestar de las personas y de tansicionar a asentamientos
                humanos sustentables
              </td>
            </tr>
            <tr>
              <td className="font-bold">Gobernanza y políticas públicas</td>
              <td>
                Localizar las políticas públicas, programas de conservación
                convocatorias o reglamentacion pertinente para el saneamiento
                del río
              </td>
            </tr>
            <tr>
              <td className="font-bold">Economía</td>
              <td>
                Incorporar y caracterizar la sustentabilidad económica del
                proyecto con equidad social y calidad ambiental
              </td>
            </tr>
            <tr>
              <td className="font-bold">Educación</td>
              <td>
                A través de programas o proyectos hacer estrategias de educación
                ambiental para conscientizar a la población en materia del agua
              </td>
            </tr>
            <tr>
              <td className="font-bold">Saneamiento</td>
              <td>
                La contaminación del agua del río principal de la nanocuenca e
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
