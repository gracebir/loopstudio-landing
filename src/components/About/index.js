import styled from 'styled-components'

const AboutWrapper = styled.div`
    background-color: var(--color-white);
    padding: 5em 1.5em;
    height: 100vh;
    display: flex;
    flex-direction: column;
    @media (min-width: 45em) {
        flex-direction: row;
        padding: 10em 12em;
    }
`

const AboutImage = styled.div`
    height: 35vh;
    width: 100%;
    background-image: url('images/mobile/image-interactive.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    object-fit: fill;
    margin-bottom: 1.5em;
    @media (min-width: 45em) {
        background-image: url('images/desktop/image-interactive.jpg');
        height: 58vh;
    }
`

const AboutContent = styled.div`
    padding: .6em;
    text-align: center;
    @media (min-width: 45em) {
        width: 1300px;
        height: 58vh;
        padding: 5em;
        background-color: var(--color-white);
        margin-top: 15em;
        margin-left:-13em;
    }
`

const AboutTitle = styled.h1`
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    margin-bottom: 1em;
    @media (min-width: 45em) {
        font-size: 55px;
        text-align: left;
    }
`

const AboutParagraph = styled.p`
    color: var(--color-dark-gray);
    text-align: center;
    padding: 0 1.2em;
    @media (min-width: 45em) {
        text-align: left;
        font-size: 18px;
    }
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
