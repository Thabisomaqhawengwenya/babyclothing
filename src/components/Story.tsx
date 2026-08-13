import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StorySection = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.colors.bgCream};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 25px;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(44, 34, 30, 0.8);
  margin-bottom: 35px;
  letter-spacing: 0.02em;
`;

const LearnBtn = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 35px;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(220, 168, 66, 0.15);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(220, 168, 66, 0.25);
  }
`;

function Story() {
  return (
    <StorySection>
      <Container>
        <Title>The Narrative</Title>
        <Text>
          We launched Island Child Apparel after observing a lack of premium, minimalist, and organic clothing options in Bermuda. Our boutique was crafted to offer comfortable, GOTS certified garments that keep baby skin safe while flowing naturally with the island breeze.
        </Text>
        <LearnBtn to="/about">Read The Narrative</LearnBtn>
      </Container>
    </StorySection>
  );
}

export default Story;
