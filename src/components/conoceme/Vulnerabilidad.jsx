export default function Vulnerabilidad() {
  return (
    <div>
      <h1 className="text-purple-700 text-3xl">
        Zona de vulnerabilidad ante cambio climático
      </h1>
      <div className="flex flex-wrap m-10">
        <div className="border border-black w-1/2 p-10">
          <h1 className="text-2xl">Contaminación severa</h1>
          <p>
            De acuerdo a un estudio de la calidad del agua del río Carneros,
            realizado por Olguín Eugenia, et. al en el 2017. Los valores de los
            parámetros monitoreados, excedieron de manera muy significativa, a
            los límites permitidos para la vida acuática de acuerdo a los
            criterios de la USEPA.
          </p>
          <p>
            Debido a la pésima calidad del agua encontrada en toda la Subcuenca
            del Río Sordo, es urgente que las autoridades aceleren la
            construcción de colectores de aguas residuales y el tratamiento de
            las mismas en el noroeste de la ciudad de Xalapa, para así evitar
            que el río Carneros degrade de manera significativa la calidad del
            agua del río Sordo.
          </p>
        </div>
        <div className="border border-black w-1/2 p-10">
          <h1 className="text-2xl">Pérdida de servicios ambientales</h1>
          <p>
            Ante el crecimiento de la urbe y la pérdida del arbolado y
            vegetación, la capacidad de la cuenca de proveer de los servicios
            ecosistémicos como son la provisión de recursos, regulación
            atmosférica y del clima, regulación hidrológica, control de la
            contaminación y de la erosión, y control de inundaciones; servicios
            culturales, entre otros se encuentran comprometidos debido a las
            prácticas de gestión del pasado.
          </p>
          <p>
            Lo que pone en riesgo la seguridad de los habitantes de Xalapa y del
            estado de Veracruz.
          </p>
        </div>
      </div>
    </div>
  );
}
