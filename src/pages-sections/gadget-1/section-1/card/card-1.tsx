import Link from "next/link";
import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { H3, Paragraph, Small } from "components/Typography";
// STYLED COMPONENT
import { StyledGrid } from "./styles";

// =============================================================================
type Props = { body: string; title: string; imgUrl: string };
// =============================================================================

export default function Card1({ title, body, imgUrl }: Props) {
  return (
    <Link href="/sales-1">
      <StyledGrid container>
        <Grid item sm={6} xs={6}>
          <BazaarImage
            src={imgUrl}
            alt="apple-watch-1"
            sx={{
              maxWidth: "100%",
              maxHeight: "155px",
              padding: "0.5rem",
              marginInline: "auto"
            }}
          />
        </Grid>

        <Grid item sm={6} xs={6}>
          <H3 lineHeight={1.3}>{title}</H3>

          <Paragraph color="grey.600" mt="0.5rem" mb="1rem" maxWidth="150px">
            {body}
          </Paragraph>

          <Small fontWeight="700" borderBottom={2}>
            {title}
          </Small>
        </Grid>
      </StyledGrid>
    </Link>
  );
}
