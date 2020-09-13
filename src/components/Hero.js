import React from 'react'
import {useSpring, useTrail, animated, config} from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'
import TwitterLogo from '../assets/svg/Twitter_Logo_White.svg'
import InstaLogo from '../assets/svg/insta_icon.svg'
import TextRotator from '../components/TextRotaor'
import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import CtaButton from './shared/Button';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const mobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  const { scrollYProgress } = useViewportScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 2000])
  let trailConfig = { mass: 5, tension: 1000, friction: 100 }

  const textSpring = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    delay: 500
  })
  const videoSpring = useSpring({ opacity: 1, from: { opacity: 0 }})

  const videoText = ['send', 'your']

  const trail = useTrail(videoText.length, {
    config: config.wobbly,
    opacity: 1,
    transform: 'translateY(0)',
    from: {
      transform: 'translateY(16px)',
      opacity: 0,
    },
    // config: {duration: 1000}
    delay: 1000
  })

  const buttonAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: {
      opacity: 0,
      transform: 'scale(0.75)'},
      delay: 3000,
      config: config.wobbly})

  const data = useStaticQuery(graphql`
    query CloudinaryVideo {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const rotatedText = [{
    text: 'inspiration',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'appreciation',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'gratitude',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'positivity',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'well wishes',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'best',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'love',
    className: 'classA',
    animation: 'fade',
  },
];
  const clVideo = data.allCloudinaryMedia.edges[0]

  const SocialIcons = styled.div`
    z-index: 10;
    position: absolute;
    bottom: 40px;
    left: 30px;
  `

  const StyledTwitterLogo = styled(TwitterLogo)`
    width: 36px;
    height: 36px;
    cursor: pointer;

    :hover {
      .cls-2 {
        fill: #d4004c;
      }
    }
  `

  const StyledInstaLogo = styled(InstaLogo)`
    margin: 6px 24px;
    fill: #fff;
    cursor: pointer;

    :hover {
      fill: #d4004c;
    }
  `

  return (
    <div className="Hero">
      <div className="video-text">
        <div className="text-container">
          <animated.div style={{...textSpring}} className="small-text">a new way to</animated.div>
          <div className="large-text">
            {
              trail.map(({opacity, ...rest}, index) => (
                <animated.span
                  key={index}
                  style={{ ...rest, opacity }}>
                  {videoText[index]}
                </animated.span>
              ))
            }
            { !mobile && <TextRotator
              className="rotator"
              content={rotatedText}
              time={4000}
              startDelay={1000}
          /> }
          </div>
          { mobile && <TextRotator
              className="rotator"
              content={rotatedText}
              time={4000}
              startDelay={1000}
          /> }
          <Link to="product">
            <CtaButton>send</CtaButton>
          </Link>
        </div>
        <motion.video
          style={{ y, opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          muted
          src={clVideo.node.secure_url}
          autoPlay loop playsInline></motion.video>
      </div>
      <SocialIcons>
        <StyledTwitterLogo/>
        <StyledInstaLogo />
      </SocialIcons>
    </div>

  )
}


export default Hero
