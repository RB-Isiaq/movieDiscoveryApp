import { createContext, useState } from "react";

export const DataCtx = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Top rated");
  const [error, setError] = useState(null);

  const value = { data, setData, title, setTitle, error, setError };
  return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
