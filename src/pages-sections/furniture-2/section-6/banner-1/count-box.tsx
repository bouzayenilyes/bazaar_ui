// GLOBAL CUSTOM COMPONENT
import FlexRowCenter from "components/flex-box/flex-row-center";
// STYLED COMPONENT
import { CountBoxWrapper } from "../styles";

// ==============================================================
type Props = { label: string; value: number };
// ==============================================================

export default function CountBox({ label, value }: Props) {
  return (
    <CountBoxWrapper>
      <FlexRowCenter
        width={50}
        height={50}
        fontSize={24}
        bgcolor="white"
        color="grey.600"
        borderRadius={2}
        fontWeight={600}>
        <span>{value}</span>
      </FlexRowCenter>

      <span className="label">{label}</span>
    </CountBoxWrapper>
  );
}
