import { createContext, useContext, useState } from 'react';

const initial = {
  imgSrc: '',
  result: '',
  setImgSrc: () => {},
  setResult: () => {},
};

const GlobalContext = createContext(initial);

export { GlobalContext };

function Provider({ children }) {
  const [imgSrc, setImgSrc] = useState('');
  const [result, setResult] = useState({});

  const value = { imgSrc, result, setImgSrc, setResult };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default Provider;
