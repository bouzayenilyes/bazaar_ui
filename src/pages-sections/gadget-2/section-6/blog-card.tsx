import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { format } from "date-fns";
// MUI ICON COMPONENT
import ArrowForward from "@mui/icons-material/ArrowForward";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "components/Typography";

// ==============================================================
interface Props {
  date: string;
  title: string;
}
// ==============================================================

export default function BlogCard({ title, date }: Props) {
  return (
    <Card sx={{ backgroundColor: "grey.100", padding: 2 }}>
      <Paragraph mb={1}>{format(new Date(date), "dd MMMM, yyyy")}</Paragraph>
      <H3 fontSize={21}>{title}</H3>

      <LinearProgress variant="determinate" value={50} color="info" sx={{ my: 3 }} />
      <Button variant="text" endIcon={<ArrowForward />}>
        Read More
      </Button>
    </Card>
  );
}
