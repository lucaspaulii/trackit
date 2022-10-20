import React, { useState } from "react";

export const TodayContext = React.createContext({});

export const TodayProvider = (props) => {
    const [todaysProgress, setTodaysProgress] = useState(0)
    return (
        <TodayContext.Provider value={{todaysProgress, setTodaysProgress}}>
            {props.children}
        </TodayContext.Provider>
    )
}