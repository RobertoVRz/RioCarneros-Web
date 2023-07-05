import React from "react";

export default function diagnostico() {
  return (
    <div className="text-justify">
      <div className="flex flex-col md:flex-row">
        <div className="m-12 w-3/4 md:w-1/2">
          <h1 className="mb-5 text-2xl">Diagnostico</h1>
          <p className="mb-5">
            La investigación por parte de la Maestría en Gestión Ambiental para
            la Sustentabilidad y la SEDEMA de trabajo de recopilación de datos
            en campo, imágenes satelitales y una gran cantidad de análisis de
            datos recopilados de toda la nanocuenca. Permitieron el desarrollo
            de un diagnóstico e información indispensable para caracterizar el
            territorio.
          </p>
          <p>
            Se identificaron las zonas funcionales de la nanocuenca, que se
            dividen en alta donde se da la captación de agua, en la zona media
            hay un incremento en el almacenamiento de agua que pasa a la zona
            baja o de descarga.{" "}
          </p>
        </div>
        <div className="w-1/2 m-5 md:m-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Zona funcional</th>
                <th>Msnm</th>
                <th>ha</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Alta (captación)</td>
                <td>1,615 - 1,925</td>
                <td>291</td>
                <td>16%</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Media(almacenamiento)</td>
                <td>1,450 - 1,614</td>
                <td>706</td>
                <td>40%</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Baja(descarga)</td>
                <td>1,361 - 1,449</td>
                <td>776</td>
                <td>44%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-5">
        <p className="m-5">
          También con análisis de datos topográficos que permiten conocer el
          relieve de la zona y tener información precisa de donde están las
          escorrentías que alimentan al cauce principal del río Carneros y las
          zonas propensas a derrumbes.
        </p>
        <p className="m-5">
          El 68% de la cuenca con pendientes susceptibles a deslizamientos de
          ladera (deslaves).
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="m-5">
          <p className="m-5">
            Al ser la parte baja donde se descarga el agua -ahora sin ser
            retenida por la vegetación por el crecimiento de la ciudad-.
          </p>
          <p className="m-5">
            Es donde existe la mayor cantidad de problemáticas ante las
            consecuencias de la pérdida de los servicios ecosistémicos que
            provee la vegetación.
          </p>
          <p className="m-5">
            12 hectáreas arboladas perdidas en 20 años. 64% (1,133 ha) de la
            nanocuenca sin arbolado.
          </p>
        </div>
        <div className="w-1/2 m-2 md:m-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Zona funcional</th>
                <th>Pérdida forestal 2001-2020 (ha)</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Alta o de captación</td>
                <td>2</td>
                <td>12%</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Media o de almacenamiento</td>
                <td>7</td>
                <td>59%</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Baja o de descarga</td>
                <td>4</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
          <div className="w-1/2 m-2 md:m-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Zona funcional</th>
                  <th>Análisis</th>
                  <th>Superficie(ha)</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td rowSpan={4}>Alta</td>
                  <td>Arbolado denso</td>
                  <td>98</td>
                  <td>34%</td>
                </tr>
                <tr>
                  <td>Arbolado</td>
                  <td>109</td>
                  <td>38%</td>
                </tr>
                <tr>
                  <td>Sin arbolado</td>
                  <td>83</td>
                  <td>29%</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>291</td>
                  <td>100%</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td rowSpan={4}>Medio</td>
                  <td>Arbolado denso</td>
                  <td>146</td>
                  <td>21%</td>
                </tr>
                <tr>
                  <td>Arbolado</td>
                  <td>111</td>
                  <td>16%</td>
                </tr>
                <tr>
                  <td>Sin arbolado</td>
                  <td>449</td>
                  <td>64%</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>706</td>
                  <td>100%</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td rowSpan={4}>Medio</td>
                  <td>Arbolado denso</td>
                  <td>122</td>
                  <td>16%</td>
                </tr>
                <tr>
                  <td>Arbolado</td>
                  <td>52</td>
                  <td>7%</td>
                </tr>
                <tr>
                  <td>Sin arbolado</td>
                  <td>601</td>
                  <td>78%</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>776</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto m-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Zona alta</th>
              <th>Zona media</th>
              <th>Zona baja</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Reforestación</td>
              <td>Reforestación ribereña</td>
              <td>Desazolve del río</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Agroforestería</td>
              <td>Talleres de sensibilidad ambiental</td>
              <td>Limpieza de tragatormentas y alcantarillas</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Talleres de sensibilidad ambiental</td>
              <td>
                Aplicar(generar) reglamentos de medio ambiente y/o seguridad
              </td>
              <td>Estabilización de taludes</td>
            </tr>
            <tr>
              <td>
                Aplicar(generar) reglamentos de medio ambiente y/o seguridad
              </td>
              <td>Infraestrucura(aguas residuales)</td>
              <td>Prevención de deslizamiento</td>
            </tr>
            <tr>
              <td>Establecimiento de parques lineales</td>
              <td>Reparación de infraestructura</td>
              <td>Reforestación urbana ribereña y en taludes</td>
            </tr>
            <tr>
              <td>
                Permanencia o generación de mesa de trabajo interinstitucional
              </td>
              <td>
                Permanencia o generación de mesa de trabajo interinstitucional
              </td>
              <td>Humedal artificial</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Talleres de senbilización ambiental</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Talleres de manejo de residuos</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Ubicación de contenedores para residuos</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                Aplicar(generar) reglamentos de medio ambiente y/o seguridad
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Infraestrucura(aguas residuales)</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Reparación de infraestructura</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Establecimiento de parques lineales</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                Permanencia o generación de mesa de trabajo interinstitucional
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
