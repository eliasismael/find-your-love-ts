// Hooks
import { useState, useEffect, useContext } from "react";

import Modal from "../Modal/Modal";

// Models
import { IUser } from "../../models/user";

// Constants
import { textsForMen, textsForWomen } from "../../constants/presentations";
import { createPresentation } from "../../utils/createPresentation";

// Context
import { IUsersContext, UsersContext } from "../../context/users";

// Props
interface IUserProps {
  user: IUser;
}

function User(props: IUserProps): JSX.Element {
  const { men, women, setWomen, setMen } = useContext(
    UsersContext
  ) as IUsersContext;

  const [presentation, setPresentation] = useState("");
  const [isPresentationVisible, setIsPresentationVisible] = useState(false);

  const onClickHandle = () => {
    setIsPresentationVisible(true);
  };

  const deleteUser = () => {
    const userGender = props.user.gender;

    if (userGender === "MALE") {
      const newUsers = men.filter((_, i) => i !== men.indexOf(props.user));
      setMen(newUsers);
    }

    if (userGender === "FEMALE") {
      const newUsers = women.filter((_, i) => i !== women.indexOf(props.user));
      setWomen(newUsers);
    }

    // To not go to another user´s modal
    setIsPresentationVisible(false);
  };

  // Create a presentation for each user
  useEffect(() => {
    // For added users
    if (props.user.presentation || props.user.presentation === "") {
      setPresentation(props.user.presentation as string);
      return;
    }

    // for default users
    let presentation: string;
    const isMan: boolean = props.user.gender === "MALE";

    if (isMan) {
      presentation = createPresentation(textsForMen);
    } else {
      presentation = createPresentation(textsForWomen);
    }

    setPresentation(presentation);
  }, [props.user]);

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={props.user.img}
        alt={`Imágen de ${props.user.name}`}
        className="rounded-full border-white w-24 h-24 object-cover cursor-pointer hover:scale-110 hover:shadow-white shadow-md ease-out duration-500
        sm:w-40 sm:h-40
        "
        onClick={onClickHandle}
      />

      <p className=" px-2 text-center text-black bg-white bg-opacity-50 rounded-lg text-sm mt-4">
        {props.user.name}
      </p>

      {isPresentationVisible && (
        <Modal>
          {/********  Modal **********/}

          <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
            {/****** Opacity layer *****/}
            <div
              onClick={() => setIsPresentationVisible(false)}
              className="bg-black opacity-50 absolute w-full h-full"
            ></div>{" "}
            {/******* Content ******/}
            <div
              className="rounded-lg bg-gradient-to-br from-primary to-secondary z-10 w-4/5 max-h-3/5 py-10 px-10 flex flex-col justify-center items-center gap-4 relative
            sm:w-3/5
            lg:w-2/5
            xl:w-3/12
            "
            >
              <img
                src={props.user.img}
                alt={props.user.name}
                className="rounded-full w-28 h-28 object-cover
                sm:w-40 sm:h-40
                "
              />

              <h3 className="text-lg text-white font-semibold">
                {props.user.name}
              </h3>
              <button
                onClick={() => setIsPresentationVisible(false)}
                className="absolute bg-white w-6 h-6 rounded-full top-1 right-1 text-gray-800 hover:shadow-gray-800 shadow-sm ease-out duration-300"
              >
                {/* X icon */}
                &#10005;
              </button>

              <button
                onClick={deleteUser}
                className="text-black bg-white rounded-lg p-1 text-xs shadow-sm shadow-white absolute bottom-2 right-2  hover:bg-primary hover:text-white ease duration-300
              
                "
              >
                Borrar Usuario
              </button>
              <p className="text-start text-white font-semibold z-50 text-xs sm:text-md ">
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
