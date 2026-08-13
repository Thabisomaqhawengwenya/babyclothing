import styled from 'styled-components';
import { Icon } from '@iconify/react';

const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 80px 40px 120px 40px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px 80px 20px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 80px;
  box-shadow: 0 8px 30px rgba(44, 34, 30, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 240px;
    margin-bottom: 60px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
`;

const IntroSection = styled.div`
  max-width: 700px;
  margin: 0 auto 80px auto;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.charcoal};
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.05rem;
    margin-bottom: 60px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto 100px auto;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.sand};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -0.5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div<{ $align?: string }>`
  position: relative;
  width: 50%;
  margin-bottom: 50px;
  box-sizing: border-box;

  /* Alternating left and right alignment */
  align-self: ${({ $align }) => ($align === 'left' ? 'flex-start' : 'flex-end')};
  padding: ${({ $align }) => ($align === 'left' ? '0 50px 0 0' : '0 0 0 50px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    align-self: flex-start;
    padding-left: 50px;
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const TimelineDot = styled.div<{ $align?: string }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gold};
  border: 4px solid ${({ theme }) => theme.colors.bgCream};
  position: absolute;
  top: 30px;
  z-index: 10;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.sand};

  /* Alternating left and right position */
  right: ${({ $align }) => ($align === 'left' ? '-11px' : 'auto')};
  left: ${({ $align }) => ($align === 'left' ? 'auto' : '-11px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 12px !important;
    right: auto !important;
  }
`;

const TimelineCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 4px 20px rgba(44, 34, 30, 0.02);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 25px;
  }
`;

const ChapterLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  svg {
    font-size: 1rem;
  }
`;

const ChapterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 15px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ChapterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(44, 34, 30, 0.8);
`;

const EpilogueCard = styled.div`
  background-color: ${({ theme }) => theme.colors.sandLight};
  padding: 40px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 25px;
  }
`;

const EpilogueTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.charcoal};
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const InfoList = styled.ul`
  list-style: none;
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(44, 34, 30, 0.8);

  li {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed rgba(44, 34, 30, 0.1);
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }

  span:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;

function About() {
  return (
    <PageContainer>
      <HeaderSection>
        <Title>The Narrative</Title>
        <Subtitle>Boutique children&apos;s garments spun with Bermudian heritage</Subtitle>
      </HeaderSection>

      <BannerWrap>
        <BannerImg src="/assets/hero_baby.png" alt="Baby sleeping in organic wrap" />
      </BannerWrap>

      <IntroSection>
        &ldquo;Every child is born on a soft shore, ready to feel the sun, the wind, and the comfort of protective threads. We build apparel that lets them play freely and nap deeply.&rdquo;
      </IntroSection>

      <TimelineContainer>
        {/* Chapter 1 */}
        <TimelineItem $align="left">
          <TimelineDot $align="left" />
          <TimelineCard>
            <ChapterLabel>
              <Icon icon="ph:seed" /> Chapter One — The Bermudian Seed
            </ChapterLabel>
            <ChapterTitle>Born in Hamilton</ChapterTitle>
            <ChapterText>
              Island Child Apparel was conceived on the sun-washed pink sands of Bermuda. We observed a persistent challenge: finding high-end children&apos;s wear that was concurrently hypoallergenic, organic, and breezy enough to survive warm island summers. So, in October 2023, our seed was planted.
            </ChapterText>
          </TimelineCard>
        </TimelineItem>

        {/* Chapter 2 */}
        <TimelineItem $align="right">
          <TimelineDot $align="right" />
          <TimelineCard>
            <ChapterLabel>
              <Icon icon="ph:flower-lotus" /> Chapter Two — The Pure Weave
            </ChapterLabel>
            <ChapterTitle>Organically Grown</ChapterTitle>
            <ChapterText>
              We pledged to protect delicate baby skin by sourcing strictly GOTS-certified organic cotton. Sourced without pesticides, the cotton is spun into fine ribbed threads, dyed using mineral-infused plant elements, and pre-washed for immediate warmth and play-safe elasticity.
            </ChapterText>
          </TimelineCard>
        </TimelineItem>

        {/* Chapter 3 */}
        <TimelineItem $align="left">
          <TimelineDot $align="left" />
          <TimelineCard>
            <ChapterLabel>
              <Icon icon="ph:paper-plane-tilt" /> Chapter Three — The Journey
            </ChapterLabel>
            <ChapterTitle>Earthy Elements</ChapterTitle>
            <ChapterText>
              Inspired by the elements, we curated our palettes (honey gold, sand, sage green, and oatmeal). Packaged in biodegradable glassine envelopes and shipped from Front Street, each piece journeys straight to local and international nurseries carrying comfort and laughter.
            </ChapterText>
          </TimelineCard>
        </TimelineItem>
      </TimelineContainer>

      {/* Epilogue Card */}
      <EpilogueCard>
        <EpilogueTitle>
          <Icon icon="ph:info" /> Boutique Summary
        </EpilogueTitle>
        <InfoList>
          <li>
            <span>Launch Date</span>
            <span>October 2023</span>
          </li>
          <li>
            <span>Boutique Atelier</span>
            <span>Front Street, Hamilton, Bermuda</span>
          </li>
          <li>
            <span>Direct Inquiries</span>
            <span>hello@islandchildapparel.bm</span>
          </li>
          <li>
            <span>Eco Deliveries</span>
            <span>Monday - Friday, 9:00 AM - 5:00 PM AST</span>
          </li>
        </InfoList>
      </EpilogueCard>
    </PageContainer>
  );
}

export default About;
