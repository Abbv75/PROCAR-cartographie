import { Box, Button, Card, Grid, Stack, Typography } from '@mui/joy'
import { CardMedia } from '@mui/material'
import { green, orange, red, yellow } from '@mui/material/colors'
import { IMAGE } from 'constant'

const Header = () => {
    return (
        <Stack>
            <Card sx={{
                borderRadius: 0,
                borderWidth: 0,
                p: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} >
                <Stack direction={'row'} alignItems={'center'} gap={1} >
                    {[IMAGE.logo, IMAGE.FIDA, IMAGE.armorieLogo].map(value => (
                        <CardMedia
                            src={value}
                            sx={{ height: '50px', width: '50px', objectFit: 'contain' }}
                            component={'img'}
                        />
                    ))}

                    <Typography level='h1' fontSize={15} width={300}>
                        Programme Cadre des Interventions du FIDA en milieu Rural (PROCAR)
                    </Typography>
                </Stack>

                <Button
                    children="Aller sur ruche"
                    size='sm'
                    color='success'
                    variant='plain'
                    onClick={() => {
                        window.location.href = 'https://sise-PROCAR.org/'
                    }}
                />
            </Card>

            <Grid container >
                <Grid bgcolor={green[600]} xs={6} p={0.2} />
                <Grid xs={6} >
                    <Stack>
                        <Box p={0.2} bgcolor={yellow[600]} />
                        <Box p={0.2} bgcolor={red[800]} />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Header