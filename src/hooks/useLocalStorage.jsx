import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch (err) {
            return defaultValue
        }
    })
    const setValue = newValue => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (err) {
            console.log(err)
        }
        setStoredValue(newValue)
    }
    return [storedValue, setValue]
}

export default useLocalStorage;