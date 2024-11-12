import { PropsWithChildren } from "react";
import SalesLayout from "components/layouts/sales-layout";

export default function Layout({ children }: PropsWithChildren) {
  return <SalesLayout>{children}</SalesLayout>;
}
