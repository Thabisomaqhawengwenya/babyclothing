import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header<{ $scrolled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $scrolled }) => ($scrolled ? '10px 40px' : '15px 40px')};
  background-color: ${({ theme }) => theme.colors.bgCream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: ${({ theme }) => theme.transitions.smooth};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 4px 20px rgba(44, 34, 30, 0.04)' : 'none')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 20px; /* Reduced slightly for compact mobile layout */
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.smooth};
  z-index: 101; /* Stay above mobile menu */

  &:hover {
    transform: rotate(5deg) scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`;

const LogoSvg = styled.svg`
  width: 100%;
  height: 100%;

  text {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 1.2px;
    fill: ${({ theme }) => theme.colors.charcoal};
    text-transform: uppercase;
  }
`;

const Nav = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 35px;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  position: relative;
  padding: 5px 0;
  transition: ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${({ theme }) => theme.colors.gold};
    transition: ${({ theme }) => theme.transitions.smooth};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &:hover::after {
    width: 100%;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 101; /* Stay above mobile menu */
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};

  svg {
    font-size: 20px;
    transition: ${({ theme }) => theme.transitions.smooth};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.6rem;
  font-weight: 700;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 5px;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};

  svg {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

/* Mobile Navigation Panel overlay */
const MobileMenu = styled.div<{ $isOpen?: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.bgCream};
    z-index: 99;
    padding: 120px 40px 40px 40px; /* Large top padding to make space for header logo/icons */
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    overflow-y: auto;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.charcoal};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    transform: translateX(10px);
  }
`;

function Header({ cartCount, wishlistCount, onOpenCart, onOpenWishlist, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      {/* Brand Circular Logo */}
      <LogoContainer to="/" id="brand-logo" onClick={handleLogoClick}>
        <LogoSvg viewBox="0 0 100 100">
          <defs>
            <path id="topCircle" d="M 16,50 A 34,34 0 0,1 84,50" fill="none" />
            <path id="bottomCircle" d="M 84,50 A 34,34 0 0,1 16,50" fill="none" />
          </defs>
          <circle cx="50" cy="50" r="46" fill="none" stroke="#2C221E" strokeWidth="1.2" strokeDasharray="3, 3" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#DCA842" strokeWidth="0.8" />
          
          <g transform="translate(38,36) scale(0.6)" stroke="#2C221E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 20,36 C 20,36 10,24 20,10 C 30,24 20,36 20,36 Z" fill="rgba(220, 168, 66, 0.08)" />
            <path d="M 20,8 L 20,36" stroke="#DCA842" strokeWidth="2" />
            <path d="M 20,16 C 27,15 31,19 31,19" />
            <path d="M 20,22 C 13,21 9,25 9,25" />
            <path d="M 20,26 C 26,25 29,28 29,28" />
          </g>
          
          <text>
            <textPath href="#topCircle" startOffset="50%" textAnchor="middle">Island Child</textPath>
          </text>
          <text>
            <textPath href="#bottomCircle" startOffset="50%" textAnchor="middle">Apparel</textPath>
          </text>
        </LogoSvg>
      </LogoContainer>

      {/* Nav Links (Desktop) */}
      <Nav>
        <NavLinks>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </NavLinks>
      </Nav>

      {/* Mobile Menu Panel Overlay */}
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <li><MobileNavLink to="/">Home</MobileNavLink></li>
          <li><MobileNavLink to="/shop">Shop</MobileNavLink></li>
          <li><MobileNavLink to="/about">About</MobileNavLink></li>
          <li><MobileNavLink to="/contact">Contact</MobileNavLink></li>
        </MobileNavLinks>
      </MobileMenu>

      {/* Action Buttons & Hamburger (Mobile) */}
      <HeaderActions>
        <ActionBtn onClick={onOpenSearch} aria-label="Search Catalog">
          <Icon icon="ph:magnifying-glass" />
        </ActionBtn>
        <ActionBtn onClick={onOpenWishlist} aria-label="Favorites List">
          <Icon icon="ph:heart" />
          {wishlistCount > 0 && <CartBadge>{wishlistCount}</CartBadge>}
        </ActionBtn>
        <ActionBtn onClick={onOpenCart} aria-label="Shopping Bag">
          <Icon icon="ph:shopping-bag" />
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </ActionBtn>
        <HamburgerBtn 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <Icon icon={isMobileMenuOpen ? "ph:x" : "ph:list"} />
        </HamburgerBtn>
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
