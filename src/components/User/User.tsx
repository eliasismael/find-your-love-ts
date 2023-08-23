// Hooks
import { useState, useEffect, useContext } from "react";

import Modal from "../Modal/Modal";

// Models
import { IUser } from "../../models/user-model";
import { IPresentationTexts } from "../../models/presentation";

// Utils
import { textsForMen, textsForWomen } from "../../utils/presentations";
import { IUsersContext, UsersContext } from "../../context/users";

function User({ user }: { user: IUser }): JSX.Element {
    const { setWomen, setMen } = useContext(UsersContext) as IUsersContext;

    const [presentation, setPresentation] = useState("");
    const [isPresentationVisible, setIsPresentationVisible] = useState(false);

    const onClickHandle = () => {
        setIsPresentationVisible(true);
    };

    const createPresentation = (texts: IPresentationTexts): string => {
        let presentation = "";
        for (const key in texts) {
            const array = texts[key as keyof typeof texts];
            const randomIndex = Math.floor(Math.random() * array.length);
            presentation += array[randomIndex];
        }

        return presentation;
    };

    const deleteUser = () => {
        if (user.gender === "MALE") {
            setMen((currentState: IUser[]) =>
                currentState.filter((_, i) => i !== currentState.indexOf(user))
            );
        }

        if (user.gender === "FEMALE") {
            setWomen((currentState: IUser[]) =>
                currentState.filter((_, i) => i !== currentState.indexOf(user))
            );
        }

        // To not go to the other user modal
        setIsPresentationVisible(false);
    };

    // Create a presentation for each person
    useEffect(() => {
        // If it isn´t added any presentation create one
        if (user.presentation) {
            setPresentation(user.presentation as string);
            return;
        }

        let presentation = "";
        const isMan: boolean = user.gender === "MALE";
        if (isMan) {
            presentation = createPresentation(textsForMen);
        } else {
            presentation = createPresentation(textsForWomen);
        }

        setPresentation(presentation);
    }, [user]);

    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src={user.img}
                alt={`Imágen de ${user.name}`}
                className="rounded-full border-white w-40 h-40 object-cover cursor-pointer hover:scale-110 hover:shadow-white shadow-md ease-out duration-500"
                onClick={onClickHandle}
            />

            <p className="w-3/4 text-center text-black bg-white bg-opacity-50 rounded-lg text-md mt-4">
                {user.name}
            </p>

            {isPresentationVisible && (
                <Modal>
                    {/* Modal */}
                    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                        {/* Capa de opacidad */}
                        <div
                            onClick={() => setIsPresentationVisible(false)}
                            className="bg-black opacity-50 absolute w-full h-full"></div>{" "}
                        {/* Contenido */}
                        <div className="rounded-lg bg-gradient-to-br from-primary to-secondary w-96 py-10 px-10 flex flex-col justify-center items-center gap-4 relative">
                            <img
                                src={user.img}
                                alt="Person"
                                className="rounded-full w-40 h-40 object-cover"
                            />

                            <h3 className="text-lg text-white">{user.name}</h3>
                            <button
                                onClick={() => setIsPresentationVisible(false)}
                                className="absolute bg-red-500 w-8 h-8 rounded-full top-2 right-2 text-white">
                                Salir
                            </button>

                            <button
                                onClick={deleteUser}
                                className="text-black bg-white rounded-lg p-1 text-xs shadow-sm shadow-white absolute bottom-2 right-2  hover:bg-primary hover:text-white ease duration-300                        
                                ">
                                Borrar Usuario
                            </button>
                            <p className="text-start text-white">
                                {presentation}
                            </p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default User;
