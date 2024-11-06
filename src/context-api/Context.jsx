import React, { createContext, useState, useContext } from "react";

const pIdContext = createContext(null);

export function PidProvider({ children }) {
  const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalWishlistItems, setTotalWishlistItems] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <pIdContext.Provider
      value={{
        productId,
        setProductId,
        cartItems,
        setCartItems,
        totalItems,
        setTotalItems,
        wishlistItems,
        setWishlistItems,
        totalWishlistItems,
        setTotalWishlistItems,
        showModal,
        setShowModal,
        product,
        setProduct,
      }}
    >
      {children}
    </pIdContext.Provider>
  );
}

export const usePIdContext = () => useContext(pIdContext);

export default pIdContext;


