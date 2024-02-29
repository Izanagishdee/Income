import { useState, createContext } from "react";

export const AddrecordContext = createContext();

const AddrecordProvider = ({ children }) => {
  const [add, setAdd] = useState(false);

  return (
    <AddrecordContext.Provider value={{ add, setAdd }}>
      {children}
    </AddrecordContext.Provider>
  );
};

export default AddrecordProvider;
