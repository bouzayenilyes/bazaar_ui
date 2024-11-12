// STYLED COMPONENTS
import { StatusChipBox, StatusChip } from "../styles";

// ==============================================================
type Props = { status: string };
// ==============================================================

export default function ProductStatus({ status }: Props) {
  return status ? (
    <StatusChipBox>
      <StatusChip>{status}</StatusChip>
      <div className="triangle">
        <div className="triangle-left" />
        <div className="triangle-right" />
      </div>
    </StatusChipBox>
  ) : null;
}
