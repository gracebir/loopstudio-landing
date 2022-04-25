import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: var(--color-black);
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  @media (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2em 12em;
  }
`

const FooterContent = styled.div`
    color: var(--color-white);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    @media (min-width: 45em) {
    align-items: flex-start;
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7em;
  @media (min-width: 45em) {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
`

const FooterLink = styled.span`
  font-size: 13px;
  @media (min-width: 45em) {
    font-size: 16px;
    cursor: pointer;
  }
`

const FooterTitle = styled.h3`
  font-family: 600;
  @media (min-width: 45em) {
    font-size: 2em;
  }
`

const FooterIcons = styled.div`
  display: flex;
  gap: .7em;
  @media (min-width: 45em) {
    gap: 1em;
  }
`

const IconFooter = styled.img`
  @media (min-width: 45em) {
    cursor: pointer;
  }
`

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  @media (min-width: 45em) {
    align-items: flex-end;
    gap: 2em;
  }
`

const SpanFooter = styled.span`
  color: var(--color-dark-gray);
  text-align: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTitle>loopstudios</FooterTitle>
        <FooterLinks>
          <FooterLink>About</FooterLink>
          <FooterLink>Carees</FooterLink>
          <FooterLink>Events</FooterLink>
          <FooterLink>Products</FooterLink>
          <FooterLink>Support</FooterLink>
        </FooterLinks>
      </FooterContent>
      <FooterRight>
        <FooterIcons>
          <IconFooter src="images/icon-facebook.svg" alt="" />
          <IconFooter src="images/icon-twitter.svg" alt="" />
          <IconFooter src="images/icon-pinterest.svg" alt="" />
          <IconFooter src="images/icon-instagram.svg" alt="" />
        </FooterIcons>
        <SpanFooter>&copy; 2021 Loopstudios. All rights reserved.</SpanFooter>
      </FooterRight>
      
    </FooterWrapper>
  )
}

export default Footer
