import { useState } from "react";

function Contact() {
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
        <div className="w-full flex justify-evenly items-center  m-0 p-0">
            <div className="relative w-1/2 p-8 text-center pb-5">
                <h3 className="text-4xl text-black font- underline mb-5">
                    Contáctanos!
                </h3>
                <p className="text-start text-black text-lg">
                    Nos encantaría saber de ti y responder cualquier pregunta o
                    inquietud que puedas tener sobre nuestro servicio de
                    emparejamiento. Puedes comunicarte con nosotros a través de
                    los siguientes medios:
                </p>
                <br />
                <p className="text-black text-left text-lg">
                    <span className="underline text-lg font-semibold mr-1">
                        Correo electrónico:
                    </span>
                    envíanos un correo electrónico a contacto@findyourlove.com y
                    te responderemos lo antes posible
                </p>
                <br />
                <p className="text-black text-left text-lg">
                    <span className="underline text-lg font-semibold mr-1">
                        Formulario de contacto:
                    </span>
                    utiliza nuestro formulario de contacto en línea para
                    enviarnos un mensaje directamente desde nuestra página.
                </p>
                <br />
                <p className="text-black text-left text-lg">
                    <span className="underline text-lg font-semibold mr-1">
                        Redes sociales:
                    </span>
                    encuéntranos en Instagram y Twitter como @findyourlove y
                    envíanos un mensaje directo con tu pregunta o inquietud.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="m-6 p-5 relative flex flex-col justify-center items-center bg-gradient-to-br from-primary to-secondary border-white shadow-md shadow-white/50 rounded-lg">
                <div>
                    <label className="font-bold font-lg mb-1" htmlFor="name">
                        Nombre:
                    </label>
                    <input
                        className="w-11/12 p-2 mb-2 border border-white rounded-sm"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="font-bold font-lg mb-1" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-11/12 p-2 mb-2 border border-white rounded-sm"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="font-bold font-lg mb-1" htmlFor="message">
                        Mensaje::
                    </label>
                    <textarea
                        className="h-28 w-11/12 p-2 mb-2 border border-white rounded-sm"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <div className="w-full h-auto flex justify-center itmes-center">
                    <button
                        className="bg-white text-black border-none w-20 h-8 rounded-md cursor-pointer hover:shadow-primary shadow-sm"
                        type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
