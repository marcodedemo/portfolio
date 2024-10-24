import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Logo({ fontSize }) {
  const theme = useTheme();

  const fontFamily =
    'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';

  const logoBrackets = {
    fontWeight: "600",
    fontFamily,
    fontSize,
    color: theme.palette.primary.dark,
    ...theme.applyStyles("dark", {
      color: theme.palette.primary.main,
    }),
  };

  const logoLetter = {
    fontSize: fontSize - 2,
    color: "#000000",
    fontWeight: "600",
    fontFamily,
    ...theme.applyStyles("dark", {
      color: "#ffffff",
    }),
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {/* Parentesi sinistra */}
      <Typography sx={logoBrackets}>&#123;</Typography>

      {/* Lettera M con fontSize ridotto */}
      <Typography sx={logoLetter}>M</Typography>

      {/* Parentesi destra */}
      <Typography sx={logoBrackets}>&#125;</Typography>
    </Box>
  );
}

export default Logo;
