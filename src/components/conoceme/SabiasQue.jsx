export default function SabiasQue() {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-5 lg:mx-10 my-10">
        <h1 className="text-5xl text-primary mb-10 lg:mb-0 lg:mr-5 lg:w-1/3">
          Nuestra historia ha cambiado los espacios del río.
        </h1>
        <div className="text-2xl lg:w-1/2">
          <p>
            De acuerdo con el diagnóstico de la Global Water Watch México, el
            río Carneros se alimenta de manantiales y pequeños arroyos que se
            ubican arriba del barrio de San Bruno.
          </p>
          <br />
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
      <div className="flex flex-col md:flex-row">
        <div className="carousel w-full lg:w-1/2 lg:mx-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://static.wixstatic.com/media/6a2275_1afdb7e9502b441088ec305465c5edf0~mv2.png/v1/fill/w_773,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6a2275_1afdb7e9502b441088ec305465c5edf0~mv2.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://static.wixstatic.com/media/6a2275_72dff46293854450a1092dae91040dda~mv2.png/v1/fill/w_765,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6a2275_72dff46293854450a1092dae91040dda~mv2.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 px-5 lg:px-10 mb-10 lg:mb-0">
          <h1 className="text-5xl mb-5 text-primary">¿Sabías qué?</h1>
          <p className="text-2xl">
            La corriente principal del río carneros nace en le municipio de
            Tlalnelhuayocan y tiene una longitud de 16.3 km.
          </p>
          <br />
          <p className="text-2xl">
            La nanocuenca tiene una superficie de 1,772 hectáreas (ha), el 60%
            (1,064 ha) se encuentran dentro de la localidad de Xalapa.
          </p>
          <br />
          <p className="text-2xl">
            Cuenca con 101 km de corrientes superficiales.
          </p>
        </div>
      </div>
    </>
  );
}
