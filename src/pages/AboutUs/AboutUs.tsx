import { forwardRef } from "react";

const AboutUs = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen flex flex-col justify-between items-center mt-20 px-16
       lg:px-20
      "
    >
      <h2
        style={{ textShadow: "4px 4px 4px rgb(0,0,0,0.5)" }}
        className=" w-4/5 text-3xl font-serif text-white text-center rounded-lg py-4"
      >
        <i>Sobre nosotros</i>
      </h2>

      <div className="p-6 flex justify-evenly items-center flex-wrap ">
        {/****************  COMO FUNCIONA ***************/}

        <Card
          title="Nuestra aplicación"
          text="Nuestro sistema de matching se basa en una combinación de intereses, valores y preferencias. Los usuarios brindan información que nos permite entender mejor quiénes son y qué están buscando en una pareja"
        />

        {/********************  VISION ******************/}

        <Card
          title="Visión"
          text="Nuestra visión es transformar la forma en que las personas encuentran el amor, proporcionando una plataforma confiable y efectiva para conectar corazones afines en todo el mundo"
          // className="md:relative md:right-24 md:top-10 md:z-10"
        />

        {/************************** VALUES **********************/}

        <Card
          title="Valores"
          list={[
            {
              item: "Autenticidad:",
              text: "Creemos en la importancia de ser uno mismo en las relaciones",
            },
            {
              item: "Empatía:",
              text: "Nos esforzamos por comprender las necesidades y deseos de nuestros usuarios",
            },

            {
              item: "Respeto:",
              text: "Tratamos a todos con dignidad y respeto, sin importar sus diferencias",
            },
          ]}
          // className="md:relative md:bottom-4 md:left-20 z-20"
        />

        {/******************* PORPUSE *************************/}

        <Card
          title="Propósito"
          text="Nuestro propósito es proporcionar a las personas la oportunidad de encontrar relaciones significativas y duraderas. Queremos que nuestros usuarios se sientan cómodos, seguros y confiados al usar nuestro servicio, y que puedan disfrutar de la aventura de conocer a alguien especial"
          // className="md:relative md:left-10 md:bottom-2 md:z-20"
        />
      </div>
    </div>
  );
});

export default AboutUs;

interface ICardProps {
  title: string;
  text?: String;
  list?: Array<ICardList>;
  className?: string;
}

interface ICardList {
  item: string;
  text: string;
}

const Card = (props: ICardProps): JSX.Element => {
  return (
    <div
      className={
        `border-gray-200 bg-white/30 full mt-6 border-r-2 border-b-2 rounded-lg p-4 shadow-md shadow-white/50
    lg:w-2/5 
    ` + props.className
      }
    >
      <h3
        style={{ textShadow: "2px 2px 4px rgb(0,0,0,0.5)" }}
        className="text-xl font-bold text-white text-center "
      >
        {props.title}
      </h3>

      {props.list ? (
        <ul className="mt-2 text-white list-disc list-inside flex flex-col justify-center p-2">
          {props.list.map((list) => (
            <li
              style={{ textShadow: "2mnpx 2px 6px rgb(255,255,255)" }}
              className="text-gray-800 font-semibold text-lg text-start px-8 py-2 list-none"
            >
              <span className="text-start text-gray-800 font-bold mr-1">
                <i>{list.item}</i>
              </span>

              {list.text}
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{ textShadow: "2px 2px 6px rgb(255,255,255,0.5)" }}
          className="mt-2 text-gray-800 font-semibold text-lg text-center px-8 py-3"
        >
          {props.text}
        </p>
      )}
    </div>
  );
};
