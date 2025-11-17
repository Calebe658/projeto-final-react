import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OutlinedCard from '../molecules/OutlinedCard';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://node-vercel-app-rho.vercel.app/api/funcionarios')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={'home'}>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    {data?.map((funcionario, index) => (
                        <Grid size={5} key={index}>
                            <div style={{ width: "275px" }}>
                                <OutlinedCard
                                    nome={funcionario.nome}
                                    dtNascimento={funcionario.dtNascimento}
                                    cargo={funcionario.cargo}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Home;
