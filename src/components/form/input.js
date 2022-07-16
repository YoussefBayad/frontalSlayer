import { Input } from "theme-ui";

export default function InputField({ error, ...rest }) {
  return <Input {...rest} sx={error ? styles && styles.error : styles} />;
}

const styles = {
  width: " 100%",
  boxSizing: "border-box",
  border: "2px solid ",
  borderColor: "secondary",
  padding: " 0.8rem 1rem",
  borderRadius: "7px",
  marginBottom: "0.5rem",
  transition: "0.3s",
  color: "white",
  error: {
    borderColor: "#ff5b59",
  },

  "&::placeholder": {
    color: "muted",
  },
};
