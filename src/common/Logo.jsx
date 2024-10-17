import { Typography, Box } from "@mui/material";

function Logo({ fontSize }) {
  const fontFamily = 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
  const commonStyles = {
    fontWeight: "600",
    fontFamily,
    fontSize,
    color: "#909094",
  };

  return (
    <Box sx={{ display: 'flex', alignItems:'center', gap: '2px' }}>
      {/* Parentesi sinistra */}
      <Typography sx={commonStyles}>
        &#123;
      </Typography>
      
      {/* Lettera M con fontSize ridotto */}
      <Typography sx={{ ...commonStyles, fontSize: fontSize - 2, color: "inherit" }}>
        M
      </Typography>
      
      {/* Parentesi destra */}
      <Typography sx={commonStyles}>
        &#125;
      </Typography>
    </Box>
  );
}

export default Logo;