import React from "react";

export default function SabiasQue() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <h1 className="text-4xl mx-10">
          Nuestra historia ha cambiado los espacios del río.
        </h1>
        <div className="m-5">
          <p>
            De acuerdo con el diagnóstico de la Global Water Watch México, el
            río Carneros se alimenta de manantiales y pequeños arroyos que se
            ubican arriba del barrio de San Bruno.
          </p>
          <p>
            Su cauce original llevaba sus aguas hacia el sureste de la ciudad,
            casi de manera paralela a la Av. Ruiz Cortines. Ahí alimentaba el
            primer lago, donde estaban ubicadas unas tenerías -lo que de antaño
            fue la casa de artesanías, y la fábrica de hilados-, actualmente se
            encuentran los juegos del DIF, después corría por donde ahora se
            está la USBI hasta entroncar con el río Sordo antes de llegar a
            Pacho Viejo.
          </p>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-2xl mb-5 text-primary">¿Sabías qué?</h1>
        <p>
          La corriente principal del río carneros nace en le municipio de
          Tlalnelhuayocan y tiene una longitud de 16.3 km.
        </p>
        <p>
          La nanocuenca tiene una superficie de 1,772 hectáreas (ha), el 60%
          (1,064 ha) se encuentran dentro de la localidad de Xalapa.
        </p>
        <p>Cuenca con 101 km de corrientes superficiales.</p>
      </div>
    </>
  );
}
