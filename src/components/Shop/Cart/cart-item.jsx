import React from "react";

const styles = {
  image: "h-[100px] w-[80px]",
  details: "flex text-sm flex-col items-center",
  Container: "flex mb-4 items-center justify-around font-semibold",
};
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className={styles.Container}>
      <img src={imageUrl} className={styles.image} alt="item" />
      <div className={styles.details}>
        <span className="name">{name.slice(0, 15)}</span>
        <span className="price">
          {quantity} x $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
