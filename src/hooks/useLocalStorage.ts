import { useState } from "react";

// Custom hook to manage data in local storage
export function useLocalStorage(
    key: string,
    initialValue: string
): [string, (key: string, value: string) => void] {
    // State to hold the stored value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Retrieve item from local storage
            const item = localStorage.getItem(key);

            // If item exists, parse and return it; otherwise, use initial value
            if (item) {
                return JSON.parse(item);
            } else {
                return initialValue;
            }
        } catch (error) {
            // If any errors occur during retrieval, use initial value
            return initialValue;
        }
    });

    // Function to update both state and local storage
    const setValueToLocalStorage = (key: string, value: string) => {
        try {
            // Update state with the new value
            setStoredValue(value);

            // Store the new value in local storage after converting to JSON
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Log an error message if any issues arise during storage
            console.error(error);
        }
    };

    // Return the stored value and the function to update it in local storage
    return [storedValue, setValueToLocalStorage];
}
