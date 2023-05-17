import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export const LandingPage = (props)=> {
    return(<>
     {/* Hero unit */}
     <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              London Cars
            </Typography>
            <div className="image-container"><img className='centered-image' src="./car.jpg" /></div>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            London Cars is a leading car rental service in London, offering a wide range of vehicles to suit every need. Whether you're traveling for business or pleasure, we have the perfect car for you. Our fleet includes everything from compact cars to luxury sedans, so you can choose the perfect vehicle to fit your budget and style. With convenient locations throughout the city and flexible rental options, we make it easy to get around and explore all that London has to offer. Book your car today and experience the freedom and flexibility of London Cars.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {!props.isAuthenticated && <Button variant="contained" color="secondary" onClick={props.handleLogin}>Get Started</Button>}
            </Stack>
          </Container>
        </Box>
    </>)
}