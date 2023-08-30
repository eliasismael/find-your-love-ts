// Hooks
import { useState, useEffect, useContext } from "react";

// Models
import {
  CouplesContext,
  ICouplesContext,
  ICuplesSelected,
} from "../../context/couples";

// Context
import { IUsersContext, UsersContext } from "../../context/users";

// Modal
import Matches from "../Matches/Matches";

function ButtonFindCouples(): JSX.Element {
  // States
  const [areCouplesSelected, setAreCouplesSelected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Context
  const { coupleSelected, setCoupleSelected, setMatches } = useContext(
    CouplesContext
  ) as ICouplesContext;

  const { men, women } = useContext(UsersContext) as IUsersContext;

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
    const matches: string[] = [];

    men.forEach((man) => {
      const currentPerson = man.name;
      const personChosen = coupleSelected[currentPerson];
      const personChosenByPersonChosen = coupleSelected[personChosen]; // XD

      const isMatch: boolean = currentPerson === personChosenByPersonChosen;

      if (isMatch) {
        matches.push(`Hay match entre ${currentPerson} y ${personChosen}`);
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
        className="w-40 h-10 bg-gradient-to-r from-primary to-secondary rounded text-white hover:shadow-primary shadow-md ease-out duration-300"
      >
        Find couples
      </button>

      {isModalVisible && (
        <Matches
          setIsModalVisible={setIsModalVisible}
          setAreCouplesSelected={setAreCouplesSelected}
        />
      )}
    </>
  );
}

export default ButtonFindCouples;
