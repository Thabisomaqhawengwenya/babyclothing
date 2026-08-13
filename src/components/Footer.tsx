import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.sandLight};
  padding: 80px 40px 40px 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px 30px 20px;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto 50px auto;
`;

const FooterCol = styled.div`
  flex: 1.5;
  min-width: 240px;

  &:nth-child(2) {
    flex: 1;
    min-width: 150px;
  }
`;

const FooterLogo = styled.h4`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const FooterText = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(44, 34, 30, 0.7);
  margin-bottom: 20px;
  max-width: 320px;
`;

const FooterColTitle = styled.h5`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const FooterLinks = styled.ul`
  list-style: none;
  font-size: 0.85rem;
  line-height: 2.2;
  padding: 0;

  a {
    color: rgba(44, 34, 30, 0.7);
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 15px;
  max-width: 320px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const NewsletterSubmit = styled.button`
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 18px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 2px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const SuccessMsg = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.sage};
  margin-top: 10px;
  font-weight: 500;
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(44, 34, 30, 0.08);
  padding-top: 30px;
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.02em;
`;

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <FooterContainer>
      <FooterGrid>
        {/* Brand Column */}
        <FooterCol>
          <FooterLogo>Island Child Apparel</FooterLogo>
          <FooterText>
            Bermudian boutique crafting organic, gender-neutral cotton clothing designed for baby play, explore, and rest.
          </FooterText>
        </FooterCol>

        {/* Links Column */}
        <FooterCol>
          <FooterColTitle>Boutique</FooterColTitle>
          <FooterLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </FooterLinks>
        </FooterCol>

        {/* Newsletter Column */}
        <FooterCol>
          <FooterColTitle>Join the Narrative</FooterColTitle>
          <FooterText>
            Receive news, organic restock releases, and boutique updates straight to your inbox.
          </FooterText>
          {subscribed ? (
            <SuccessMsg>Thank you! You have successfully joined the narrative.</SuccessMsg>
          ) : (
            <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <NewsletterSubmit type="submit">Join</NewsletterSubmit>
            </NewsletterForm>
          )}
        </FooterCol>
      </FooterGrid>

      <Copyright>
        &copy; {new Date().getFullYear()} Island Child Apparel. All rights reserved. Bermuda local courier deliveries.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
