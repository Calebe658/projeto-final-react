import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import produto1 from "../../assets/produto1.png";

const card = ({ nome, dtNascimento, cargo }) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Vitamin C
      </Typography>

      <img src={produto1} alt="produto1" />

      <Typography variant="body2" >
        $19.99
      </Typography>
    </CardContent>

    <CardActions>
      <Button variant="contained">Add to card</Button>
    </CardActions>

    <Typography variant="h5" component="div">
      {nome}
    </Typography>

    <Typography variant="h5" component="div">
      {dtNascimento}
    </Typography>

    <Typography variant="h5" component="div">
      {cargo}
    </Typography>
  </React.Fragment>
);

export default function OutlinedCard({ nome, dtNascimento, cargo }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {card({ nome, dtNascimento, cargo })}
      </Card>
    </Box>
  );
}
