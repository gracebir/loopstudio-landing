import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: var(--color-black);
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`

const FooterContent = styled.div`
    color: var(--color-white);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7em;
`

const FooterLink = styled.span`
  font-size: 13px;
`

const FooterTitle = styled.h3`
  font-family: 600;
`

const FooterIcons = styled.div`
  display: flex;
  gap: .7em;
`

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
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
          <img src="images/icon-facebook.svg" alt="" />
          <img src="images/icon-twitter.svg" alt="" />
          <img src="images/icon-pinterest.svg" alt="" />
          <img src="images/icon-instagram.svg" alt="" />
        </FooterIcons>
        <SpanFooter>&copy; 2021 Loopstudios. All rights reserved.</SpanFooter>
      </FooterRight>
      
    </FooterWrapper>
  )
}

export default Footer
