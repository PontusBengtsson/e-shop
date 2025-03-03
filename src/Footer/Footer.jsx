// Footer.js
import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main", color: "white", py: 1, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Snabblänkar</Typography>
            <Link href="#" color="inherit" underline="none">Hem</Link><br />
            <Link href="#" color="inherit" underline="none">Produkter</Link><br />
            <Link href="#" color="inherit" underline="none">Kontakt</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Kontakt</Typography>
            <Typography variant="body2">Email: support@butik.se</Typography>
            <Typography variant="body2">Telefon: 123-456 789</Typography>
            <Typography variant="body2">Adress: Exempelgatan 10, Stockholm</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>Följ oss</Typography>
            <Typography variant="body2">© {new Date().getFullYear()} Butik AB. Alla rättigheter förbehållna.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
