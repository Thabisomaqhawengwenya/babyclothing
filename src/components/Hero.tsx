import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 620px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 500px;
  }
`;

const BgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.95);
  transition: transform 8s cubic-bezier(0.16, 1, 0.3, 1);

  ${HeroSection}:hover & {
    transform: scale(1.03);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(44, 34, 30, 0.3) 0%, rgba(44, 34, 30, 0.55) 100%);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  max-width: 700px;
  padding: 0 20px;
  text-shadow: 0 2px 10px rgba(44, 34, 30, 0.15);
`;

const Subtitle = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 15px;
  opacity: 0.9;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 35px;
  opacity: 0.95;
  letter-spacing: 0.02em;
`;

const ShopBtn = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 14px 35px;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.bgCream};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

function Hero() {
  return (
    <HeroSection id="home">
      <BgContainer>
        <BgImg src="/assets/hero_baby.png" alt="Baby resting on fluffy fur fabric wearing neutral knitwear" />
      </BgContainer>
      <Overlay />
      <HeroContent>
        <Subtitle>Island Child Apparel</Subtitle>
        <Title>Speciality Gender-Neutral Pieces.</Title>
        <Tagline>Minimal clothing for all to wear, anytime, anywhere!</Tagline>
        <ShopBtn href="#shop">Shop Now</ShopBtn>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
