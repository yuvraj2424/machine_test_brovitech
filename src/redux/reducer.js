import React from "react";
import ActionType from "./redux-type";

const initialState = {
    isLoggedIn: false,
    internetConnected: false
}

const reducerLogoutState = {
    internetConnected: false,
    isLoggedIn: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.isLoggedIn:
            {
                if (!action.data) {
                    return Object.assign({}, state, reducerLogoutState)
                } else {
                    return Object.assign({}, state, { isLoggedIn: action.data })
                }
            }

        case ActionType.updateInternetStatus:
            return Object.assign({}, state, { internetConnected: action.data });

        default:
            return state;
    }
}

export { reducer };