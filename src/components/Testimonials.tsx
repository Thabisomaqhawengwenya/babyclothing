import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const TestimonialsSection = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.colors.sandLight};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const QuoteIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.4;
  margin-bottom: 25px;
`;

const SlideContainer = styled.div<{ $active?: boolean }>`
  transition: opacity 0.5s ease;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  display: ${({ $active }) => ($active ? 'block' : 'none')};
`;

const Quote = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 25px;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Author = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 35px;
`;

const Dot = styled.button<{ $active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${({ $active, theme }) => ($active ? theme.colors.gold : theme.colors.sand)};
  cursor: pointer;
  padding: 0;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const TESTIMONIALS_DATA = [
  {
    quote: "The softest organic cotton I have ever found. My baby literally sleeps so well in the ribbed sets. Absolutely love the minimal aesthetic!",
    author: "Sarah M. — Hamilton, Bermuda"
  },
  {
    quote: "Island Child is our absolute go-to for gifts. The GOTS organic quality is amazing, and the shipping envelopes are biodegradable!",
    author: "David K. — Paget, Bermuda"
  },
  {
    quote: "So glad to have premium, gender-neutral options in Bermuda. The mineral-dyed oatmeal and sage colors look stunning in baby photos!",
    author: "Jessica T. — St. George's, Bermuda"
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <TestimonialsSection>
      <Container>
        <QuoteIcon>
          <Icon icon="ph:quotes" />
        </QuoteIcon>

        {TESTIMONIALS_DATA.map((t, idx) => (
          <SlideContainer key={idx} $active={activeIndex === idx}>
            <Quote>&ldquo;{t.quote}&rdquo;</Quote>
            <Author>{t.author}</Author>
          </SlideContainer>
        ))}

        <DotContainer>
          {TESTIMONIALS_DATA.map((_, idx) => (
            <Dot
              key={idx}
              $active={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </DotContainer>
      </Container>
    </TestimonialsSection>
  );
}

export default Testimonials;
