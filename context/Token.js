import { useReducer, createContext, useContext } from "react";

const initialState = {
  Token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setToken":
      return { ...state, Token: action.payload };
    case "deleteToken":
      return { ...state, Token: null };
    default:
      return state;
  }
};

const TokenState = createContext(initialState);

export const ProviderToken = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TokenState.Provider value={{ state, dispatch }}>
      {children}
    </TokenState.Provider>
  );
};

export const useToken = () => useContext(TokenState);
