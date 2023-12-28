import { useTheme } from '@mui/material';
import { ReactSVG } from 'react-svg';

// -----------SVG's----------------

import namratha from '../../src/images/svgs/namratha.svg';
import doctor from '../../src/images/svgs/doctor.svg';
import animDoc from '../../src/images/svgs/animDoc.svg';
import clinicalDerma from '../../src/images/svgs/clinicalDerma.svg';
import interThera from '../../src/images/svgs/interThera.svg';
import skinReju from '../../src/images/svgs/skinReju.svg';
import threeDoc from '../../src/images/svgs/threeDoc.svg';
import phone from '../../src/images/svgs/phone.svg';
import post from '../../src/images/svgs/post.svg';
import facebook from '../../src/images/svgs/facebook.svg';
import instagram from '../../src/images/svgs/instagram.svg';
import linkedin from '../../src/images/svgs/linkedin.svg';
import twitter from '../../src/images/svgs/twitter.svg';
// import lineAndDotToLeft from '../../src/images/svgs/lineAndDotToLeft.svg';
// import lineAndDotToRight from '../../src/images/svgs/lineAndDotToRight.svg';
import beforeOne from '../../src/images/svgs/beforeOne.svg';
import afterOne from '../../src/images/svgs/afterOne.svg';
import clinicalDermaIcon from '../../src/images/svgs/clinicalDermaIcon.svg';
import clinicalEclipse from '../../src/images/svgs/clinicalEclipse.svg';
import skinEclipse from '../../src/images/svgs/skinEclipse.svg';
import hairEclipse from '../../src/images/svgs/hairEclipse.svg';
import laserEclipse from '../../src/images/svgs/laserEclipse.svg';
import dermatolEclipse from '../../src/images/svgs/dermatolEclipse.svg';
import allergies from '../../src/images/svgs/allergies.svg';
import autoimmune from '../../src/images/svgs/autoimmune.svg';
import skinRash from '../../src/images/svgs/skinRash.svg';
import psoriasis from '../../src/images/svgs/psoriasis.svg';
import vitiligo from '../../src/images/svgs/vitiligo.svg';
import eczema from '../../src/images/svgs/eczema.svg';
import paediatric from '../../src/images/svgs/paediatric.svg';
import std from '../../src/images/svgs/std.svg';
import hansen from '../../src/images/svgs/hansen.svg';
import prp from '../../src/images/svgs/prp.svg';
import microneedling from '../../src/images/svgs/microneedling.svg';
import alopecia from '../../src/images/svgs/alopecia.svg';
import gfc from '../../src/images/svgs/gfc.svg';
import melasma from '../../src/images/svgs/melasma.svg';
import chemicalPeels from '../../src/images/svgs/chemicalPeels.svg';
import botox from '../../src/images/svgs/botox.svg';
import skinBiopsy from '../../src/images/svgs/skinBiopsy.svg';
import acneScar from '../../src/images/svgs/acneScar.svg';
import acnePigmentation from '../../src/images/svgs/acnePigmentation.svg';
import carbonPeel from '../../src/images/svgs/carbonPeel.svg';
import laserHair from '../../src/images/svgs/laserHair.svg';
import tattooRemoval from '../../src/images/svgs/tattooRemoval.svg';
import skinCorn from '../../src/images/svgs/skinCorn.svg';
import skinTag from '../../src/images/svgs/skinTag.svg';
import wartRemoval from '../../src/images/svgs/wartRemoval.svg';
import moleRemoval from '../../src/images/svgs/moleRemoval.svg';
import beforeAfterOne from '../../src/images/svgs/beforeAfterOne.svg';
import beforeAfterTwo from '../../src/images/svgs/beforeAfterTwo.svg';
import beforeAfterThree from '../../src/images/svgs/beforeAfterThree.svg';
import beforeAfterFour from '../../src/images/svgs/beforeAfterFour.svg';
import galleryGirl from '../../src/images/svgs/galleryGirl.svg';
import galleryFlower from '../../src/images/svgs/galleryFlower.svg';
import threeG from '../../src/images/svgs/threeG.svg';
import oneBefore from '../../src/images/svgs/oneBefore.svg';
import oneAfter from '../../src/images/svgs/oneAfter.svg';

