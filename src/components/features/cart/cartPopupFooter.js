/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";
import { Link } from "components/link";
import React from "react";
import { useDispatch } from "react-redux";
import { openCart } from "../../../redux/cart/cartSlice";

const CartFooter = ({ total, openCart, ...rest }) => {
  const dispatch = useDispatch();
  return (
    <Box {...rest}>
      {Number(total) === 0 ? (
        <Link
          path="/shop"
          style={{ color: "white" }}
          variant={"button.glass"}
          onClick={() => {
            dispatch(openCart());
          }}
        >
          Back To Shop
        </Link>
      ) : (
        <>
          <Link
            path="/shipping"
            sx="btn checkout-btn"
            onClick={() => {
              dispatch(openCart());
            }}
          >
            <span>CHECKOUT</span>{" "}
            <span>
              ${""}
              {total ? total : "00.00"}
            </span>
          </Link>
          <Link
            className="cart-remove-product"
            path="/cart"
            onClick={() => {
              dispatch(openCart());
            }}
          >
            {" "}
            View cart
          </Link>
        </>
      )}
    </Box>
  );
};

export default CartFooter;
