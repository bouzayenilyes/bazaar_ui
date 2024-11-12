import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// LOCAL CUSTOM COMPONENTS
import Card1 from "./components/card-1";
import Card2 from "./components/card-2";
import Card3 from "./components/card-3";
import Card4 from "./components/card-4";
import Card5 from "./components/card-5";

export default function Section2() {
  return (
    <Grid container spacing={3}>
      {/* BIG SALE BANNER CARD */}
      <Grid item xs={12} sm={6} md={6}>
        <Card1 />
      </Grid>

      {/* UPTO 60% OFF BANNER CARD */}
      <Grid item xs={12} sm={6} md={6}>
        <Card2 />
      </Grid>

      {/* WINTER OFFER 50% OFF BANNER CARD */}
      <Grid item xs={12} sm={6} md={6}>
        <Card3 />
      </Grid>

      {/* SOFA & CHAIR COLLECTION BANNER CARDS */}
      <Grid item xs={12} sm={6} md={6}>
        <Stack height="100%" spacing={3}>
          {/* CHAR COLLECTION BANNER CARD */}
          <Card4 />

          {/* SOFA CHAIR BANNER CARD */}
          <Card5 />
        </Stack>
      </Grid>
    </Grid>
  );
}
