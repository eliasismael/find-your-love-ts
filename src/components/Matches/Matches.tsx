import { useContext } from "react";
import { CouplesContext, ICouplesContext } from "../../context/couples";
import Modal from "../Modal/Modal";

interface IMatchesProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAreCouplesSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

function Matches(props: IMatchesProps): JSX.Element {
  const { matches, setMatches, setCoupleSelected } = useContext(
    CouplesContext
  ) as ICouplesContext;

  return (
    <Modal>
      <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {/* Capa de opacidad */}
        <div className="bg-black opacity-50 absolute w-full h-full"></div>{" "}
        {/* Contenido */}
        <div className="w-3/5 sm:w-2/5 lg:w-1/5 rounded-lg bg-gradient-to-br from-primary to-secondary py-10 px-10 flex flex-col justify-center items-center gap-4 relative">
          <ul>
            {matches.map((match, i) => {
              return (
                <li key={i} className="text-white text-semibold text-center">
                  {match}
                </li>
              );
            })}
          </ul>

          <button
            className="bg-white rounded-lg text-xs relative top-4 p-2 hover:shadow-white shadow-sm ease-out duration-300"
            onClick={() => {
              setMatches([]);
              setCoupleSelected({});
              props.setAreCouplesSelected(false);
              props.setIsModalVisible(false);
            }}
          >
            Nueva Eleccion
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Matches;
