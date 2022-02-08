export const addItemToCart = (cartItems, cartItemToAdd) => {
  // ! we are checking the added item in the cart are not
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  console.log({ existingCartItem, added: cartItemToAdd, cart: cartItems });
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // ! we are just increasing the quantity alone
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
