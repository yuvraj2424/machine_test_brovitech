import React from "react";
import ActionType from "./redux-type";

const storeIsLoggedIn=(val)=>({
    type:ActionType.isLoggedIn,
    data:val
});

const updateInternetStatus = isConnected => ({
    type: ActionType.updateInternetStatus,
    data: isConnected,
  });

export  default {
    storeIsLoggedIn,
    updateInternetStatus
}