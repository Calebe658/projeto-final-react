import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo2 from "../../assets/logo2.png";
import { useNavigate } from 'react-router-dom';
import lupa from '../../assets/lupa.svg';
import carrinho from '../../assets/carrinho.svg';
import avatar from '../../assets/avatar.svg';

function Header() {

  const navigate = useNavigate();

  return (
    <AppBar position="fixed" style={{ backgroundColor: "white" }}>
      <Container maxWidth="">
        <Toolbar disableGutters>

          <Box sx={{
            flexBasis: { xs: "50%", sm: "30%", md: "10%" },
            display: "flex",
            cursor: "pointer"
          }}>
            <IconButton
              onClick={() => navigate('/')}
              color="inherit"
            >
              <img
                src={logo2}
                alt="logo"
                style={{ width: "150px", height: "100px", maxWidth: "40vw" }}
              />
            </IconButton>
          </Box>

          <Box sx={{
            display: "flex",
            gap: { xs: 0.5, sm: 1, md: 2 }
          }}>
            <Button
              onClick={() => navigate('/')}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Home
            </Button>
          </Box>

          <Box sx={{
            display: "flex",
            gap: { xs: 0.5, sm: 1, md: 2 },
          }}>
            <Button
              onClick={() => navigate('/carrinho')}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Carrinho
            </Button>
          </Box>

          <Box sx={{
            display: "flex",
            gap: { xs: 0.5, sm: 1, md: 2 },
            marginLeft: "auto"
          }}>
            <IconButton

            >
              <img
                src={lupa}
                alt="logo"
                style={{ width: "25px", height: "auto" }}
              />
            </IconButton>
          </Box>

          <Box sx={{
            display: "flex",
            gap: { xs: 0.5, sm: 1, md: 2 },
          }}>
            <IconButton

            >
              <img
                src={avatar}
                alt="logo"
                style={{ width: "25px", height: "auto" }}
              />
            </IconButton>
          </Box>

          <Box sx={{
            display: "flex",
            gap: { xs: 0.5, sm: 1, md: 2 },
          }}>
            <IconButton
              onClick={() => navigate('/carrinho')}
            >
              <img
                src={carrinho}
                alt="logo"
                style={{ width: "25px", height: "auto" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
