import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 60px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 20px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

const Grid = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FormColumn = styled.div`
  flex: 1.2;
`;

const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 25px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.sandLight};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.sandLight};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  resize: vertical;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const SubmitBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 14px 35px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  align-self: flex-start;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const FaqColumn = styled.div`
  flex: 1;
`;

const FaqTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 25px;
`;

const Accordion = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.charcoal};

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(44, 34, 30, 0.7);
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '18px' : '0')};
`;

const MapCard = styled.div`
  background-color: ${({ theme }) => theme.colors.sandLight};
  padding: 40px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 25px;
  }
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const MapInfo = styled.div`
  flex: 1;
  min-width: 250px;
`;

const MapIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(44, 34, 30, 0.03);

  svg {
    font-size: 1.5rem;
  }
`;

const FlagshipTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const FlagshipText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(44, 34, 30, 0.8);
`;

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openPanel, setOpenPanel] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    alert(`Thank you, ${formData.name}! Your message has been sent successfully. We will get back to you shortly.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleAccordion = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Get in Touch</Title>
        <Subtitle>Have questions about sizes, delivery, or custom orders?</Subtitle>
      </HeaderSection>

      <Grid>
        {/* Left: Contact Form */}
        <FormColumn>
          <FormTitle>Send a Message</FormTitle>
          <ContactForm onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name"
                name="name" 
                type="text" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                name="email" 
                type="email" 
                placeholder="Enter your email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea 
                id="message"
                name="message" 
                placeholder="How can we help you?" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              />
            </FormGroup>
            <SubmitBtn type="submit">Submit Form</SubmitBtn>
          </ContactForm>
        </FormColumn>

        {/* Right: FAQs */}
        <FaqColumn>
          <FaqTitle>Frequently Asked Questions</FaqTitle>
          <Accordion>
            <AccordionItem>
              <AccordionHeader 
                $isOpen={openPanel === 'shipping'} 
                onClick={() => toggleAccordion('shipping')}
              >
                <span>Where do you ship?</span>
                <Icon icon="ph:caret-down" />
              </AccordionHeader>
              <AccordionContent $isOpen={openPanel === 'shipping'}>
                We offer free delivery island-wide in Bermuda on orders over $50. For orders under $50, local courier delivery is $5.00. Delivery takes between 1-3 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader 
                $isOpen={openPanel === 'sizing'} 
                onClick={() => toggleAccordion('sizing')}
              >
                <span>How does your sizing run?</span>
                <Icon icon="ph:caret-down" />
              </AccordionHeader>
              <AccordionContent $isOpen={openPanel === 'sizing'}>
                Our GOTS organic ribbed cotton has excellent natural stretch and flexibility. In general, our sizing runs true to age, but we recommend sizing up if your little one is in between sizes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader 
                $isOpen={openPanel === 'returns'} 
                onClick={() => toggleAccordion('returns')}
              >
                <span>What is your return policy?</span>
                <Icon icon="ph:caret-down" />
              </AccordionHeader>
              <AccordionContent $isOpen={openPanel === 'returns'}>
                We accept exchanges or refunds on all unworn, unwashed garments with tag attachments within 14 days of delivery. Sale items and custom sets are final sale.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FaqColumn>
      </Grid>

      {/* Map Location Card */}
      <MapCard>
        <MapInfo>
          <MapIconContainer>
            <Icon icon="ph:map-pin" />
          </MapIconContainer>
          <FlagshipTitle>Flagship Hamilton Location</FlagshipTitle>
          <FlagshipText>
            Come visit our collection counter in central Front Street, Hamilton, Bermuda for package pick-ups, exchanges, or custom order previews.
          </FlagshipText>
        </MapInfo>

        <MapInfo>
          <FlagshipTitle>Pick-Up Counter Timings</FlagshipTitle>
          <FlagshipText style={{ lineHeight: '2' }}>
            <strong>Monday - Friday:</strong> 10:00 AM - 4:00 PM <br />
            <strong>Saturday:</strong> 11:00 AM - 3:00 PM <br />
            <strong>Sunday:</strong> Closed
          </FlagshipText>
        </MapInfo>
      </MapCard>
    </PageContainer>
  );
}

export default Contact;
