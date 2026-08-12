import styled from 'styled-components';

const JournalSection = styled.section`
  padding: 100px 40px;
  background-color: ${({ theme }) => theme.colors.bgCream};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 12px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const JournalItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(44, 34, 30, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(44, 34, 30, 0.15);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const JournalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${JournalItem}:hover & {
    transform: scale(1.05);
  }
`;

function VisualJournal() {
  const photos = [
    { src: 'assets/hero_baby.png', alt: 'Baby sleeping in organic cotton wrap' },
    { src: 'assets/category_onesie.png', alt: 'Baby playing in ribbed sage green onesie' },
    { src: 'assets/banner_socks.png', alt: 'Detail shot of soft cotton knit socks' },
    { src: 'assets/product_onesie_oatmeal.png', alt: 'Toddler wearing neutral pocket tee' }
  ];

  return (
    <JournalSection>
      <Header>
        <SectionTitle>Moments in Island Child</SectionTitle>
        <Subtitle>Shared by our community. Tag #IslandChildApparel to be featured.</Subtitle>
      </Header>
      
      <Grid>
        {photos.map((photo, index) => (
          <JournalItem key={index}>
            <JournalImg src={photo.src} alt={photo.alt} />
          </JournalItem>
        ))}
      </Grid>
    </JournalSection>
  );
}

export default VisualJournal;
