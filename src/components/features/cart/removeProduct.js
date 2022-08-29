/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { useDispatch } from "react-redux";

const RemoveProduct = ({ _id, removeFromCart }) => {
  const dispatch = useDispatch();

  return (
    <Heading
      as="h5"
      sx={styles.RemoveProductFCart}
      onClick={() => dispatch(removeFromCart(_id))}
    >
      REMOVE
    </Heading>
  );
};

export default RemoveProduct;

const styles = {
  RemoveProductFCart: {
    color: "error",
    " &::after ": {
      backgroundColor: "$error",
    },
  },
};
