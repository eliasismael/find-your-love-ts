import { useState, forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>(({}, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* FONDO */}
      <div
        ref={ref}
        className="w-full flex flex-col justify-evenly items-center border-t-2 border-gray-800 m-0 py-8 bg-gradient-to-br from-primary to-secondary
      "
      >
        {/* MAIN */}
        <div className="w-3/4 px-4">
          <h3
            style={{ textShadow: "2px 2px 5px rgb(0,0,0,0.5)" }}
            className="text-4xl text-white text-center font-semibold mb-5 tracking-wide"
          >
            <i>Contáctanos</i>!
          </h3>

          <p className="text-center text-white text-lg font-semibold mb-6">
            Nos encantaría saber de ti y responder cualquier pregunta o
            inquietud que puedas tener sobre nuestro servicio de emparejamiento.
            Puedes comunicarte con nosotros a través de los siguientes medios:
          </p>
        </div>

        {/* SECONDARY */}
        <div className="flex flex-col justify-between items-center mt-4 w-3/4 md:flex-row">
          {/* CONTACT ITEMS */}
          <div
            className="w-full py-8 pr-16 text-center pb-5
      md:w-3/4
      "
          >
            <ContactSection
              item="Correo electrónico:"
              text="Envíanos un correo electrónico a contacto@findyourlove.com y te
          responderemos lo antes posible"
            />

            <ContactSection
              item="Formulario de contacto:"
              text="Utiliza nuestro formulario de contacto en línea para enviarnos un
          mensaje directamente desde nuestra página."
            />

            <ContactSection
              item="Redes sociales:"
              text="Encuéntranos en Instagram y Twitter como @findyourlove y envíanos un
          mensaje directo con tu pregunta o inquietud."
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className=" p-6 h-3/4 relative flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 border-gray-400 border-b-4 border-r-4 shadow-xl shadow-gray-800/50 rounded-lg"
          >
            <div className="flex flex-col w-full">
              <label
                className="font-bold font-lg mb-1 text-gray-800"
                htmlFor="name"
              >
                Nombre:
              </label>
              <input
                className="w-full mb-2 border border-gray-800/50 border-r-2 border-b-2  shadow-md rounded-sm"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                className="font-bold font-lg mb-1 text-gray-800"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="w-full mb-2 border border-gray-800/50 border-r-2 border-b-2 shadow-md rounded-sm"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="font-bold font-lg mb-1 text-gray-800"
                htmlFor="message"
              >
                Mensaje::
              </label>
              <textarea
                className="h-28 w-full mb-2 border border-gray-800/50 border-r-2 border-b-2  shadow-md rounded-sm"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="w-full h-auto flex justify-center itmes-center">
              <button
                className="bg-gradient-to-br from-primary to-secondary text-white font-semibold w-20 h-8 rounded-md cursor-pointer hover:shadow-gray-primary shadow-md duration-300 ease-out"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

interface IContactSectionProps {
  item: string;
  text: string;
}

const ContactSection = (props: IContactSectionProps): JSX.Element => {
  return (
    <div>
      <p
        style={{ textShadow: "4px 4px 4px rgb(0,0,0,0.5)" }}
        className="text-xl text-start text-white font-semibold"
      >
        <i>{props.item}</i>
      </p>
      <p className="text-white text-start text-lg my-4">{props.text}</p>
    </div>
  );
};

export default Contact;