const createIcon = ({
  style,
  className,
  onClick,
  alt,
  onMouseDown,
  svgStyle,
  color,
  src,
}) => {
  return (
    <ReactSVG
      src={src}
      style={style}
      className={className}
      beforeInjection={(svg) => {
        svg.setAttribute('style', svgStyle);
      }}
      onClick={onClick}
      color={color}
    />
  );
};

const CustomIcon = ({
  name,
  style,
  className,
  onClick,
  alt,
  svgStyle,
  color,
}) => {
  const theme = useTheme();

  const light = {
    oneAfter: createIcon({
      src: oneAfter,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    oneBefore: createIcon({
      src: oneBefore,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    threeG: createIcon({
      src: threeG,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    galleryFlower: createIcon({
      src: galleryFlower,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    galleryGirl: createIcon({
      src: galleryGirl,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    beforeAfterFour: createIcon({
      src: beforeAfterFour,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    beforeAfterThree: createIcon({
      src: beforeAfterThree,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    beforeAfterTwo: createIcon({
      src: beforeAfterTwo,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    beforeAfterOne: createIcon({
      src: beforeAfterOne,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    moleRemoval: createIcon({
      src: moleRemoval,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    wartRemoval: createIcon({
      src: wartRemoval,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinTag: createIcon({
      src: skinTag,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinCorn: createIcon({
      src: skinCorn,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    carbonPeel: createIcon({
      src: carbonPeel,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    tattooRemoval: createIcon({
      src: tattooRemoval,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    laserHair: createIcon({
      src: laserHair,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    acnePigmentation: createIcon({
      src: acnePigmentation,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    acneScar: createIcon({
      src: acneScar,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinBiopsy: createIcon({
      src: skinBiopsy,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    melasma: createIcon({
      src: melasma,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    botox: createIcon({
      src: botox,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    chemicalPeels: createIcon({
      src: chemicalPeels,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    gfc: createIcon({
      src: gfc,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    microneedling: createIcon({
      src: microneedling,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    alopecia: createIcon({
      src: alopecia,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    prp: createIcon({
      src: prp,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    hansen: createIcon({
      src: hansen,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    std: createIcon({
      src: std,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    paediatric: createIcon({
      src: paediatric,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    eczema: createIcon({
      src: eczema,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    vitiligo: createIcon({
      src: vitiligo,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    psoriasis: createIcon({
      src: psoriasis,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinRash: createIcon({
      src: skinRash,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    autoimmune: createIcon({
      src: autoimmune,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    allergies: createIcon({
      src: allergies,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinEclipse: createIcon({
      src: skinEclipse,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    hairEclipse: createIcon({
      src: hairEclipse,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    laserEclipse: createIcon({
      src: laserEclipse,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    dermatolEclipse: createIcon({
      src: dermatolEclipse,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    clinicalEclipse: createIcon({
      src: clinicalEclipse,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    namratha: createIcon({
      src: namratha,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    doctor: createIcon({
      src: doctor,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    animDoc: createIcon({
      src: animDoc,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    clinicalDerma: createIcon({
      src: clinicalDerma,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    interThera: createIcon({
      src: interThera,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinReju: createIcon({
      src: skinReju,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    threeDoc: createIcon({
      src: threeDoc,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    phone: createIcon({
      src: phone,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    post: createIcon({
      src: post,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    facebook: createIcon({
      src: facebook,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    instagram: createIcon({
      src: instagram,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    linkedin: createIcon({
      src: linkedin,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    twitter: createIcon({
      src: twitter,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    // lineAndDotToLeft: createIcon({
    //   src: lineAndDotToLeft,
    //   style,
    //   className,
    //   svgStyle,
    //   onClick,
    //   color,
    // }),
    // lineAndDotToRight: createIcon({
    //   src: lineAndDotToRight,
    //   style,
    //   className,
    //   svgStyle,
    //   onClick,
    //   color,
    // }),
    beforeOne: createIcon({
      src: beforeOne,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    afterOne: createIcon({
      src: afterOne,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    clinicalDermaIcon: createIcon({
      src: clinicalDermaIcon,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
  };

  return <div>{theme.palette.mode === 'light' && light[name]}</div>;
};

export default CustomIcon;
