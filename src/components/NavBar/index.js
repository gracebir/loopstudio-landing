import React from 'react';
import styled from "styled-components"

const NavWrapper = styled.div`
    background-color: none;
    position: absolute;
    padding: 3em 1.4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 45em) {
      padding: 4em 12em;
    }

`
const NavBrand = styled.h3`
    font-weight: 600;
    font-size: 25px;
    color: var(--color-white);
    @media (min-width: 45em) {
      font-size: 36px;
    }
`

const Hamburger = styled.img`
    &:hover{
        cursor: pointer;
    }
    @media (min-width: 45em) {
      display: none;
    }
`

const MobileNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  z-index: 1000;
  inset: 0 0 0 0%;
  gap: 1.5em;
  padding: 3em 1.4em;
  transform: ${props => props.open ? 'translateX(100%)': 'translateX(0)'};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 45em) {
   display: none;
  }
`

const NavLink = styled.p`
  font-weight: 500;
  color: var(--color-white);
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  @media (min-width: 45em) {
    text-transform: capitalize;
    font-family: 'Alata', sans-serif;
    font-size: 16px;
    cursor: pointer;
    &:hover{
      color: var(--color-very-dark-gray);
    }
  }
`

const NavMobBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  @media (min-width: 45em) {
    display: none;
  }
`

const DesktopNav = styled.div`
  display: none;
  @media (min-width: 45em) {
    display: flex;
    gap: 1em;
  }
`

const Nav = () => {
  //navigation hidding functionality
  const [isOpen, setIsOpen] = React.useState(false);
  const onClickHandle = ()=>{
    if(isOpen){
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  return (
    <NavWrapper>
      <NavBrand>
          loopstudios
      </NavBrand>
      <Hamburger
      onClick={onClickHandle}
      src="images/icon-hamburger.svg" 
      alt=""/>
      <MobileNav open={isOpen}>
        <NavMobBrand>
          <NavBrand>
            loopstudios
          </NavBrand>
          <Hamburger
            onClick={onClickHandle}
            src="images/icon-close.svg" 
            alt=""/>
        </NavMobBrand>
        <NavLink>
          About
        </NavLink>
        <NavLink>
          Careers
        </NavLink>
        <NavLink>
          Events
        </NavLink>
        <NavLink>
          Products
        </NavLink>
        <NavLink>
          Supports
        </NavLink>
      </MobileNav>
      <DesktopNav>
          <NavLink>
            About
          </NavLink>
          <NavLink>
            Careers
          </NavLink>
          <NavLink>
            Events
          </NavLink>
          <NavLink>
            Products
          </NavLink>
          <NavLink>
            Supports
          </NavLink>
      </DesktopNav>
    </NavWrapper>
  )
}

export default Nav
