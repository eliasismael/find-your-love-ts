// Hooks
import { useState, createContext, ReactNode } from "react";

// Utils
import initialMen from "../../utils/initial-men";
import initialWomen from "../../utils/initial-women";

// Models
import { IUser } from "../../models/user-model";

export interface IUsersContext {
    men: IUser[];
    setMen: React.Dispatch<React.SetStateAction<IUser[]>>;
    women: IUser[];
    setWomen: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const UsersContext = createContext<IUsersContext | undefined>(undefined);

function UsersContextProvider({ children }: { children: ReactNode }) {
    const [men, setMen] = useState<IUser[]>(initialMen);
    const [women, setWomen] = useState<IUser[]>(initialWomen);

    return (
        <UsersContext.Provider
            value={{
                men,
                setMen,
                women,
                setWomen,
            }}>
            {children}
        </UsersContext.Provider>
    );
}

export { UsersContext, UsersContextProvider };
