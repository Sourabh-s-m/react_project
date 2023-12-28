import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';
import CustomIcon from '../components/CustomIcon';

const Services = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('clinical');
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isMdScreenOnly = useMediaQuery(
    '(min-width:900px) and (max-width:1200px)'
  );

  return (
    <>
      <Box
        sx={{
          minHeight: isMdScreen ? '100vh' : '100dvh',
          display: 'flex',
          flexDirection: 'column',
          p: isXs ? '20px' : '80px',
          pt: isXs && '80px',
        }}
      >
        {/* Services */}
        <Box>
          <Navbar />
        </Box>

        {/* Our Services Text Box */}
        {/* <Box
          sx={{
            pt: isXs ? '20px' : '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: isXs && 'none',
            }}
          ></Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: isXs ? 'center' : 'flex-end',
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
              Our Services
            </Typography>
            <CustomIcon
              name={'lineAndDotToLeft'}
              style={{ width: isXs ? '60px' : '85px', height: '10px' }}
              svgStyle={`width: ${isXs ? '60px' : '85px'} ; height: 10px`}
            />
          </Box>
          <Box
            sx={{
              // flexGrow: 1,
              display: isXs ? 'none' : 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <CustomIcon
              name={'threeG'}
              style={{ width: '523px', height: '375px' }}
              svgStyle={`width: 523px ; height: 375px`}
            />
          </Box>
        </Box> */}
        <Grid
          container
          sx={{
            display: isMdScreen && 'none',
            justifyContent: 'center',
            mt: '20px',
            mb: '20px',
          }}
        >
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                justifyContent: isXs ? 'center' : 'flex-end',
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
                Our Services
              </Typography>
              <CustomIcon
                name={'lineAndDotToLeft'}
                style={{ width: isXs ? '60px' : '85px', height: '10px' }}
                svgStyle={`width: ${isXs ? '60px' : '85px'} ; height: 10px`}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={'center '}
          sx={{ mt: '200px', display: !isMdScreen && 'none' }}
        >
          <Grid item md={2} lg={3}></Grid>
          <Grid item md={8} lg={6}>
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
                style={{ width: isXs ? '60px' : '80px', height: '10px' }}
                svgStyle={`width: ${isXs ? '60px' : '80px'} ; height: 10px`}
              />
              <Typography
                sx={{
                  pl: !isXs ? '52px' : '10px',
                  pr: !isXs ? '52px' : '10px',
                  fontFamily: 'moneta',
                  fontWeight: '900',
                  fontSize: isXs ? '24px' : '30px',
                  pt: '20px',
                }}
              >
                Our Services
              </Typography>
              <CustomIcon
                name={'lineAndDotToLeft'}
                style={{ width: isXs ? '60px' : '85px', height: '10px' }}
                svgStyle={`width: ${isXs ? '60px' : '85px'} ; height: 10px`}
              />
            </Box>
          </Grid>
          <Grid item md={2} lg={3} sx={{ position: 'relative' }}>
            <CustomIcon
              name={'threeG'}
              style={{
                width: '400px',
                height: '375px',
                position: 'absolute',
                top: -140,
                left: isMdScreenOnly ? -200 : -80,
                zIndex: -1,
              }}
              svgStyle={`width: 400px ; height: 375px`}
            />
          </Grid>
        </Grid>

        {/* Services Headings Box */}
        <Grid
          container
          sx={{ mt: isXs ? '20px' : '80px' }}
          gap={2}
          justifyContent={'center'}
        >
          <Grid
            item
            sx={{
              borderRadius: '9px',
              bgcolor: activeServiceTab === 'clinical' ? '#147F82' : '#FFFFFF',
              cursor: 'pointer',
              boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
            }}
            xs={12}
            sm={5.8}
            lg={3.8}
            onClick={() => setActiveServiceTab('clinical')}
          >
            <Box
              sx={{
                p: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '40px',
              }}
            >
              <CustomIcon
                name={'clinicalEclipse'}
                style={{ width: '50px', height: '78px' }}
                // svgStyle={'width: 50px; height: 78px'}
              />
              <Typography
                sx={{
                  color:
                    activeServiceTab === 'clinical' ? '#FFFFFF' : '#147F82',
                  fontWeight: activeServiceTab === 'clinical' ? 500 : 600,
                  fontFamily: 'mukta',
                  fontSize: '18px',
                }}
              >
                Clinical Dermatology
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              bgcolor: activeServiceTab === 'hair' ? '#147F82' : '#FFFFFF',
              borderRadius: '9px',
              cursor: 'pointer',
              boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
            }}
            xs={12}
            sm={5.8}
            lg={3.8}
            onClick={() => setActiveServiceTab('hair')}
          >
            <Box
              sx={{
                p: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '40px',
              }}
            >
              <CustomIcon
                name={'hairEclipse'}
                style={{ width: '50px', height: '78px' }}
                // svgStyle={'width: 50px; height: 78px'}
              />
              <Typography
                sx={{
                  color: activeServiceTab === 'hair' ? '#FFFFFF' : '#147F82',
                  fontWeight: activeServiceTab === 'hair' ? 500 : 600,
                  fontFamily: 'mukta',
                  fontSize: '18px',
                }}
              >
                Hair Treatment{' '}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              bgcolor: activeServiceTab === 'skin' ? '#147F82' : '#FFFFFF',
              borderRadius: '9px',
              cursor: 'pointer',
              boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
            }}
            xs={12}
            sm={5.8}
            lg={3.8}
            onClick={() => setActiveServiceTab('skin')}
          >
            <Box
              sx={{
                p: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '40px',
              }}
            >
              <CustomIcon
                name={'skinEclipse'}
                style={{ width: '50px', height: '78px' }}
                // svgStyle={'width: 50px; height: 78px'}
              />
              <Typography
                sx={{
                  color: activeServiceTab === 'skin' ? '#FFFFFF' : '#147F82',
                  fontWeight: activeServiceTab === 'skin' ? 500 : 600,
                  fontFamily: 'mukta',
                  fontSize: '18px',
                }}
              >
                Skin Treatment{' '}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              bgcolor: activeServiceTab === 'laser' ? '#147F82' : '#FFFFFF',
              borderRadius: '9px',
              cursor: 'pointer',
              boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
            }}
            xs={12}
            sm={5.8}
            lg={3.8}
            onClick={() => setActiveServiceTab('laser')}
          >
            <Box
              sx={{
                p: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '40px',
              }}
            >
              <CustomIcon
                name={'laserEclipse'}
                style={{ width: '50px', height: '78px' }}
                // svgStyle={'width: 50px; height: 78px'}
              />
              <Typography
                sx={{
                  color: activeServiceTab === 'laser' ? '#FFFFFF' : '#147F82',
                  fontWeight: activeServiceTab === 'laser' ? 500 : 600,
                  fontFamily: 'mukta',
                  fontSize: '18px',
                }}
              >
                Laser Therapies{' '}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              bgcolor: activeServiceTab === 'dermatol' ? '#147F82' : '#FFFFFF',
              borderRadius: '9px',
              cursor: 'pointer',
              boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
            }}
            xs={12}
            sm={5.8}
            lg={3.8}
            onClick={() => setActiveServiceTab('dermatol')}
          >
            <Box
              sx={{
                p: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '40px',
              }}
            >
              <CustomIcon
                name={'dermatolEclipse'}
                style={{ width: '50px', height: '78px' }}
                // svgStyle={'width: 50px; height: 78px'}
              />
              <Typography
                sx={{
                  color:
                    activeServiceTab === 'dermatol' ? '#FFFFFF' : '#147F82',
                  fontWeight: activeServiceTab === 'dermatol' ? 500 : 600,
                  fontFamily: 'mukta',
                  fontSize: '18px',
                }}
              >
                Dermatol Surgery{' '}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Active Service Heading */}
        {activeServiceTab === 'clinical' && (
          <Typography
            sx={{
              textAlign: 'center',
              mt: isXs ? '20px' : '80px',
              fontFamily: 'mukta',
              fontSize: '28px',
            }}
          >
            Clinical Dermatology
          </Typography>
        )}
        {activeServiceTab === 'hair' && (
          <Typography
            sx={{
              textAlign: 'center',
              mt: isXs ? '20px' : '80px',
              fontFamily: 'mukta',
              fontSize: '28px',
            }}
          >
            Hair Treatment{' '}
          </Typography>
        )}
        {activeServiceTab === 'skin' && (
          <Typography
            sx={{
              textAlign: 'center',
              mt: isXs ? '20px' : '80px',
              fontFamily: 'mukta',
              fontSize: '28px',
            }}
          >
            Skin Treatment{' '}
          </Typography>
        )}
        {activeServiceTab === 'laser' && (
          <Typography
            sx={{
              textAlign: 'center',
              mt: isXs ? '20px' : '80px',
              fontFamily: 'mukta',
              fontSize: '28px',
            }}
          >
            Laser Therapies{' '}
          </Typography>
        )}
        {activeServiceTab === 'dermatol' && (
          <Typography
            sx={{
              textAlign: 'center',
              mt: isXs ? '20px' : '80px',
              fontFamily: 'mukta',
              fontSize: '28px',
            }}
          >
            Dermatol Surgery{' '}
          </Typography>
        )}

        {/* Active Service Content Clinical */}

        {activeServiceTab === 'clinical' && (
          <Grid
            container
            gap={2}
            flexDirection={'row'}
            justifyContent={'center'}
            sx={{ mt: isXs ? '' : '50px' }}
          >
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'allergies'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  ALLERGIES
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Skin allergies result in red, itchy rashes as the immune
                  system reacts to triggers, necessitating identification and
                  avoidance for relief.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={5.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'autoimmune'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  AUTOIMMUNE DISORDERS{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Autoimmune disorders involve the immune system mistakenly
                  attacking the body's tissues, causing conditions like
                  rheumatoid arthritis and lupus.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'skinRash'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  SKIN RASH/ BLISTERING DISORDERS
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Skin diseases where there is blister formation.{' '}
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'psoriasis'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  PSORIARIS TREATMENT{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Psoriasis is managed with creams, light therapy, and
                  medications to alleviate symptoms in this chronic skin
                  condition.{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={5.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'vitiligo'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                  }}
                >
                  VITILIGO{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Loss of skin colour leading to white patches.{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'eczema'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  ANY TYPE OF ECZEMA{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Inflammatory skin condition characterized by dry, itchy, and
                  irritated patches.{' '}
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'paediatric'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  PAEDIATRIC DERMATOLOGY{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Paediatric dermatology specializes in addressing skin
                  conditions unique to children, including eczema, birthmarks,
                  and infections.{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={5.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'std'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  SEXUALLY TRANSMITTED INFECTIONS{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Infections transmitted via sex can cause redness, itching,
                  discharge in the private areas. Patients are examined with
                  utmost care and with complete doctor-patient confidentiality
                  and appropriate treatment is provided.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'hansen'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
                name={'clinicalDerma'}
                style={{ width: '100%', height: '174px' }}
                svgStyle={'width: 100%; height: 174px'}
              /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  HANSEN'S DISEASE{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Hansen's disease, or leprosy, is a chronic bacterial infection
                  causing skin lesions and nerve damage.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}

        {/* Active Service Content Skin */}

        {activeServiceTab === 'skin' && (
          <Grid
            container
            gap={2}
            flexDirection={'row'}
            justifyContent={'center'}
            sx={{ mt: isXs ? '' : '50px' }}
          >
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'melasma'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
            name={'clinicalDerma'}
            style={{ width: '100%', height: '174px' }}
            svgStyle={'width: 100%; height: 174px'}
          /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  MELASMA THERAPY{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Melasma therapy utilizes topical agents, peels, and lasers to
                  address facial hyperpigmentation and dark patches.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'chemicalPeels'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
            name={'clinicalDerma'}
            style={{ width: '100%', height: '174px' }}
            svgStyle={'width: 100%; height: 174px'}
          /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  CHEMICAL PEELS{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Chemical peels involve applying a chemical solution to the
                  skin to exfoliate and improve its texture, treating issues
                  like wrinkles, acne scars, and pigmentation irregularities.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'botox'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
            name={'clinicalDerma'}
            style={{ width: '100%', height: '174px' }}
            svgStyle={'width: 100%; height: 174px'}
          /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  BOTOX{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  BOTOX is a neurotoxin injected into muscles to temporarily
                  reduce wrinkles and fine lines by inhibiting muscle
                  contractions, commonly used for cosmetic purposes.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'skinBiopsy'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
            name={'clinicalDerma'}
            style={{ width: '100%', height: '174px' }}
            svgStyle={'width: 100%; height: 174px'}
          /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  SKIN BIOPSY{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  A skin biopsy involves the removal of a small tissue sample
                  for microscopic examination, aiding in the diagnosis of
                  various skin conditions.{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'acneScar'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
            name={'clinicalDerma'}
            style={{ width: '100%', height: '174px' }}
            svgStyle={'width: 100%; height: 174px'}
          /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                  }}
                >
                  ACNE SCAR{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Acne scars arise from tissue damage during healing, often
                  treated with interventions like laser therapy for improved
                  skin texture.{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5.8}
              xl={3.2}
              sx={{
                // boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'acnePigmentation'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  // marginTop: '30px',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // height: '20%',
                  height: '80%',
                  // border: '1px solid green',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* <CustomIcon
            name={'clinicalDerma'}
            style={{ width: '100%', height: '174px' }}
            svgStyle={'width: 100%; height: 174px'}
          /> */}
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  ACNE PIGMENTATION{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Acne pigmentation involves dark spots post-healing, addressed
                  through topical agents or procedures to reduce
                  hyperpigmentation.{' '}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}

        {/* Active Service Content Hair */}

        {activeServiceTab === 'hair' && (
          <Grid
            container
            gap={2}
            flexDirection={'row'}
            justifyContent={'center'}
            sx={{ mt: isXs ? '' : '50px' }}
          >
            <Grid
              item
              xs={12}
              md={9.2}
              lg={4.8}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'prp'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  PRP THERAPY
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  PRP (Platelet-Rich Plasma) therapy utilizes concentrated
                  platelets from the patient's blood for skin rejuvenation, hair
                  loss treatment, and wound healing.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={7}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'microneedling'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: isXs ? 0 : -150,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: !isXs && 'flex-end',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  MICRONEEDING SCALP{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: isXs ? 'center' : 'right',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Microneedling scalp is a minimally invasive procedure that
                  involves creating tiny punctures in the scalp with fine
                  needles to stimulate hair follicles, promoting hair growth and
                  thickness.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={7}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'alopecia'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: isXs ? 0 : 150,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: !isXs && 'flex-start',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: isXs ? 'center' : 'left',
                  }}
                >
                  INJECTIONS FOR ALOPECIA AREATA{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: isXs ? 'center' : 'right',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Injections for alopecia areata typically involve
                  corticosteroids administered directly into the affected areas
                  of the scalp, aiming to suppress inflammation and stimulate
                  hair regrowth in this autoimmune-related hair loss condition{' '}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={4.8}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'gfc'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  GFC THERAPY{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  GFc therapy, or Growth Factor and Cytokine therapy, involves
                  the use of proteins to promote tissue repair, often applied in
                  regenerative medicine for conditions like osteoarthritis and
                  chronic wounds.{' '}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}

        {/* Active Service Content Laser */}

        {activeServiceTab === 'laser' && (
          <Grid
            container
            gap={2}
            flexDirection={'row'}
            justifyContent={'center'}
            sx={{ mt: isXs ? '' : '50px' }}
          >
            <Grid
              item
              xs={12}
              md={9.2}
              lg={4.8}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'allergies'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  PIGMENTATION{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Pigmentation involves skin coloration influenced by melanin,
                  presenting variations such as hyperpigmentation or
                  hypopigmentation.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={7}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'carbonPeel'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: isXs ? 0 : -150,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: !isXs && 'flex-end',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  CARBON PEEL LASER (HOLLYWOOD FACIAL){' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: isXs ? 'center' : 'right',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Carbon peel laser, or Hollywood facial, combines carbon lotion
                  and laser for skin exfoliation, pore reduction, and improved
                  texture.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={7}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'laserHair'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: isXs ? 0 : 150,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: !isXs && 'flex-start',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: isXs ? 'center' : 'left',
                  }}
                >
                  LASER HAIR REMOVAL{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: isXs ? 'center' : 'right',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Laser hair removal hinders hair growth by targeting and
                  damaging follicles with concentrated light.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={4.8}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'tattooRemoval'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  TATTOO REMOVAL{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Tattoo removal utilizes lasers to break down ink particles,
                  gradually fading or eliminating the tattoo through natural
                  processes.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}

        {/* Active Service Content Dermatol */}

        {activeServiceTab === 'dermatol' && (
          <Grid
            container
            gap={2}
            flexDirection={'row'}
            justifyContent={'center'}
            sx={{ mt: isXs ? '' : '50px' }}
          >
            <Grid
              item
              xs={12}
              md={9.2}
              lg={4.8}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'skinCorn'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  SKIN CORN REMOVAL{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Corn removal addresses thickened skin due to pressure or
                  friction, often on the feet, using pads or manual methods.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={7}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'skinTag'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: isXs ? 0 : -150,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: !isXs && 'flex-end',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  SKIN TAG REMOVAL{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: isXs ? 'center' : 'right',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Skin tag removal utilizes methods like cutting, freezing, or
                  cauterization to safely eliminate small benign outgrowths for
                  cosmetic purposes.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={7}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'wartRemoval'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: isXs ? 0 : 150,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: !isXs && 'flex-start',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: isXs ? 'center' : 'left',
                  }}
                >
                  WART REMOVAL{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: isXs ? 'center' : 'right',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Wart removal employs methods like cryotherapy or laser therapy
                  to eliminate skin growths caused by the human papillomavirus
                  (HPV).
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9.2}
              lg={4.8}
              sx={{
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
            >
              <CustomIcon
                name={'moleRemoval'}
                style={{
                  width: '100%',
                  height: '160px',
                  zIndex: 1,
                  position: 'absolute',
                  top: 40,
                  left: 0,
                }}
                svgStyle={'width: 100%; height: 160px'}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '80%',
                  borderRadius: '10px',
                  p: '80px',
                  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }}
              >
                <Typography
                  sx={{
                    pt: '110px',
                    fontFamily: 'mukta',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#242424',
                    textAlign: 'center',
                  }}
                >
                  MOLE REMOVAL{' '}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: '10px',
                    fontFamily: 'mukta',
                    color: '#4B4B4B',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Mole removal uses surgical excision or laser therapy to
                  eliminate benign skin lesions for cosmetic or health reasons.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Services;
