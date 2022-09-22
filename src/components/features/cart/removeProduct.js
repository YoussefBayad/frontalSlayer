/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { useDispatch } from "react-redux";
import { FcFullTrash } from "react-icons/fc";

const RemoveProduct = ({ _id, removeFromCart }) => {
  const dispatch = useDispatch();

  return (
    <Heading
      as="h5"
      sx={styles.RemoveProductFCart}
      onClick={() => dispatch(removeFromCart(_id))}
    >
      {/* REMOVE */}
      <FcFullTrash size="35px" />
    </Heading>
  );
};

export default RemoveProduct;

const styles = {
  RemoveProductFCart: {
    color: "error",
    cursor: "pointer",
    " &::after ": {
      backgroundColor: "error",
    },
  },
};
