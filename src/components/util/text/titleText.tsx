import { Typography, Box, BoxProps, Skeleton } from "@mui/material";
import { formatColor, neutral } from "../../../theme";

type TitleTextProps = {
  title: string;
  text: string | null;
};

export const TitleText = (props: TitleTextProps & BoxProps) => {
  const { title, text } = props;
  return (
    <Box {...props}>
      <Typography variant="label" color={formatColor(neutral.gray3)} mb={1}>
        {title}
      </Typography>

      {text !== null ? (
        <Typography variant="h6" color="text.primary">
          {text}
        </Typography>
      ) : (
        <Skeleton variant="rectangular" height="28px" animation="wave" />
      )}
    </Box>
  );
};
