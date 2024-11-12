import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// GLOBAL CUSTOM COMPONENT
import FlexRowCenter from "components/flex-box/flex-row-center";
// LOCAL CUSTOM COMPONENTS
import Categories from "./components/categories";
import ChildCategories from "./components/child-categories";
// STYLED COMPONENTS
import { Wrapper, StyledCard, MenusContainer } from "./styles";
// DATA TYPES
import { MenuList } from "./types";

// ===============================================================
type Props = { menuList: MenuList[]; title: string };
// ===============================================================

export default function CategoryBasedMenu({ title, menuList }: Props) {
  const [openList, setOpenList] = useState(menuList[0].title);
  const categories = menuList.reduce((prev, curr) => [...prev, curr.title], []);
  const subCategories = menuList.find((item) => item.title === openList);

  return (
    <Wrapper>
      <FlexRowCenter fontWeight={600} alignItems="flex-end" gap={0.3}>
        {title} <KeyboardArrowDown sx={{ color: "grey.500", fontSize: "1.1rem" }} />
      </FlexRowCenter>

      <MenusContainer className="menu-list">
        <StyledCard>
          {/* MAIN CATEGORIES SECTION */}
          <Categories
            openList={openList}
            categories={categories}
            handleOpen={(item) => setOpenList(item)}
          />

          {/* SUB / CHILD CATEGORIES SECTION */}
          <ChildCategories categories={subCategories} />
        </StyledCard>
      </MenusContainer>
    </Wrapper>
  );
}
