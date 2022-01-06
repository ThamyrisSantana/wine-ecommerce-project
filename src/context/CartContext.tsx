import React, { useMemo, useCallback, useContext, createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  priceMember: number;
  quantity: number;
}

interface Props {
  children: React.ReactNode;
}

interface CartProvider {
  cartList: CartItem[];
  cartSize: number;
  cleanCart: () => void;
  addCartItem: (newCartItem: CartItem) => void;
  removeCartItem: (id: number) => void;
  checkCartItemAlreadyInList: (id: number) => boolean;
  increaseCartItemQuantity: (id: number) => void;
  decreaseCartItemQuantity: (id: number) => void;
  totalValue: number;
}

const CartContext = createContext<CartProvider | undefined>(undefined);

function CartProvider({ children }: Props) {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cart", []);

  const cleanCart = useCallback(() => {
    setCartList([]);
  }, [setCartList]);

  const checkCartItemAlreadyInList = useCallback(
    (id: number) => {
      return cartList.some((wine) => wine.id === id);
    },
    [cartList]
  );

  const removeCartItem = useCallback(
    (id: number) => {
      setCartList((cart) => cart.filter((cartItem) => cartItem.id !== id));
    },
    [setCartList]
  );

  const increaseCartItemQuantity = useCallback(
    (id: number) => {
      setCartList((cart) =>
        cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    },
    [setCartList]
  );

  const decreaseCartItemQuantity = useCallback(
    (id: number) => {
      setCartList((cart) =>
        cart.map((cartItem) => {
          if (cartItem.id === id) {
            return {
              ...cartItem,
              quantity:
                cartItem.quantity > 1
                  ? cartItem.quantity - 1
                  : cartItem.quantity,
            };
          }
          return cartItem;
        })
      );
    },
    [setCartList]
  );

  const addCartItem = useCallback(
    (newCartItem: CartItem) => {
      if (checkCartItemAlreadyInList(newCartItem.id)) {
        increaseCartItemQuantity(newCartItem.id);
        return;
      }
      setCartList((cart) => [...cart, newCartItem]);
    },
    [checkCartItemAlreadyInList, setCartList, increaseCartItemQuantity]
  );

  const cartSize = useMemo(() => {
    return cartList.length;
  }, [cartList]);

  const totalValue = useMemo(() => {
    let total = 0;

    cartList.forEach((cartItem) => {
      total += cartItem.priceMember * cartItem.quantity;
    });

    return total;
  }, [cartList]);

  const value = useMemo(
    () => ({
      cartList,
      cartSize,
      cleanCart,
      addCartItem,
      removeCartItem,
      checkCartItemAlreadyInList,
      increaseCartItemQuantity,
      decreaseCartItemQuantity,
      totalValue,
    }),
    [
      cartList,
      cartSize,
      cleanCart,
      addCartItem,
      removeCartItem,
      checkCartItemAlreadyInList,
      totalValue,
      increaseCartItemQuantity,
      decreaseCartItemQuantity,
    ]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
}

export { CartProvider, useCart };
