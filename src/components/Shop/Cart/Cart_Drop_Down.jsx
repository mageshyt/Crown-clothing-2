import React from "react";

const Cart_Drop_Down = () => {
  return (
    <div className="absolute flex flex-col w-[250px] h-[350px] top-[70px] bg-white border-2 border-black p-5 z-50 right-[10px] ">
      <div className="cart-items flex flex-col h-[340px] overflow-scroll">
        {/* check out btn */}
        <span className="hover:bg-black mt-auto border-black  border-2 p-2 text-xl hover:text-white font-medium text-center cursor-pointer">
          GO TO CHECKOUT
        </span>
      </div>
    </div>
  );
};

export default Cart_Drop_Down;
