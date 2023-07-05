export default function Vulnerabilidad() {
  return (
    <div className="my-10 mx-5 lg:mx-10">
      <h1 className="text-primary text-5xl text-center lg:text-left my-10">
        Zona de vulnerabilidad ante cambio climático
      </h1>
      <div className="flex flex-wrap">
        <div className="border border-black w-full md:w-1/2 p-10 text-justify">
          <h1 className="text-3xl mb-5 text-center lg:text-left">
            Contaminación severa
          </h1>
          <p className="text-xl mb-5">
            De acuerdo a un estudio de la calidad del agua del río Carneros,
            realizado por Olguín Eugenia, et. al en el 2017. Los valores de los
            parámetros monitoreados, excedieron de manera muy significativa, a
            los límites permitidos para la vida acuática de acuerdo a los
            criterios de la USEPA.
          </p>
          <p className="text-xl mb-5">
            Debido a la pésima calidad del agua encontrada en toda la Subcuenca
            del Río Sordo, es urgente que las autoridades aceleren la
            construcción de colectores de aguas residuales y el tratamiento de
            las mismas en el noroeste de la ciudad de Xalapa, para así evitar
            que el río Carneros degrade de manera significativa la calidad del
            agua del río Sordo.
          </p>
        </div>
        <div className="border border-black w-full md:w-1/2 p-10 text-justify">
          <h1 className="text-3xl mb-5 text-center lg:text-left">
            Pérdida de servicios ambientales
          </h1>
          <p className="text-xl mb-5">
            Ante el crecimiento de la urbe y la pérdida del arbolado y
            vegetación, la capacidad de la cuenca de proveer de los servicios
            ecosistémicos como son la provisión de recursos, regulación
            atmosférica y del clima, regulación hidrológica, control de la
            contaminación y de la erosión, y control de inundaciones; servicios
            culturales, entre otros se encuentran comprometidos debido a las
            prácticas de gestión del pasado.
          </p>
          <p className="text-xl mb-5">
            Lo que pone en riesgo la seguridad de los habitantes de Xalapa y del
            estado de Veracruz.
          </p>
        </div>
      </div>
    </div>
  );
}
