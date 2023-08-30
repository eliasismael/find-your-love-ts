// Hooks
import { useContext, useState, useRef } from "react";
// import useLocalStorage from "../../hooks/useLocalStorage";

// Context
import { IUsersContext, UsersContext } from "../../context/users";

// import Modal from "../Modal/Modal";

// Models
import { IUser } from "../../models/user";

// Styles
const styles = {
  divLabelInput: "w-4/5 flex flex-col justify-center items-center mb-2",
  form: "relative flex flex-col items-center text-md p-2 w-full",
  Modal:
    "w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50",
  ModalOpacityLayer: "bg-black opacity-50 absolute w-full h-full",
  ModalContent:
    "rounded-lg bg-gradient-to-br from-primary to-secondary shadow-sm shadow-white p-2 w-3/5 flex flex-col justify-center items-center gap-4 relative sm:w-3/5 md:w-2/5 lg:w-3/12",
  label: "text-white text-xl mb-1",
  span: "text-gray-500 text-sm relative left-24 bottom-8 text-bold",
  divButtons: "h-20 w-full flex justify-around flex-col items-center",
  button:
    "bg-white text-black rounded-md cursor-pointer duration-300 ease-out h-7 w-1/2 text-lg hover:shadow-white shadow-sm",
};

function ButtonAddUser(): JSX.Element {
  const { men, women, setMen, setWomen } = useContext(
    UsersContext
  ) as IUsersContext;

  const [isAddingUser, setAddingUser] = useState(false);

  // const [usersStores, setUsersStored] = useLocalStorage("STORED_USERS");

  // const [newMen, setNewMen] = useState("");
  // const [newWomen, setNewWomen] = useState("");

  // const setLocalStorage = (user: IUser) => {
  //   try {
  //     // const user: IUser = JSON.parse(user);

  //     const strUser = JSON.stringify(user);

  //     if (user.gender === "MALE") {
  //       const MEN_STORED = window.localStorage.getItem("MEN_STORED") || "";
  //       const parsedMenStored = JSON.parse(MEN_STORED);
  //       console.log(parsedMenStored);
  //       // window.localStorage.setItem("MEN_STORED", () => strUser);
  //     }

  //     if (user.gender === "FEMALE") {
  //       window.localStorage.setItem("WOMEN_STORED", strUser);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const nameRef = useRef<HTMLInputElement | null>(null);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLSelectElement | null>(null);
  const presentationRef = useRef<HTMLTextAreaElement | null>(null);

  const [typedCharacters, setTypedCharacters] = useState(0);
  const PRESENTATION_MAX_LENGTH = 500;

  const onClickHandle = () => setAddingUser((prevState) => !prevState);

  const addPerson = () => {
    const file = imgRef.current?.files?.[0];
    if (!file) return alert("Añade una imagen");

    const name = nameRef.current?.value?.trim();
    if (!name) return alert("Añade un nombre");
    if (name === "") return alert("Añade un nombre válido");

    const isNameAlreadyAdded =
      men.some((element) => element.name === name) ||
      women.some((element) => element.name === name);

    if (isNameAlreadyAdded) return alert("Esa persona ya fue añadida");

    // PROCESS THE DATA
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);

    // This is async so the state updater goes inside the arrow function
    reader.addEventListener("load", () => {
      const newUser: IUser = {
        name: name,
        img: reader.result as string,
        gender: genderRef.current?.value === "Masculino" ? "MALE" : "FEMALE",
        presentation: presentationRef.current?.value as string,
      };

      if (newUser.gender === "MALE") {
        setMen((currentValue) => [...currentValue, newUser]);
      } else {
        setWomen((currentValue) => [...currentValue, newUser]);
      }

      setAddingUser(false);
    });
  };

  return (
    <>
      <div
        onClick={onClickHandle}
        className="z-10 flex justify-center items-center align-text-top text-white text-lg w-20 h-20 rounded-full shadow-white/50 shadow-lg bg-gradient-to-br from-primary to-secondary color-white fixed bottom-4 right-4 hover:scale-110 hover:shadow-white cursor-pointer ease-out duration-300"
      >
        <p>
          <i>Add user</i>
        </p>
      </div>

      {isAddingUser && (
        <div className={styles.Modal}>
          {/* Capa de opacidad */}
          <div className={styles.ModalOpacityLayer}></div>
          {/* CONTENT */}
          <div
            // style={{ minWidth: "calc(100vw - 70%)" }}
            className={styles.ModalContent}
          >
            <form className={styles.form}>
              <div className={styles.divLabelInput}>
                <label htmlFor="name" className={styles.label}>
                  Nombre:
                </label>

                <input
                  type="text"
                  ref={nameRef}
                  id="name"
                  placeholder="Nombre de la persona"
                  maxLength={30}
                  className="w-full shadow-sm shadow-gray-300 outline-none rounded-sm"
                />
              </div>

              <div className={styles.divLabelInput}>
                <label htmlFor="user-img" className={styles.label}>
                  Imágen:
                </label>
                <input
                  type="file"
                  ref={imgRef}
                  id="user-img"
                  placeholder="Hola"
                  className="w-full text-white rounded-sm"
                />
              </div>

              <div className={styles.divLabelInput}>
                <label htmlFor="gender" className={styles.label}>
                  Género:
                </label>

                <select
                  className="w-full text-lg text-center shadow-sm shadow-gray-300 outline-none rounded-sm"
                  ref={genderRef}
                  id="gender"
                >
                  <option value={"Masculino"}>Masculino</option>
                  <option value={"Femenino"}>Femenino</option>
                </select>
              </div>

              <div className={styles.divLabelInput}>
                <label htmlFor="presentation" className={styles.label}>
                  Presentación:
                </label>
                <textarea
                  ref={presentationRef}
                  className="w-full h-24 text-lg mb-2 shadow-sm shadow-gray-300 outline-none rounded-sm"
                  placeholder="Añade una presentación"
                  maxLength={PRESENTATION_MAX_LENGTH}
                  onChange={(evt) => {
                    setTypedCharacters(evt.target.value.length);
                  }}
                ></textarea>
              </div>

              <span
                className={styles.span}
              >{`${typedCharacters}/${PRESENTATION_MAX_LENGTH}`}</span>

              <div className={styles.divButtons}>
                <button
                  className={styles.button}
                  type="submit"
                  onClick={(evt) => {
                    evt.preventDefault();
                    // setTypedCharacters(0);
                    addPerson();
                  }}
                >
                  Añadir persona
                </button>

                <button
                  className={styles.button}
                  onClick={() => {
                    onClickHandle();
                    // setTypedCharacters(0);
                  }}
                >
                  Volver
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ButtonAddUser;
