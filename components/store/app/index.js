import { useState } from "react";
import AppContext, { initialAppServices } from "./context";
const uid = require("../../../utils/uid");

const AppContextProvider = (props) => {
  const [AppStateContext, setAppStateContext] = useState(initialAppServices);

  const addService = (s) => {
    const sid_ = uid();
    s.sid_ = sid_;
    setAppStateContext((AppStateContextState_) => {
      return {
        ...AppStateContextState_,
        [sid_]: s,
      };
    });
  };

  const getService = (sid_) => {
    return AppStateContext.hasOwnProperty(sid_) ? AppStateContext[sid_] : null;
  };

  const showServices = () => {
    return {
      ...AppStateContext,
    };
  };

  const removeService = (sid_) => {
    setAppStateContext((AppStateContextState_) => {
      const newstate = {
        ...AppStateContextState_,
      };
      delete newstate[sid_];
      return newstate;
    });
  };

  const context = {
    services: AppStateContext,
    addService,
    getService,
    removeService,
    showServices,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
