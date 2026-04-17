import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function SectionDivider({ flip = false }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 8,
        pb: 0,
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%",
          maxWidth: "md",
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to right, transparent, ${primary}30)`,
          }}
        />
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: primary,
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: primary,
            opacity: 0.25,
          }}
        />
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: primary,
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to left, transparent, ${primary}30)`,
          }}
        />
      </Box>
    </Box>
  );
}

export default SectionDivider;
