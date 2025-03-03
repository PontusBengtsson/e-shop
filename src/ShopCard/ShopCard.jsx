import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Styled component för korten
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 250,
  height: 250,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  boxShadow: theme.shadows[3],
}));

// ShopCard-komponenten
const ShopCard = () => {
  const theme = useTheme(); // ✅ Fixat: Hooks används inuti komponenten

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
        overflowX: 'hidden',
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          maxWidth: '1200px',
          flexWrap: 'wrap',
        }}
      >
        {/* Skapar 12 kort i en responsiv grid-layout */}
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopCard;
