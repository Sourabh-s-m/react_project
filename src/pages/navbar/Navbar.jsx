import CustomIcon from '../../components/CustomIcon';
import {
  Box,
  Button,
  Dialog,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          minWidth: '300px',
          p: isMdScreen ? '30px 80px' : '15px 15px',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: '#fff',
          zIndex: 1000,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Grid item xs={11} md={4}>
          <CustomIcon
            name={'namratha'}
            style={{ width: '193px', height: '42px', cursor: 'pointer' }}
            svgStyle={'width: 193px; height: 42px'}
          />
        </Grid>
        {isMdScreen ? (
          <Grid item md={7} lg={5} xl={4}>
            <Grid
              container
              direction='row'
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Grid
                item
                sx={{
                  color: location.pathname === '/' ? '#147F82' : '#414141',
                  fontWeight: location.pathname === '/' ? '600' : '400',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'mukta',
                }}
                onClick={() => navigate('/')}
              >
                Home
              </Grid>
              <Grid
                item
                sx={{
                  cursor: 'pointer',
                  color:
                    location.pathname === '/services' ? '#147F82' : '#414141',
                  fontWeight: location.pathname === '/services' ? '600' : '400',
                  fontSize: '16px',
                  fontFamily: 'mukta',
                }}
                onClick={() => navigate('/services')}
              >
                Services
              </Grid>
              <Grid
                item
                sx={{
                  cursor: 'pointer',
                  color:
                    location.pathname === '/gallery' ? '#147F82' : '#414141',
                  fontWeight: location.pathname === '/gallery' ? '600' : '400',
                  fontSize: '16px',
                  fontFamily: 'mukta',
                }}
                onClick={() => navigate('/gallery')}
              >
                Gallery
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    width: '190px',
                    height: '50px',
                    borderRadius: '50px',
                    textTransform: 'capitalize',
                    backgroundColor: '#147F82',
                    color: '#FFF',
                    '&:hover': {
                      backgroundColor: '#147F82',
                      color: '#FFF',
                    },
                    fontFamily: 'mukta',
                    fontSize: '20px',
                  }}
                >
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={1}>
            <MenuIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => setDialogOpen(true)}
            />
          </Grid>
        )}
      </Grid>
      <Dialog
        fullScreen
        TransitionComponent={Slide}
        open={dialogOpen}
        keepMounted
        onClose={() => setDialogOpen(false)}
        TransitionProps={{ direction: 'right' }}
      >
        <Box
          sx={
            {
              // position: 'fixed',
              // top: 70,
              // left: '0',
              // right: '0',
              // minHeight: '15dvh',
              // boxShadow: '0px 0px 22px -1px rgba(0, 0, 0, 0.09)',
              // borderRadius: '10px',
              // zIndex: 1, // Make sure it's above other elements
              // backgroundColor: '#FFF',
              // p: '20px',
            }
          }
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: '20px',
            }}
          >
            <CustomIcon
              name={'namratha'}
              style={{ width: '193px', height: '42px', cursor: 'pointer' }}
              svgStyle={'width: 193px; height: 42px'}
            />
            <CloseIcon
              onClick={() => setDialogOpen(false)}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
          <List sx={{ p: '20px' }}>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemText
                primary='Home'
                sx={{
                  color: location.pathname === '/' ? '#147F82' : '#414141',
                  fontWeight: '900',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/services')}>
              <ListItemText
                primary='Services'
                sx={{
                  color:
                    location.pathname === '/services' ? '#147F82' : '#414141',
                  fontWeight: '900',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/gallery')}>
              <ListItemText
                primary='Gallery'
                sx={{
                  color:
                    location.pathname === '/gallery' ? '#147F82' : '#414141',
                  fontWeight: '900',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Navbar;
