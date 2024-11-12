import { useCallback, useEffect, useRef, useState, ReactNode } from "react";
import clsx from "clsx";
import { StyledBox } from "./styles";

// ============================================================
interface Props {
  fixedOn: number;
  children: ReactNode;
  scrollDistance?: number;
  onSticky?: (isFixed: boolean) => void;
}

// ============================================================

export default function Sticky({ fixedOn, children, onSticky, scrollDistance = 0 }: Props) {
  const [fixed, setFixed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const scrollListener = useCallback(() => {
    if (!window) return;

    const isFixed = window.scrollY >= fixedOn + scrollDistance;
    setFixed(isFixed);
  }, [fixedOn, scrollDistance]);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, [scrollListener]);

  useEffect(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed, onSticky]);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
      scrollListener();
    }
  }, [scrollListener]);

  return (
    <StyledBox fixedOn={fixedOn} componentHeight={height} fixed={fixed}>
      <div className={clsx({ hold: !fixed, fixed: fixed })} ref={elementRef}>
        {children}
      </div>
    </StyledBox>
  );
}
