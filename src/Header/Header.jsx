import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: "flex",
          fontSize: 20,
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "90%", sm: "90%", md: "90%", lg: "1152px" },
          py: 1.5,
        }}
      >
        <Box>Välkommen</Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1 }}>
          {/* Ensure the Link wraps the button for proper routing */}
          <Button
            component={Link}
            to="/produkter"
            sx={{
              textTransform: "none", // to avoid uppercase text transformation by default
              color: theme.palette.text.primary,
            }}
          >
            Produkter
          </Button>
          <Button
            component={Link}
            to="/om-oss"
            sx={{
              textTransform: "none",
              color: theme.palette.text.primary,
            }}
          >
            Om oss
          </Button>
          <Button
            component={Link}
            to="/kontakt"
            sx={{
              textTransform: "none",
              color: theme.palette.text.primary,
            }}
          >
            Kontakt
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
