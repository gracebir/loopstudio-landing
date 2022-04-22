import styled from "styled-components"

const NavWrapper = styled.div`
    background-color: none;
    position: absolute;
    padding: 3em 1.4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavBrand = styled.h3`
    font-weight: 600;
    font-size: 25px;
    color: var(--color-white);
`

const Hamburger = styled.img`
    
    &:hover{
        cursor: pointer;
    }
`

const NavRight = styled.div`
  display: none;
`

const Nav = () => {
  return (
    <NavWrapper>
      <NavBrand>
          loopstudios
      </NavBrand>
      <Hamburger 
      src="images/icon-hamburger.svg" 
      alt=""/>
      <NavRight>
        
      </NavRight>
    </NavWrapper>
  )
}

export default Nav
