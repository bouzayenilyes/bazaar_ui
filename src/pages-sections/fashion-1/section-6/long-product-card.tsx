"use client";

import Link from "next/link";
// MUI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// GLOBAL CUSTOM COMPONENTS
import HoverBox from "components/HoverBox";
import { H4, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import { FlexBetween, FlexBox } from "components/flex-box";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";

// ===========================================================
interface Props {
  off?: number;
  slug: string;
  price: number;
  title: string;
  imgUrl: string;
  rating: number;
  id: number | string;
  hideReview?: boolean;
  hideFavoriteIcon?: boolean;
}
// ===========================================================

export default function LongProductCard({
  id,
  slug,
  title,
  price,
  imgUrl,
  rating,
  off = 20,
  hideReview,
  hideFavoriteIcon
}: Props) {
  return (
    <div>
      <Link href={`/products/${slug}`}>
        <HoverBox borderRadius={1}>
          <BazaarImage src={imgUrl} width="100%" height="auto" alt={title} mx="auto" />
        </HoverBox>
      </Link>

      <FlexBetween>
        <Box mt={2}>
          <H4 fontWeight={600} fontSize={14} mb={0.5} title={title} ellipsis>
            {title}
          </H4>

          {!hideReview ? <Rating size="small" value={rating} color="warn" readOnly /> : null}

          <FlexBox alignItems="center" gap={1}>
            <H6 color="primary.main">{calculateDiscount(price, off)}</H6>

            {off > 0 ? (
              <Box component="del" color="grey.600" fontWeight={600}>
                {currency(price)}
              </Box>
            ) : null}
          </FlexBox>
        </Box>

        {!hideFavoriteIcon ? (
          <IconButton disableRipple disableFocusRipple>
            <FavoriteBorder fontSize="small" color="secondary" sx={{ opacity: 0.5 }} />
          </IconButton>
        ) : null}
      </FlexBetween>
    </div>
  );
}
