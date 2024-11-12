import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// CUSTOM ICON COMPONENTS
import FeedbackThumbsUpIcon from "icons/FeedbackThumbsUp";
import CreditCardVerifiedIcon from "icons/CreditCardVerified";
// Local CUSTOM COMPONENTS
import Card1 from "./card-1";
import Card2 from "./card-2";
import Card3 from "./card-3";
import Card4 from "./card-4";
import Card5 from "./card-5";

export default function Section1() {
  return (
    <Container className="pt-2 mb-4">
      <Grid container spacing={3}>
        {/* SPECIAL CARD AREA */}
        <Grid item lg={4} md={5} xs={12}>
          <Card1 />
        </Grid>

        <Grid item lg={8} md={7} xs={12}>
          {/* JACKET CARD AREA */}
          <Card2 />

          <Box mt={3} />

          {/* MEN'S SHIRT CARD AREA */}
          <Card3 />
        </Grid>
      </Grid>

      <Box mb={3} />

      <Grid container spacing={3}>
        {/* SECURE PAYMENT SERVICE CARD */}
        <Grid item md={3} sm={6} xs={12}>
          <Card4
            title="Secure Payment"
            Icon={CreditCardVerifiedIcon}
            body="100% secured payment & privacy"
          />
        </Grid>

        {/* GREAT FEEDBACK SERVICE CARD */}
        <Grid item md={3} sm={6} xs={12}>
          <Card4
            title="Great Feedback"
            Icon={FeedbackThumbsUpIcon}
            body="More than 97% positive & happy customers"
          />
        </Grid>

        {/* SPECIAL OFFER CARD */}
        <Grid item md={6} xs={12}>
          <Card5 />
        </Grid>
      </Grid>
    </Container>
  );
}
