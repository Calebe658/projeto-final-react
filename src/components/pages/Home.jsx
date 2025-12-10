import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OutlinedCard from '../molecules/OutlinedCard';
import Banner from '../organism/Banner'
import frasco from '../../assets/frasco.png'

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://node-vercel-app-rho.vercel.app/api/produtos')
            .then((response) => setData(response.data.produtos))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={'home'}>
            <Banner />

            <div style={{ padding: 20 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <h2>Most Popular</h2>

                    <Grid container spacing={10}>
                        {data?.map((produtos, index) => (
                            <Grid size={3} key={index}>
                                <div style={{ width: "275px" }}>
                                    <OutlinedCard
                                        id={produtos._id}
                                        nome={produtos.nome}
                                        foto={frasco}
                                        preco={`$${produtos.preco.valor}`}
                                        imgStyle={{ width: "200px", marginLeft: "20%" }}
                                    />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Home;
