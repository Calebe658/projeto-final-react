import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import calendario from '../../assets/calendario.svg'

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#F5F5F5", border: '1px solid lightGray', marginTop: "10px" }}>
            <CardContent>
                <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                    Precisando de prazo ? Na Casas Bahia tem jeito.
                </Typography>

                <div style={{
                    display: 'flex',
                    justifyContent: "space-between",
                    marginTop: "20px",
                    border: "1px solid lightGray",
                    borderRadius: '3px',
                    backgroundColor: "white",
                    height: "70px",
                    alignItems: "center"
                }}>

                    <div style={{ display: "flex", marginLeft: "10px" }}>
                        <img src={calendario} alt="" style={{ width: "30px" }} />

                        <div style={{ marginLeft: "10px" }}>
                            <Typography variant='subtitle2'>
                                Carnê Digital
                            </Typography>

                            <Typography variant='subtitle2'>
                                Parcele em até 24x
                            </Typography>
                        </div>
                    </div>

                    <div>
                        <Button sx={{
                            textDecoration: "underline",
                            "&:hover": {
                                textDecoration: "underline"
                            },
                            "&:focus": { outline: "none" }
                        }}
                            style={{ marginRight: "10px" }}>
                            Use agora
                        </Button>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
