import React, {useState} from 'react';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  return (
    <StoreContext.Provider
      value={{value, setValue, value1, setValue1, value2, setValue2}}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
