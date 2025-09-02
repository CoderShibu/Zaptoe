import React, { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  totalQuantity: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem: CartContextValue["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clear = () => setItems([]);

  const { totalQuantity, subtotal } = useMemo(() => {
    const totalQuantityCalc = items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotalCalc = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    return { totalQuantity: totalQuantityCalc, subtotal: subtotalCalc };
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    clear,
    totalQuantity,
    subtotal,
    openCart,
    closeCart,
    isOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


