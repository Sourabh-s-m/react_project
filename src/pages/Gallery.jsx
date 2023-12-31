import React, { useRef } from 'react';
import Navbar from './navbar/Navbar';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Footer from './Footer';
import CustomIcon from '../components/CustomIcon';
import before11 from '../../src/images/pngs/before11.png';
import after11 from '../../src/images/pngs/after11.png';
import before22 from '../../src/images/pngs/before22.png';
import after22 from '../../src/images/pngs/after22.png';
import before33 from '../../src/images/pngs/before33.png';
import after33 from '../../src/images/pngs/after33.png';
import before44 from '../../src/images/pngs/before44.png';
import after44 from '../../src/images/pngs/after44.png';

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
              mb: '60px',
            }}
          >
            Our Client Satisfaction Result
          </Typography>
          {/* <Grid container justifyContent={'center'}>
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
          </Grid> */}
          <Box
            sx={{
              display: isXs && 'flex',
              flexDirection: isXs && 'column',
              alignItems: isXs && 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: isXs ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isXs ? 'center' : '',
                pb: '18px',
                width: isXs ? '80%' : '100%',
                gap: isXs && '20px',
              }}
            >
              <Box
                sx={{
                  width: isXs ? '100%' : '39%',
                  boxShadow: '0px 0px 10px 0px #0000001A',
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: '18px',
                  borderRadius: '20px',
                }}
              >
                <Box
                  sx={{
                    width: '48%',
                    backgroundImage: `url(${before11})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    height: '280px',
                  }}
                ></Box>
                <Box
                  sx={{
                    width: '48%',
                    backgroundImage: `url(${after11})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    height: '280px',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  width: isXs ? '100%' : '59%',
                  boxShadow: '0px 0px 10px 0px #0000001A',
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: '18px',
                  borderRadius: '20px',
                }}
              >
                <Box
                  sx={{
                    width: '39%',
                    backgroundImage: `url(${before22})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    height: '280px',
                  }}
                ></Box>
                <Box
                  sx={{
                    width: '59%',
                    backgroundImage: `url(${after22})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    height: '280px',
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: isXs ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: isXs && '20px',
            }}
          >
            <Box
              sx={{
                width: isXs ? '80%' : '59%',
                boxShadow: '0px 0px 10px 0px #0000001A',
                display: 'flex',
                justifyContent: 'space-between',
                p: '18px',
                borderRadius: '20px',
              }}
            >
              <Box
                sx={{
                  width: '49%',
                  backgroundImage: `url(${before33})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  height: '441px',
                }}
              ></Box>

              <Box
                sx={{
                  width: '49%',
                  backgroundImage: `url(${after33})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  height: '441px',
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: isXs ? '80%' : '39%',
                boxShadow: '0px 0px 10px 0px #0000001A',
                display: 'flex',
                justifyContent: 'space-between',
                p: '18px',
                borderRadius: '20px',
              }}
            >
              <Box
                sx={{
                  width: '48%',
                  backgroundImage: `url(${before44})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  height: '441px',
                }}
              ></Box>
              <Box
                sx={{
                  width: '48%',
                  backgroundImage: `url(${after44})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  height: '441px',
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{}}>
        <Footer sectionRef={sectionRef} />
      </Box>
    </>
  );
};

export default Gallery;
