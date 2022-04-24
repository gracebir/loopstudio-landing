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
    @media (min-width: 45em) {
      display: none;
    }
`

const NavRight = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  z-index: 1000;
  inset: 0 0 0 0%;
  gap: 1.5em;
  padding: 2rem;
  transform: ${props => props.open ? 'translateX(100%)': 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 45em) {
    flex-direction: row;
    position: absolute;
    background-color: none;
  }
`

const NavLink = styled.p`
  font-weight: 500;
  color: var(--color-white);
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  @media (min-width: 45em) {
    text-transform: normal;
    font-family: 'Alata', sans-serif;
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

const Nav = () => {
  //navigation hidding functionality
  const [isOpen, setIsOpen] = React.React(false);
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
      <NavRight open={isOpen}>
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
      </NavRight>
    </NavWrapper>
  )
}

export default Nav
