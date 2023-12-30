import { Box, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomIcon from '../components/CustomIcon';

const Footer = ({ sectionRef }) => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.only('md'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));

  return (
    <Box ref={sectionRef}>
      {/* Footer */}
      <Grid
        container
        sx={{
          pl: '20px',
          pr: '20px',
          mt: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
          pb: '20px',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: '30px',
            pb: '30px',
          }}
        >
          <CustomIcon
            name={'namratha'}
            style={{
              width: '184px',
              height: '42px',
              cursor: 'pointer',
              marginTop: '20px',
              marginBottom: '10px',
            }}
            svgStyle={'width: 184px; height: 42px'}
          />
        </Grid>
        <Divider sx={{ height: '1px', bgcolor: '#BBBBBB', width: '100%' }} />
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: isSm || isXs ? 'column' : 'row',
            justifyContent: 'space-between',
            pt: '30px',
            pb: '30px',
            pl: '20px',
            pr: '20px',
          }}
          xs={12}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '18px' : isMdScreen ? '22px' : '18px',
                color: '#242424',
                mb: '24px',
              }}
            >
              Opening Hours
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
                mb: '8px',
              }}
            >
              Weekdays
            </Typography>
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                sx={{
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                  mb: '8px',
                }}
              >
                Morning: 10:30AM - 01:30PM
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                  mb: '8px',
                }}
              >
                Evening: 06:00PM - 08:00PM
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                }}
              >
                Saturday: 10:30AM - 2:00PM
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '18px' : isMdScreen ? '22px' : '18px',
                color: '#242424',
                mb: '24px',
                mt: isXs ? '30px' : isSm ? '30px' : '',
              }}
            >
              Address{' '}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              C - 68, 11th Cross(East)
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              Opp. Kovai Krishna Sweets
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              Thillainagar
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              Trichy - 620 018
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '18px' : isMdScreen ? '22px' : '18px',
                color: '#242424',
                mb: '24px',
                mt: isXs ? '30px' : isSm ? '30px' : '',
              }}
            >
              Contact{' '}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
                mb: '8px',
              }}
            >
              narmathaskinclinic93@gmail.com
            </Typography>
            <Typography
              sx={{
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              +91 9842413722{' '}
            </Typography>
          </Box>
        </Grid>
        <Divider
          sx={{ height: '1px', bgcolor: '#BBBBBB', width: '100%', mb: '10px' }}
        />
        <Grid
          container
          flexDirection={isMdScreen ? 'row' : 'column'}
          alignItems={!isMdScreen && 'center'}
          pt={'40px'}
          pb={'40px'}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isMdScreen ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                  cursor: 'pointer',
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  fontFamily: 'mukta',
                  fontWeight: 500,
                  fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                  color: '#4B4B4B',
                  cursor: 'pointer',
                }}
              >
                Terms of Service
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'mukta',
                fontWeight: 500,
                fontSize: isMd ? '14px' : isMdScreen ? '18px' : '14px',
                color: '#4B4B4B',
              }}
            >
              ©2022, All right reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: !isMdScreen && 'none' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <CustomIcon
                name={'facebook'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
              <CustomIcon
                name={'instagram'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
              <CustomIcon
                name={'twitter'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
              <CustomIcon
                name={'linkedin'}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                svgStyle={'width: 24px; height: 24px'}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection={'row'}
          justifyContent={'center'}
          p={'10px'}
          sx={{ display: isMdScreen && 'none' }}
        >
          <CustomIcon
            name={'facebook'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
          <CustomIcon
            name={'instagram'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
          <CustomIcon
            name={'twitter'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
          <CustomIcon
            name={'linkedin'}
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            svgStyle={'width: 24px; height: 24px'}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
