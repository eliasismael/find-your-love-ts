const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 px-10">
      <div className=" w-full flex flex-row justify-evenly flex-wrap gap-2">
        <FooterSection
          title="Find your love"
          text="Encuentra tu pareja ideal"
        />

        <FooterSection
          title="Sponsors"
          list={["X project", "Oslo Group", "Meta Corp"]}
        />

        <FooterSection
          title="Trabaja con Nosotros"
          text="Envía tu CV rrhh@findyourlove.com"
        />

        <FooterSection
          title="Legales"
          text="Contáctanos a info@findyourl.com"
        />
      </div>
      <div className=" text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Find Your Love. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

interface IFooterSectionProps {
  title: string;
  text?: string;
  list?: string[];
}

const FooterSection = (props: IFooterSectionProps): JSX.Element => {
  return (
    <div className="flex  flex-col items-start w-1/3 mb-4 sm:w-1/5 break-words">
      <h4 className="text-white text-md font-semibold mb-2">{props.title}</h4>

      {props.list ? (
        <ul className="text-gray-400 text-sm">
          {props.list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-sm">{props.text}</p>
      )}
    </div>
  );
};

export default Footer;
