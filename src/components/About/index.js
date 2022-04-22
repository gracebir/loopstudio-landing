import styled from 'styled-components'

const AboutWrapper = styled.div`
    background-color: var(--color-white);
    padding: 5em 1.5em;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const AboutImage = styled.div`
    height: 35vh;
    width: 100%;
    background-image: url('images/mobile/image-interactive.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    object-fit: fill;
    margin-bottom: 1.5em;
`

const AboutContent = styled.div`
    padding: .6em;
    text-align: center;
`

const AboutTitle = styled.h1`
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    margin-bottom: 1em;
`

const AboutParagraph = styled.p`
    color: var(--color-dark-gray);
    text-align: center;
    padding: 0 1.2em;
`


const About = () => {
  return (
    <AboutWrapper>
      <AboutImage></AboutImage>
      <AboutContent>
          <AboutTitle>the leader in interactive vr</AboutTitle>
          <AboutParagraph>
              Founded in 2011, Loopstudios has ben producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning creations 
              have transformed businesses through digital experiences that bind to their brand.
          </AboutParagraph>
      </AboutContent>
    </AboutWrapper>
  )
}

export default About
