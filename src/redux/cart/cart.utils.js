import { clearItemFromCart } from "./cart.action";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // ! we are checking the added item in the cart are not
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // console.log({ existingCartItem, added: cartItemToAdd, cart: cartItems });
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // ! we are just increasing the quantity alone
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const RemoveItemToCart = (cartItems, removeItem) => {
  // ! we are checking the added item in the cart are not
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  //! if our item quantity is one then we will filter it
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
