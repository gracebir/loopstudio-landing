import styled from 'styled-components'

const CardWrapper = styled.div`
    height: 18vh;
    width: 100%;
    background-image: url(${props => `images/mobile/${props.imageurl}`});
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    @media (min-width: 45em) {
      background-image: url(${props => `images/desktop/${props.imageurl}`});
      height: 70vh;
      align-items: flex-end;
      padding: 2em 2em;
    }
`

const Label = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    color: var(--color-white);
    width: 8em;
    padding: 1em;
    text-transform: uppercase;
    @media (min-width: 45em) {
      font-size: 2rem;
    }
`

const Card = ({label, imageurl}) => {
  return (
    <CardWrapper imageurl={imageurl}>
      <Label>{label}</Label>
    </CardWrapper>
  )
}

export default Card
