// Hooks
import { useState, createContext, ReactNode } from "react";

// Models
import { IUser } from "../../models/user";

export interface IUsersContext {
  men: IUser[];
  setMen: React.Dispatch<React.SetStateAction<IUser[]>>;
  women: IUser[];
  setWomen: React.Dispatch<React.SetStateAction<IUser[]>>;
}

// Initial women
import woman1 from "../../assets/women/mujer1.jfif";
import woman2 from "../../assets/women/mujer2.jfif";
import woman3 from "../../assets/women/mujer3.jfif";
import woman4 from "../../assets/women/mujer4.jfif";
import woman5 from "../../assets/women/mujer5.jfif";

const womanImages = [woman1, woman2, woman3, woman4, woman5];
const womanNames = ["Lucía", "Valentina", "María", "Juana", "Sofía"];
const initialWomen: IUser[] = [];

for (let i = 0; i < womanNames.length; i++) {
  const woman: IUser = {
    name: womanNames[i],
    img: womanImages[i],
    gender: "FEMALE",
    presentation: null,
  };

  initialWomen.push(woman);
}

// Iinitial men
import man6 from "../../assets/men/hombre6.jpg";
import man7 from "../../assets/men/hombre7.webp";
import man8 from "../../assets/men/hombre8.jpg";
import man9 from "../../assets/men/hombre12.webp";
import man10 from "../../assets/men/hombre10.jpg";

const manImages = [man6, man7, man8, man9, man10];
const manNames = ["Juan", "Lucas", "Nicolás", "Tomás", "Marcelo"];

const initialMen: IUser[] = [];

for (let i = 0; i < manNames.length; i++) {
  const man: IUser = {
    name: manNames[i],
    img: manImages[i],
    gender: "MALE",
    presentation: null,
  };

  initialMen.push(man);
}

// Context
const UsersContext = createContext<IUsersContext | undefined>(undefined);

function UsersContextProvider({ children }: { children: ReactNode }) {
  const [men, setMen] = useState<IUser[]>(initialMen);
  const [women, setWomen] = useState<IUser[]>(initialWomen);

  const value = { men, setMen, women, setWomen };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export { UsersContext, UsersContextProvider };
