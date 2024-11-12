import { PropsWithChildren } from "react";
import PageStepper from "./page-stepper";

export default function Layout({ children }: PropsWithChildren) {
  return <PageStepper>{children}</PageStepper>;
}
