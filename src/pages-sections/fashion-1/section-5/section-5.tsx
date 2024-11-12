import Image from "next/image";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import CarouselCard2 from "components/carousel-cards/carousel-card-2";
// STYLED COMPONENTS
import { ContentWrapper, BadgeBox } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/fashion-1";

// ========================================================
interface Deal {
  imgUrl: string;
  expireDate: string;
  productName: string;
}

// ========================================================

export default async function Section5() {
  const hotDealList: Deal[] = await api.getHotDealList();

  return (
    <Container className="pb-4">
      <ContentWrapper>
        <Carousel slidesToShow={1} arrowStyles={{ color: "#2B3445", backgroundColor: "white" }}>
          {hotDealList.map((item, index) => {
            const expireDate = new Date(item.expireDate).getTime();
            return (
              <div key={index}>
                <CarouselCard2
                  key={index}
                  imgUrl={item.imgUrl}
                  expireDate={expireDate}
                  productName={item.productName}
                />
              </div>
            );
          })}
        </Carousel>

        <BadgeBox>
          <Image src="/assets/images/badges/hot.svg" width={110} height={130} alt="New" />
        </BadgeBox>
      </ContentWrapper>
    </Container>
  );
}
