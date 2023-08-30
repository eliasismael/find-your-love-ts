import { useState } from "react";

// Custom hook to manage data in local storage

type TUseLocalStorageReturn = [
  storedValue: string,
  setValueToLocalStorage: (value: string) => void
];

function useLocalStorage(
  key: string,
  initialValue?: string
): TUseLocalStorageReturn {
  // State to hold the stored value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Retrieve item from local storage
      const item = localStorage.getItem(key);
      // If item exists, parse and return it; otherwise, use initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If any errors occur during retrieval, use initial value
      return initialValue;
    }
  });

  // Function to update both state and local storage
  const setValueToLocalStorage = (value: string) => {
    try {
      setStoredValue(value); // Update state with the new value

      // Store the new value in local storage after converting to JSON
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  // Return the stored value and the function to update it in local storage
  return [storedValue, setValueToLocalStorage];
}

export default useLocalStorage;
