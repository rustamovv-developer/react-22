import React, { memo, useEffect } from "react";
import "./wishlist.scss";

const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>Wishlist</>;
};

export default memo(Wishlist);
