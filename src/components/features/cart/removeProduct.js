/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";

const RemoveProduct = ({ _id, removeFromCart }) => {
  const dispatch = useDispatch();

  return (
    <Heading
      as="h5"
      sx={styles.RemoveProductFCart}
      onClick={() => dispatch(removeFromCart(_id))}
    >
      {/* REMOVE */}
      <BsTrash size="25px" />
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
