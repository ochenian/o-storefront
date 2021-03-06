import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import 'intersection-observer';
import ThreeDPostcard from './3D_Postcard';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  // margin: 3em;
  // padding: 24vw;
  // padding-bottom: 20vh;
  // padding-top: 14vh;
  max-width: 1230px;
  flex-grow: 1;
  // margin: 0 32px;
  padding: 128px 96px;
  // min-width: 560px;
  min-width: 0;
  max-width: 640px;
  @media (max-width: 768px) {
    // padding: 10vw;
    // padding-top: 14vh;
    // padding-bottom: 20vh;
    padding: 96px;
  }

  @media (min-width: 1201px) {
    // padding: 128px 296px 182px 296px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    padding: 96px 32px;
  }
`;

const ImageCoverAnchor = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 20;
`;

const ImageCover = styled(Img)`
  width: 100%;
  z-index: 10;
`;

const OverflowCoverWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: hidden;
`;

const MotionCoverContainer = styled.div`
  height: 100%;
`;

const RotatingPostcard = ({
  index,
  onStepEnter,
  imgReveal,
  imgFront,
  imgBack,
  imageCoverRef,
  postcardContainerRef,
}) => {
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const [offsetTop, setOffsetTop] = useState(0);

  // eslint-disable-next-line consistent-return
  // useLayoutEffect(() => {
  //   if (!ref.current) return undefined;
  //   setOffsetTop(ref.current.getBoundingClientRect().top);
  //   return undefined;
  // }, [ref]);

  // const y = useSpring(
  //   useTransform(scrollY, [offsetTop - 1000, offsetTop - 750], ['0%', '100%']),
  // );

  // const rotateY = useSpring(
  //   useTransform(scrollY, [offsetTop - 750, offsetTop - 500], [0, 180]),
  // );
  // rotateY.updateAndNotify(0);

  function transformTemplate(transformProps, transformedString) {
    return `perspective(600px) ${transformedString}`;
  }

  return (
    <ImageContainer id="imageContainer">
      <ImageCoverAnchor>
        <OverflowCoverWrapper>
          <MotionCoverContainer
            className="imageCover"
            transformTemplate={transformTemplate}
            ref={imageCoverRef}
            initial={{ y: 0 }}
            style={{
              willChange: 'transform',
              // y,
              // rotateY,
            }}
          >
            <ImageCover style={{ position: 'absolute' }} fluid={imgReveal} />
          </MotionCoverContainer>
        </OverflowCoverWrapper>
        <ThreeDPostcard
          // postcardContainerRef={postcardContainerRef}
          // rotation={rotateY}
          frontImg={imgFront}
          backImg={imgBack}
        />
      </ImageCoverAnchor>
    </ImageContainer>
  );
};

export default RotatingPostcard;
