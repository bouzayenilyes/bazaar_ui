import { PropsWithChildren } from "react";
import AuthLayout from "pages-sections/sessions/layout";

export default function Layout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
