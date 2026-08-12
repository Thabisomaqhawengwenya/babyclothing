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
    { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&h=600&q=80', alt: 'Toddler playing in warm sunlit nursery' },
    { src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&h=600&q=80', alt: 'Baby sleeping in swaddled organic cotton bedding' },
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&h=600&q=80', alt: 'Close-up of baby feet wrapped in organic knit blanket' },
    { src: 'https://images.unsplash.com/photo-1504194104404-4aa3a7c36996?auto=format&fit=crop&w=600&h=600&q=80', alt: 'Baby laughing wearing neutral-toned infant wear' }
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
