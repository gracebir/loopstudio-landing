import styled from 'styled-components'
import Card from './Card'

const CreContainer = styled.div`
    background-color: var(--color-white);
    margin-bottom: 3em;
`
const CreHeader = styled.div`
    margin-bottom: 1em;
`
const CreaContent = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`
const Title = styled.h1`
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
`

const Button = styled.button`
    text-transform: uppercase;
    border: 1px solid var(--color-black);
    font-family: 'Josefin Sans', sans-serif;
    background-color: transparent;
    font-weight: 700;
    font-size: 15px;
    width: 9em;
    padding: .5em 1em;
    line-height: 1.2;
    &:hover{
        color: var(--color-white);
        background-color: var(--color-black);
    }
`

const Creations = () => {
  return (
    <CreContainer>
        <CreHeader>
            <Title>our creations</Title>
        </CreHeader>
        <CreaContent>
            <Card 
            label='deep earth' 
            imageurl='image-deep-earth.jpg'/>
            <Card 
            label='night arcade' 
            imageurl='image-night-arcade.jpg'/>
            <Card 
            label='soccer team vr' 
            imageurl='image-soccer-team.jpg'/>
            <Card 
            label='the grid' 
            imageurl='image-grid.jpg'/>
            <Card 
            label='from up above vr' 
            imageurl='image-from-above.jpg'/>
            <Card 
            label='pocket borealis' 
            imageurl='image-pocket-borealis.jpg'/>
            <Card 
            label='the curiosity' 
            imageurl='image-curiosity.jpg'/>
            <Card 
            label='make it fisheye' 
            imageurl='image-fisheye.jpg'/>
            <Button>
                see all
            </Button>
        </CreaContent>
    </CreContainer>
  )
}

export default Creations
