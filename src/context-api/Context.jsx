import React, { createContext, useState, useContext } from "react";

const pIdContext = createContext(null);

export function PidProvider({ children }) {
  const [productId, setProductId] = useState(null);

  return (
    <pIdContext.Provider value={{ productId, setProductId }}>
      {children}
    </pIdContext.Provider>
  );
}

export const usePIdContext = () => useContext(pIdContext);

export default pIdContext;

// import React, { createContext, useState, useContext } from "react";

// const pIdContext = createContext(null);

// export function PidProvider({ children }) {
//   const [productId, setProductId] = useState(null);

//   return (
//     <pIdContext.Provider value={{ productId, setProductId }}>
//       {children}
//     </pIdContext.Provider>
//   );
// }

// export const usePIdContext = () => useContext(pIdContext);

// export default pIdContext;
