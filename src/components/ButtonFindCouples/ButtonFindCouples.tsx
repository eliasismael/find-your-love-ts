import { useState, useEffect, useContext } from "react";
import {
    CouplesContext,
    ICouplesContext,
    ICuplesSelected,
} from "../../context/couples";

import { IUsersContext, UsersContext } from "../../context/users";

// import Matches from "../Matches/Matches";
import Modal from "../Modal/Modal";

function ButtonFindCouples() {
    // States
    const [areCouplesSelected, setAreCouplesSelected] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Context
    const { coupleSelected, setCoupleSelected, matches, setMatches } =
        useContext(CouplesContext) as ICouplesContext;

    const { men, women } = useContext(UsersContext) as IUsersContext;

    // Functions
    const selectCouple = () => {
        if (!men.length && !women.length) {
            setIsModalVisible(true);
            setMatches(["No hay usuarios"]);
            return;
        }
        if (!men.length) {
            setIsModalVisible(true);
            setMatches(["No hay hombres"]);
            return;
        }
        if (!women.length) {
            setIsModalVisible(true);
            setMatches(["No hay mujeres"]);
            return;
        }

        const newCoupleSelected: ICuplesSelected = { ...coupleSelected };

        men.forEach((man) => {
            const randomWomanIndex = Math.floor(Math.random() * women.length);
            const womenChosen = women[randomWomanIndex].name;

            newCoupleSelected[man.name] = womenChosen;
        });

        women.forEach((woman) => {
            const randomManIndex = Math.floor(Math.random() * men.length);
            const menChosen = men[randomManIndex].name;

            newCoupleSelected[woman.name] = menChosen;
        });

        setCoupleSelected(newCoupleSelected);
        setAreCouplesSelected(true);
    };

    const findMatches = () => {
        console.log("find", coupleSelected);
        const matches: string[] = [];

        men.forEach((man) => {
            const currentPerson = man.name;
            const personChosen = coupleSelected[currentPerson];
            const personChosenByPersonChosen = coupleSelected[personChosen]; // XD

            const isMatch: boolean =
                currentPerson === personChosenByPersonChosen;

            if (isMatch) {
                matches.push(
                    `Hay match entre ${currentPerson} y ${personChosen}`
                );
            }
        });

        if (!matches.length) {
            matches.push("No hay matches");
        }

        setMatches(matches);
    };

    const onclickHandle = () => {
        selectCouple();
    };

    //Life Cycle
    useEffect(() => {
        if (areCouplesSelected) {
            findMatches();
            setIsModalVisible(true);
        }
    }, [areCouplesSelected]);

    return (
        <>
            <button
                onClick={onclickHandle}
                className="w-40 h-10 bg-gradient-to-r from-primary to-secondary rounded text-white hover:shadow-primary shadow-md ease-out duration-300">
                Find couples
            </button>

            {isModalVisible && (
                // <Matches
                //     setIsModalVisible={setIsModalVisible}
                //     setAreCouplesSelected={setAreCouplesSelected}
                // />
                <Modal>
                    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                        {/* Capa de opacidad */}
                        <div className="bg-black opacity-50 absolute w-full h-full"></div>{" "}
                        {/* Contenido */}
                        <div
                            style={{ width: "calc(100vw - 70%)" }}
                            className="rounded-lg bg-gradient-to-br from-primary to-secondary shadow-sm shadow-white py-10 px-10 flex flex-col justify-center items-center gap-4 relative">
                            <button
                                onClick={() => setIsModalVisible(false)}
                                className="w-4 h-4 rounded-full absolute top-2 right-2 bg-white shadow-sm hover:shadow-white ease-out duration-300 flex items-center justify-center ">
                                x
                            </button>
                            <ul>
                                {matches.map((match, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className="text-white text-semibold text-center">
                                            {match}
                                        </li>
                                    );
                                })}
                            </ul>

                            <button
                                onClick={() => {
                                    setMatches([]);
                                    setCoupleSelected({});
                                    setAreCouplesSelected(false);
                                    setIsModalVisible(false);
                                }}
                                className="bg-white rounded-lg text-xs relative top-4 p-2 hover:shadow-white shadow-sm ease-out duration-300">
                                Nueva Elección
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default ButtonFindCouples;
