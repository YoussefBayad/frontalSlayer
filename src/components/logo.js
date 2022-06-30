/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.svg";
import logoWhite from "assets/images/logo.svg";

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image src={isWhite ? logoWhite : logo} alt="impeerforyou logo" />
    </Link>
  );
}
