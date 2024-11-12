import { PropsWithChildren } from "react";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";

const Layout = ({ children }: PropsWithChildren) => {
  return <VendorDashboardLayout>{children}</VendorDashboardLayout>;
};

export default Layout;
