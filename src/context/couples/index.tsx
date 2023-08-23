// Hooks
import { useState, createContext, ReactNode } from "react";

// Context interface
export interface ICouplesContext {
    coupleSelected: ICuplesSelected;
    setCoupleSelected: React.Dispatch<React.SetStateAction<ICuplesSelected>>;
    matches: Array<string>;
    setMatches: React.Dispatch<React.SetStateAction<string[]>>;
}

// Object for state interface
export interface ICuplesSelected {
    [key: string]: string;
}

// Context
const CouplesContext = createContext<ICouplesContext | undefined>(undefined);

// Provider
function CouplesContextProvider({ children }: { children: ReactNode }) {
    const [coupleSelected, setCoupleSelected] = useState<ICuplesSelected>({});
    const [matches, setMatches] = useState<Array<string>>([]);

    const value = { coupleSelected, setCoupleSelected, matches, setMatches };

    return (
        <CouplesContext.Provider value={value}>
            {children}
        </CouplesContext.Provider>
    );
}

export { CouplesContext, CouplesContextProvider };
