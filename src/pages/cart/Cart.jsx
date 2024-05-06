import React, { memo, useEffect } from "react";
import "./cart.scss";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>Cart</>;
};

export default memo(Cart);
