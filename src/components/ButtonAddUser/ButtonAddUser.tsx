import { useContext, useState, useRef } from "react";
import { IUsersContext, UsersContext } from "../../context/users";
import Modal from "../Modal/Modal";
import { IUser } from "../../models/user-model";

function ButtonAddUser(): JSX.Element {
    const { men, women, setMen, setWomen } = useContext(
        UsersContext
    ) as IUsersContext;

    const [addingUser, setAddingUser] = useState(false);

    const nameRef = useRef<HTMLInputElement | null>(null);
    const imgRef = useRef<HTMLInputElement | null>(null);
    const genderRef = useRef<HTMLSelectElement | null>(null);
    const presentationRef = useRef<HTMLTextAreaElement | null>(null);

    const [typedCharacters, setTypedCharacters] = useState(0);
    const PRESENTATION_MAX_LENGTH = 500;

    const onClickHandle = () => setAddingUser((prevState) => !prevState);

    const addPerson = () => {
        if (
            imgRef.current &&
            imgRef.current.files &&
            nameRef.current &&
            nameRef.current.value &&
            presentationRef.current &&
            genderRef.current
        ) {
            // RETURN CONDITIONS
            if (!imgRef.current.files[0]) {
                return alert("Añade una imágen");
            }
            if (!nameRef.current.value) {
                return alert("Añade un nombre");
            }
            if (
                Array.from(nameRef.current.value).every((char) => char === " ")
            ) {
                return alert("Añade un nombre válido");
            }
            if (
                men.some(
                    (element) => element.name === String(nameRef.current?.value)
                ) ||
                women.some(
                    (element) => element.name === String(nameRef.current?.value)
                )
            ) {
                return alert("Esa persona ya fue añadida");
            }

            // PROCESS THE DATA
            const file: File = imgRef.current.files[0];
            const reader: FileReader = new FileReader();
            reader.readAsDataURL(file);

            reader.addEventListener("load", () => {
                const newUser: IUser = {
                    name: nameRef.current?.value as string,
                    img: reader.result as string,
                    gender:
                        genderRef.current?.value === "Masculino"
                            ? "MALE"
                            : "FEMALE",
                    presentation: presentationRef.current?.value as string,
                };

                if (newUser.gender === "MALE") {
                    setMen((currentValue) => [...currentValue, newUser]);
                } else if (newUser.gender === "FEMALE") {
                    setWomen((currentValue) => [...currentValue, newUser]);
                }

                setAddingUser(false);
            });
        }
    };

    return (
        <>
            <div
                onClick={onClickHandle}
                className="flex justify-center items-center align-text-top text-white text-lg w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary color-white fixed bottom-4 right-4 hover:scale-110 hover:shadow-white shadow-sm cursor-pointer ease-out duration-300">
                Add user
            </div>

            {addingUser && (
                <Modal>
                    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                        {/* Capa de opacidad */}
                        <div
                            onClick={onClickHandle}
                            className="bg-black opacity-50 absolute w-full h-full"></div>
                        <div
                            style={{ width: "calc(100vw - 70%)" }}
                            className="rounded-lg bg-gradient-to-br from-primary to-secondary shadow-sm shadow-white py-10 px-10 flex flex-col justify-center items-center gap-4 relative">
                            <form className="relative flex flex-col items-start text-md p-2">
                                <label htmlFor="name" className="text-white">
                                    Nombre:
                                </label>

                                <input
                                    type="text"
                                    ref={nameRef}
                                    placeholder="Nombre de la persona"
                                />

                                <label
                                    htmlFor="user-img"
                                    className="text-white">
                                    Imágen:
                                </label>
                                <input
                                    type="file"
                                    ref={imgRef}
                                    placeholder="Hola"
                                />

                                <label htmlFor="gender" className="text-white">
                                    Género:
                                </label>

                                <select
                                    className="w-full text-lg text-center"
                                    ref={genderRef}>
                                    <option value={"Masculino"}>
                                        Masculino
                                    </option>
                                    <option value={"Femenino"}>Femenino</option>
                                </select>

                                <label
                                    htmlFor="presentation"
                                    className="text-whites">
                                    Presentación:
                                </label>
                                <textarea
                                    ref={presentationRef}
                                    className="w-full h-24 text-lg mb-2"
                                    placeholder="Añade una presentación"
                                    maxLength={PRESENTATION_MAX_LENGTH}
                                    // onChange={(
                                    //     evt: React.ChangeEvent<HTMLTextAreaElement>
                                    // ) => {

                                    //     setTypedCharacters(
                                    //         evt.target.value.length
                                    //     );
                                    // }
                                    // }
                                ></textarea>

                                <span className="text-white relative left-[80%] text-lg text-bold">{`${typedCharacters}/${PRESENTATION_MAX_LENGTH}`}</span>

                                <div className="h-20 w-full flex justify-around flex-col items-center">
                                    <button
                                        className="bg-white text-black rounded-md cursor-pointer duration-300 ease-out h-7 w-1/2 text-lg hover:shadow-white shadow-sm"
                                        type="submit"
                                        onClick={(evt) => {
                                            evt.preventDefault();
                                            // setTypedCharacters(0);
                                            addPerson();
                                        }}>
                                        Añadir persona
                                    </button>

                                    <button
                                        className="bg-white text-black rounded-md cursor-pointer duration-300 ease-out h-7 w-1/2 text-lg hover:shadow-white shadow-sm"
                                        onClick={() => {
                                            onClickHandle();
                                            // setTypedCharacters(0);
                                        }}>
                                        Volver
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default ButtonAddUser;
