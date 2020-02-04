import posed from 'react-pose';

export const ImageButton = posed.img({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
});

export const SectionContainer = posed.div({
  visible: {
    delayChildren: 100,
    staggerChildren: 100,
  },
});

export const DropFade = posed.div({
  visible: {
      y: '0px',
      opacity: 1,
      transition: {
          duration: 500,
      },
  },
  hidden: {
      y: '-100px',
      opacity: 0,
      transition: {
          duration: 500,
      },
  },
});

export const LeftFade = posed.div({
  visible: {
      x: '0px',
      opacity: 1,
      transition: {
          duration: 500,
      },
  },
  hidden: {
      x: '-100px',
      opacity: 0,
      transition: {
          duration: 500,
      },
  },
});

export const RightFade = posed.div({
  visible: {
      x: '0px',
      opacity: 1,
      transition: {
          duration: 500,
      },
  },
  hidden: {
      x: '100px',
      opacity: 0,
      transition: {
          duration: 500,
      },
  },
});

export const Fade = posed.div({
  visible: {
      opacity: 1,
      transition: {
          duration: 1000,
      },
  },
  hidden: {
      opacity: 0,
      transition: {
          duration: 1000,
      },
  },
});