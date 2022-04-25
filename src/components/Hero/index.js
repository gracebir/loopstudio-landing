import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url('images/mobile/image-hero.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    object-fit: contain;
    display: flex;
    align-items: center;
    @media (min-width: 45em) {
      background-image: url('images/desktop/image-hero.jpg');
      padding: 0 12em;
    }
`

const HeroContent = styled.h1`
    color: var(--color-white);
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    border: 2px solid var(--color-white);
    margin: 0 1em;
    padding: .8em;
    text-transform: uppercase;
    font-size: 35px;
    @media (min-width: 45em) {
      margin: 0;
      font-weight: 400;
      font-size: 80px;
      width: 10em;
    }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
          immersive experiences that deliver
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
