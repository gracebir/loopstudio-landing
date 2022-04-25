import styled from 'styled-components'
import Card from './Card'

const CreContainer = styled.div`
    background-color: var(--color-white);
    margin-bottom: 3em;
    @media (min-width: 45em) {
        padding: 0 12em;
    }
`
const CreHeader = styled.div`
    margin-bottom: 1em;
    @media (min-width: 45em) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5em;
    }
`
const CreaContent = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    @media (min-width: 45em) {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5em;
    }
`
const Title = styled.h1`
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
    @media (min-width: 45em) {
        font-size: 40px;
    }
`

const MobileButton = styled.button`
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
    @media (min-width: 45em) {
        display: none;
    }
`

const DesktopButton = styled.button`
    display: none;
    @media (min-width: 45em) {
        display: block;
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
            cursor: pointer;
        }
    }
`

const Creations = () => {
  return (
    <CreContainer>
        <CreHeader>
            <Title>our creations</Title>
            <DesktopButton>see all</DesktopButton>
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
            <MobileButton>
                see all
            </MobileButton>
        </CreaContent>
    </CreContainer>
  )
}

export default Creations
