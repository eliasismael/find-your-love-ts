import { useContext } from "react";
import { CouplesContext, ICouplesContext } from "../../context/couples";
import Modal from "../Modal/Modal";

function Matches({
    setIsModalVisible,
    setAreCouplesSelected,
}: {
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setAreCouplesSelected: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
    const { matches, setMatches, setCoupleSelected } = useContext(
        CouplesContext
    ) as ICouplesContext;

    return (
        <Modal>
            <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                {/* Capa de opacidad */}
                <div className="bg-black opacity-50 absolute w-full h-full"></div>{" "}
                {/* Contenido */}
                <div className="rounded-lg bg-gradient-to-br from-primary to-secondary w-96 py-10 px-10 flex flex-col justify-center items-center gap-4 relative">
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
                                    className="text-white text-semibold">
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
                        }}>
                        Nueva Eleccion
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default Matches;
