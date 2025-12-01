import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function OutlinedCard({ id, nome, foto, preco, imgStyle }) {

  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 350, minHeight: 200, marginTop: 5 }}>
      <CardContent>
        <Typography
          sx={{
            mb: 1.5
          }}
        >
          <img src={foto} alt="imagem" style={imgStyle} />
        </Typography>

        <Typography
          sx={{
            mb: 1.5
          }}
        >
          {nome}
        </Typography>

        <Typography variant="body2">
          {preco}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          style={{ display: 'block', margin: "auto", backgroundColor: "green", color: "white", width: "100%", height: "35px" }}
          onClick={() => navigate(`produto/${id}`)}
          size="small">Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
