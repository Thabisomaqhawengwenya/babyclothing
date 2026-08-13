import styled from 'styled-components';

const Grid = styled.section`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

const CategoryBlock = styled.a`
  flex: 1;
  height: 480px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 380px;
  }
`;

const CategoryBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;

  ${CategoryBlock}:hover & {
    transform: scale(1.05);
  }
`;

const SageBlock = styled(CategoryBlock)`
  background-color: ${({ theme }) => theme.colors.sage};
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(44, 34, 30, 0.05);
  }
`;

const BibIconContainer = styled.div`
  z-index: 2;
  margin-bottom: 20px;
  transition: ${({ theme }) => theme.transitions.smooth};

  svg {
    width: 80px;
    height: 80px;
    stroke: ${({ theme }) => theme.colors.white};
    stroke-width: 1.5;
    fill: none;
  }

  ${SageBlock}:hover & {
    transform: translateY(-5px) scale(1.05);
  }
`;

const CategoryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(44, 34, 30, 0.1) 0%, rgba(44, 34, 30, 0.3) 100%);
  z-index: 2;
`;

const CategoryTitle = styled.h3`
  position: relative;
  z-index: 3;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(44, 34, 30, 0.2);
`;

function Categories() {
  return (
    <Grid id="contact">
      {/* Left Sage green card for Accessories */}
      <SageBlock href="#shop">
        <BibIconContainer>
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M 50,15 C 32,15 22,25 22,45 C 22,68 34,83 50,83 C 66,83 78,68 78,45 C 78,25 68,15 50,15 Z" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M 50,15 C 40,15 35,22 35,32 C 35,42 42,47 50,47 C 58,47 65,42 65,32 C 65,22 60,15 50,15 Z" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M 35,32 C 35,22 45,8 50,8 C 55,8 65,22 65,32" strokeWidth="1.2" strokeDasharray="2, 2"/>
            <circle cx="50" cy="11" r="1.5" fill="currentColor"/>
          </svg>
        </BibIconContainer>
        <CategoryTitle>Accessories</CategoryTitle>
      </SageBlock>

      {/* Right image card for Onesies */}
      <CategoryBlock href="#shop">
        <CategoryBg src="/assets/category_onesie.png" alt="Onesies Category" />
        <CategoryOverlay />
        <CategoryTitle>Onesies</CategoryTitle>
      </CategoryBlock>
    </Grid>
  );
}

export default Categories;
