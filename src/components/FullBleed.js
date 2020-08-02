import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  position: relative;
  background: radial-gradient(transparent, rgba(0,0,0,0.5) 90%);
`

const TextContainer = styled.div`
    position: absolute;
    color: #fff;
    z-index: 10;
    font-size: 2em;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Averia Serif Libre';
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: lowercase;
    text-shadow: 0 0 16px rgba(0,0,0,1);
`

const GrayscaleImg = styled(Img)`
  filter: brightness(60%) grayscale(0.5);
  height: 75vh;
  position: relative;
  z-index: -10;
`

const FullBleed = () => {
  const data = useStaticQuery(graphql`
    query {
      postcardSampleImg: file(relativePath: { eq: "hanging_postcards.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <TextContainer>
        <div>sustainably sourced + carefully curated</div>
      </TextContainer>
      <GrayscaleImg fluid={data.postcardSampleImg.childImageSharp.fluid} />
    </Container>
  )
}


export default FullBleed