import { Fragment } from "react";
import LinkItem from "./link-item";

// ==============================================================
type Item = { title: string; href: string };

interface Props extends Item {
  child?: Item[];
}
// ==============================================================

export const renderChild = (childList: Props[], type = "parent") => {
  // NESTED LIST
  if (type === "parent") {
    return childList.map(({ href, title, child }) => (
      <Fragment key={title}>
        <LinkItem href={href} title={title} ml={4} />
        {child ? renderChild(child, "child") : null}
      </Fragment>
    ));
  }

  return childList.map((item, ind) => (
    <LinkItem key={ind} href={item.href} title={item.title} ml={6} />
  ));
};
