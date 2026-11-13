import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

    const [user, setUser] = useState("Adithya");

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev =>
            prev === "light" ? "dark" : "light"
        );
    };

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                theme,
                toggleTheme
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}