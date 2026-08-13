import styled from 'styled-components';

const BannerSection = styled.section`
  position: relative;
  height: 480px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 360px;
  }
`;

const BannerBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;

  ${BannerSection}:hover & {
    transform: scale(1.04);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(44, 34, 30, 0.2);
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  max-width: 600px;
  padding: 0 20px;
  text-shadow: 0 2px 10px rgba(44, 34, 30, 0.15);
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.95;
  font-weight: 400;
`;

function BrandBanner() {
  return (
    <BannerSection>
      <BannerBg src="assets/banner_socks.png" alt="Infant feet wearing white knit textured socks" />
      <Overlay />
      <Content>
        <Title>High Quality Clothing</Title>
        <Text>
          Designed to keep up with all of the island babies and toddlers as they go on their everyday adventures.
        </Text>
      </Content>
    </BannerSection>
  );
}

export default BrandBanner;
