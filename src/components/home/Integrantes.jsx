import Image from "next/image";

const logos = [
  "https://static.wixstatic.com/media/6a2275_e96fb269fed4481987ccc1ecd16d6028~mv2.png/v1/crop/x_1,y_0,w_189,h_58/fill/w_202,h_62,al_c,lg_1,q_85,enc_auto/bienestar.png",
  "https://static.wixstatic.com/media/6a2275_33b762eabfa64e65b637fc4bfb155522~mv2.jpeg/v1/crop/x_0,y_21,w_301,h_125/fill/w_187,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SEDEMA.jpeg",
  "https://static.wixstatic.com/media/6a2275_2734202f37104d4db6ff65701b43dd16~mv2.png/v1/fill/w_156,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UV.png",
  "https://static.wixstatic.com/media/6a2275_57b07ded868f4f06abcc46d13d694faa~mv2.png/v1/crop/x_0,y_0,w_214,h_209/fill/w_112,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mgas.png",
  "https://static.wixstatic.com/media/6a2275_b0263c4315dc421ca84371f3c90b4ba2~mv2.jpg/v1/fill/w_132,h_127,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/guardianes.jpg",
  "https://static.wixstatic.com/media/6a2275_324276c46cf14bc286e9b3337d49d273~mv2.jpg/v1/fill/w_198,h_75,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ayuntamiento%20xalapa_edited.jpg",
  "https://static.wixstatic.com/media/6a2275_77e47984aa70498ab51bf6f9471a9b08~mv2.jpg/v1/fill/w_110,h_110,al_c,lg_1,q_80,enc_auto/san%20andres%20tlalneluayocan.jpg",
  "https://static.wixstatic.com/media/6a2275_cf4ccb2f43244bb585938d314573cf0b~mv2.png/v1/crop/x_15,y_0,w_321,h_147/fill/w_196,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/veracruz%20gobierno%20del%20estado.png",
  "https://static.wixstatic.com/media/6a2275_e41a6429adf14684b50596aaa432ced4~mv2.jpg/v1/crop/x_17,y_0,w_395,h_185/fill/w_166,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/conagua.jpg",
  "https://static.wixstatic.com/media/6a2275_ce0f97a35cbd4f34962d84998213a0eb~mv2.jpeg/v1/crop/x_0,y_8,w_215,h_202/fill/w_165,h_155,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cmas%20xalapa.jpeg",
  "https://static.wixstatic.com/media/6a2275_7d7f79fd90534f5fb4640d74c990c5e2~mv2.png/v1/crop/x_7,y_0,w_207,h_147/fill/w_155,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/veracruz%20me%20llena%20de%20orgullo.png",
  "https://static.wixstatic.com/media/6a2275_68e7c303eaca44efa9bb6882975dd97e~mv2.png/v1/crop/x_183,y_0,w_488,h_520/fill/w_112,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/legislatura.png",
  "https://static.wixstatic.com/media/6a2275_afa60d03e0844817bface886143adccc~mv2.png/v1/crop/x_38,y_0,w_228,h_107/fill/w_166,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/proteccion%20civil.png",
];

function Integrantes() {
  return (
    <div className="p-10 bg-base-100">
      <h1 className="text-5xl text-primary">Integrantes</h1>
      <p className="py-6 text-2xl">
        Espacio de diálogo colectivo, gestión y vinculación para el saneamiento
        de este hermoso cuerpo de agua.
      </p>
      <div className="px-10 flex flex-wrap justify-around">
        {logos.map((logo, index) => (
          <figure className="w-40 h-40 relative m-5" key={index}>
            <Image
              src={logo}
              fill
              className="object-contain"
              alt="Rio Carneros"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Integrantes;
