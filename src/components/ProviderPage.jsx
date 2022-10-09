import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useJsApiLoader, GoogleMap, MarkerF, Autocomplete } from '@react-google-maps/api';
import Skeleton from '@mui/material/Skeleton'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const center = {lat: 18.944941, lng: 72.825699};

function DrawerAppBar(props) {

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "***REMOVED***",
    libraries: ["places"]
  })
  if(!isLoaded){
    return <Skeleton variant="rectangular" width={210} height={118} />
  }
  


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',marginTop: "7%"}}>
      <Box 
      display= 'flex'
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      minHeight="10vh">
        <Card sx={{ minHeight: 10, display: 'flex', marginBottom: "2%"}} >
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
              Enter the Amount of Food: 
            </Typography>
          </CardContent>
          <CardActions>
          <TextField id="outlined-basic" label="Food in Kilos" variant="outlined" />
          </CardActions>
        </Card>
        <Card sx={{ minHeight: 10, display: 'flex', marginBottom: "2%"}} >
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
              Enter your Location:
            </Typography>
          </CardContent>
          <CardActions>
            <Autocomplete>
            <TextField id="outlined-basic" label="Location" variant="outlined" />
            </Autocomplete>
          </CardActions>
        </Card>
      </Box>
      <Divider/>
      <Box component="main" sx={{height: "100vh", height:"100vh"}}>
        <GoogleMap 
        center= {center} 
        zoom={16} 
        mapContainerStyle={{width:'100%', height:'100%'}}
        options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl:false,

        }}
        >
            <MarkerF position={center} />
            { }
        </GoogleMap>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
