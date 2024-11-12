import { Fragment } from "react";
import { Heading, StyledLink } from "../styles";
import { ABOUT_LINKS } from "../data";

// ==============================================================
type Props = { isDark?: boolean };
// ==============================================================

export default function AboutLinks({ isDark }: Props) {
  return (
    <Fragment>
      <Heading>About Us</Heading>

      <div>
        {ABOUT_LINKS.map((item, ind) => (
          <StyledLink isDark={isDark} href="/" key={ind}>
            {item}
          </StyledLink>
        ))}
      </div>
    </Fragment>
  );
}
