import React, {useEffect, useState } from 'react'
import { Box, Grid, List, ListItemButton, ListItemText, Typography} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { example } from './exEvents';
interface EventItem {
   eventTitle: string;
    date: string;
    descriptionParagraphs: string[],
    photo: string | null
  }
  
const Events = () => {
    const [events,setEvents] = useState<EventItem[]>([]);
  useEffect(()=>{
    setEvents(example);
  }, [example])

    
  return (
    <Box
    id='events'
    sx={{
      height: '100vh',
      backgroundImage: 'url(/1.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      color: 'white',
      flexDirection: 'column',
      backgroundColor: 'rgb(23, 19, 20)',
    }}
  >
      
       {/* <span style={{animation: '1s showAnim forwards',width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(23, 19, 20, .7)'}}>{details}</span> : */}
    <Grid height={'100vh'} container sx={{animation: '1s showAnim forwards'}}>

        <Grid xs={12} lg={6} item display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 
        <Box sx={{bgcolor: 'rgba(23, 19, 20, .7)', margin: '8px', borderRadius: '5px'}}>

        <Typography variant="h4" gutterBottom>
          Zobacz najbliższe wydarzenia:
        </Typography>
        <List>
          {events.map((item, index) => (
            <ListItemButton
              key={index}
              href='https://www.facebook.com/'
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                color: 'white',
              }}
            >
              <ListItemText 
                primary={
                  <Typography sx={{ color: 'white' }}>
                    {item.eventTitle}
                  </Typography>
                } 
                secondary={
                  <Typography sx={{ color: 'white' }}>
                    Data: {item.date}
                  </Typography>
                }
              />
              <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
        </Box>
      </Grid>
      <Grid item xs={0} lg={6}/>
    </Grid>
        
  </Box>
  )
}

export default Events