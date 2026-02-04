'use client'; // 1. Added this for Next.js App Router
import { createContext, useContext, useState } from "react";

// 2. DELETED the import { useCart } line that was here

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [newItemsCount, setNewItemsCount] = useState(0);

  const clearNotificationBadge = () => setNewItemsCount(0);

  return (
    <CartContext.Provider value={{ newItemsCount, clearNotificationBadge }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};