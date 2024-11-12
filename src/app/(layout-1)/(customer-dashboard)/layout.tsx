import { PropsWithChildren } from "react";
import { CustomerDashboardLayout } from "components/layouts/customer-dashboard";

export default function Layout({ children }: PropsWithChildren) {
  return <CustomerDashboardLayout>{children}</CustomerDashboardLayout>;
}
