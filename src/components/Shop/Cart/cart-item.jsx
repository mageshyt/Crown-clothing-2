import React from "react";

const styles = {
  image: "h-[90px] w-[80px]",
  details: "flex flex-col items-center",
  Container: "flex mb-4 items-center justify-around font-semibold",
};
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  //   console.log("cart 🛒 -->", item);
  return (
    <div className={styles.Container}>
      <img src={imageUrl} className={styles.image} alt="item" />
      <div className={styles.details}>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
