import { createContext, useState } from "react";

export const DataCtx = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Featured");

  const value = { data, setData, title, setTitle };
  return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
