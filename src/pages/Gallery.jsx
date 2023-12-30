import React, { useRef } from 'react';
import Navbar from './navbar/Navbar';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Footer from './Footer';
import CustomIcon from '../components/CustomIcon';

const Gallery = () => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only('md'));
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Box
        sx={{
          minHeight: isMdScreen ? '100vh' : '100dvh',
          display: 'flex',
          flexDirection: 'column',
          p: !isXs && '80px',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Navbar scrollToSection={scrollToSection} />
          <Box
            sx={{
              pt: isXs ? '100px' : '40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: isXs ? 'none' : 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <CustomIcon name={'galleryFlower'} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <CustomIcon
                name={'lineAndDotToRight'}
                style={{ width: isXs ? '60px' : '85px', height: '10px' }}
                svgStyle={`width: ${isXs ? '60px' : '85px'} ; height: 10px`}
              />
              <Typography
                sx={{
                  pl: !isXs ? '52px' : '10px',
                  pr: !isXs ? '52px' : '10px',
                  fontFamily: 'moneta',
                  fontWeight: '900',
                  fontSize: isXs ? '24px' : '36px',
                  pt: '20px',
                }}
              >
                Gallery
              </Typography>
              <CustomIcon
                name={'lineAndDotToLeft'}
                style={{ width: isXs ? '60px' : '85px', height: '10px' }}
                svgStyle={`width: ${isXs ? '60px' : '85px'} ; height: 10px`}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: isXs ? 'none' : 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <CustomIcon
                name={'galleryGirl'}
                style={{ width: '297px', height: '338px' }}
                svgStyle={'width: 297px;height: 338px'}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              textAlign: 'center',
              // mt: '50px',
              color: '#4B4B4B',
              fontFamily: 'mukta',
              fontSize: '30px',
            }}
          >
            Our Client Satisfaction Result
          </Typography>
          <Grid container justifyContent={'center'}>
            <Grid item md={5} sx={{}}>
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <CustomIcon
                  name={'beforeAfterOne'}
                  style={{ width: '100%', height: '350px' }}
                  svgStyle={'width: 100%;height: 350px'}
                />
              </Box>
            </Grid>
            <Grid item md={7} sx={{}}>
              <Box sx={{ width: '100%' }}>
                <CustomIcon
                  name={'beforeAfterTwo'}
                  style={{ width: '100%', height: '350px' }}
                  svgStyle={'width: 100%;height: 350px'}
                />
              </Box>
            </Grid>
            <Grid item md={6} sx={{}}>
              <Box sx={{ width: '100%' }}>
                <CustomIcon
                  name={'beforeAfterThree'}
                  style={{ width: '100%', height: '350px' }}
                  svgStyle={'width: 100%;height: 350px'}
                />
              </Box>
            </Grid>
            <Grid item md={6} sx={{}}>
              <Box sx={{ width: '100%' }}>
                <CustomIcon
                  name={'beforeAfterFour'}
                  style={{ width: '100%', height: '350px' }}
                  svgStyle={'width: 100%;height: 350px'}
                />
              </Box>
            </Grid>
          </Grid>
          {/* <Grid container sx={{ mt: '62px' }} gap={'20px'}>
            <Grid
              item
              md={4}
              sx={{
                boxShadow: '0px 0px 15px 0px #0000001A',
                height: '316px',
                borderRadius: '19px',
                p: '18px',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  border: '1px solid red',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CustomIcon
                  name={'oneBefore'}
                  style={{ width: '100%', height: '100%' }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#FFF',
                  }}
                >
                  BEFORE
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  border: '1px solid red',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CustomIcon
                  name={'oneAfter'}
                  style={{ width: '100%', height: '100%' }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#FFF',
                  }}
                >
                  AFTER{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={7.8}
              sx={{
                boxShadow: '0px 0px 15px 0px #0000001A',
                height: '316px',
                borderRadius: '19px',
                p: '18px',
              }}
            ></Grid>
            <Grid
              item
              md={6.8}
              sx={{
                boxShadow: '0px 0px 15px 0px #0000001A',
                height: '477px',
                borderRadius: '19px',
                p: '18px',
              }}
            ></Grid>
            <Grid
              item
              md={5}
              sx={{
                boxShadow: '0px 0px 15px 0px #0000001A',
                height: '477px',
                borderRadius: '19px',
                p: '18px',
              }}
            ></Grid>
          </Grid> */}
        </Box>
      </Box>
      <Box sx={{}}>
        <Footer sectionRef={sectionRef} />
      </Box>
    </>
  );
};

export default Gallery;
