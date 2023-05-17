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
              London Spot
            </Typography>
            <div className="image-container"><img className='centered-image' src="./parking.jpg" /></div>
 
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            With London Spots, you can easily find and reserve a parking spot in London. Our simple and user-friendly platform allows you to reserve a spot in just a few clicks, giving you peace of mind and saving you time and hassle.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              marginBottom={4}
            >
              {!props.isAuthenticated && <Button variant="contained" color="primary" onClick={props.handleLogin}>Get Started</Button>}
            </Stack>
          </Container>
        </Box>
    </>)
}