import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

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
        paddingY: 1.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "90%", lg: "1152px" },
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textTransform: "none",
                color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.action.hover, // Hover effect for the entire Box
              },
            }}
          >
            <HomeIcon sx={{ fontSize: "large", marginRight: 1 }} />
            <Box fontSize={20}>Välkommen</Box>
          </Box>
        </Link>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {["Produkter", "Om oss", "Kontakt"].map((text, index) => (
            <Button
              key={index}
              component={Link}
              to={`/${text.toLowerCase().replace(" ", "-")}`}
              sx={{
                textTransform: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover, // Hover effect for Button
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
