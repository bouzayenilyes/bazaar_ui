import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import { H3, H5, Tiny } from "components/Typography";
// CUSTOM DATA MODEL
import Category from "models/Category.model";
// STYLED COMPONENT
import { StyledCard } from "./styles";

// ===========================================================
type Props = { categories: Category[] };
// ===========================================================

export default function Section3({ categories = [] }: Props) {
  return (
    <div className="mb-3">
      <H3 fontSize={25} mb={3}>
        Shop By Category
      </H3>

      <Grid container spacing={3}>
        {categories.map(({ id, name, image, description, slug }) => (
          <Grid item lg={4} xs={6} key={id}>
            <Link href={`/products/search/${slug}`}>
              <StyledCard>
                <Image width={46} height={46} alt={name} src={image} />

                <div>
                  <Tiny color="primary.main" display="block" mb={0.5}>
                    {description}
                  </Tiny>
                  <H5>{name}</H5>
                </div>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
