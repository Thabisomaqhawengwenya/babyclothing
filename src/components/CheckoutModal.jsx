import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from '@iconify/react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 34, 30, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
  padding: 20px;
`;

const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCream};
  width: 100%;
  max-width: 550px;
  border-radius: 6px;
  box-shadow: 0 10px 40px rgba(44, 34, 30, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(30px)')};
`;

const Header = styled.div`
  padding: 25px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }
`;

const Content = styled.form`
  padding: 30px;
  overflow-y: auto;
  flex: 1;
`;

const SectionTitle = styled.h3`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 20px;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 18px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const Row = styled.div`
  display: flex;
  gap: 15px;

  & > div {
    flex: 1;
  }
`;

const SummaryBox = styled.div`
  background-color: ${({ theme }) => theme.colors.sandLight};
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 25px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 0.95rem;
    border-top: 1px dashed rgba(44, 34, 30, 0.15);
    padding-top: 8px;
  }
`;

const Footer = styled.div`
  padding: 25px 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;
  gap: 15px;
`;

const CancelBtn = styled.button`
  flex: 1;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 14px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sandLight};
  }
`;

const SubmitBtn = styled.button`
  flex: 2;
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 14px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(44, 34, 30, 0.15);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const GiftSection = styled.div`
  background-color: ${({ theme }) => theme.colors.sandLight};
  padding: 20px;
  border-radius: 4px;
  margin-top: 25px;
  border: 1.5px solid ${({ theme }) => theme.colors.sand};
`;

const GiftCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
  cursor: pointer;
  
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.gold};
  }
`;

const GiftMessageArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-top: 12px;
  resize: vertical;
  min-height: 80px;
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(254, 252, 249, 0.95);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 40px;
  text-align: center;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.sand};
  border-top-color: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

const SuccessOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgCream};
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`;

const CheckIconWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(143, 158, 139, 0.15);
  color: ${({ theme }) => theme.colors.sage};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 25px;
`;

const OrderIdText = styled.div`
  background-color: ${({ theme }) => theme.colors.sandLight};
  padding: 10px 20px;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 15px 0 25px 0;
  border: 1px dashed ${({ theme }) => theme.colors.sand};
`;

const DoneBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 12px 30px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldHover};
  }
`;

function CheckoutModal({ isOpen, onClose, cart, total, onClearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: 'Bermuda',
    card: '',
    expiry: '',
    cvv: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderResult, setOrderResult] = useState(null);
  const [addGiftWrap, setAddGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');

  const finalTotal = addGiftWrap ? total + 5 : total;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.card) return;

    setIsProcessing(true);

    // Simulate securely processing mock credit card
    setTimeout(() => {
      // Make POST API call to Backend Express Server
      fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item.id,
            title: item.title,
            color: item.color,
            size: item.size,
            price: item.price,
            quantity: item.quantity
          })),
          customer: {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            country: formData.country
          },
          total: finalTotal,
          giftWrap: addGiftWrap,
          giftMessage: addGiftWrap ? giftMessage : ''
        })
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to create order');
          return res.json();
        })
        .then((data) => {
          setIsProcessing(false);
          setOrderResult(data.order);
          onClearCart();
        })
        .catch((err) => {
          console.error(err);
          setIsProcessing(false);
          alert('Failed to submit checkout order. Please check that server is active.');
        });
    }, 2000);
  };

  const handleClose = () => {
    setOrderResult(null);
    onClose();
  };

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Modal $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Checkout</Title>
          <CloseBtn onClick={onClose} aria-label="Close Checkout">
            <Icon icon="ph:x" />
          </CloseBtn>
        </Header>

        {isProcessing && (
          <LoadingOverlay>
            <Spinner />
            <h3>Processing payment securely...</h3>
            <p style={{ fontSize: '0.85rem', color: '#8F9E8B', marginTop: '10px' }}>
              Securing your GOTS-certified organic cotton package.
            </p>
          </LoadingOverlay>
        )}

        {orderResult && (
          <SuccessOverlay>
            <CheckIconWrap>
              <Icon icon="ph:check" />
            </CheckIconWrap>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Order Confirmed!</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(44, 34, 30, 0.7)', marginTop: '10px', maxWidth: '350px' }}>
              Thank you, {orderResult.customer.name}! We have received your order. A copy of the receipt has been sent to {orderResult.customer.email}.
            </p>
            <OrderIdText>Order Reference: {orderResult.id}</OrderIdText>
            <DoneBtn onClick={handleClose}>Back to Collection</DoneBtn>
          </SuccessOverlay>
        )}

        <Content id="checkout-form" onSubmit={handleFormSubmit}>
          <SectionTitle>1. Shipping Information</SectionTitle>
          <FormGroup>
            <Label>Full Name</Label>
            <Input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="e.g. Mary Outerbridge" 
              required 
            />
          </FormGroup>

          <FormGroup>
            <Label>Email Address</Label>
            <Input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              placeholder="e.g. mary@islandchild.bm" 
              required 
            />
          </FormGroup>

          <FormGroup>
            <Label>Street Address</Label>
            <Input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleInputChange} 
              placeholder="e.g. 45 Front Street" 
              required 
            />
          </FormGroup>

          <Row>
            <FormGroup>
              <Label>City / Parish</Label>
              <Input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleInputChange} 
                placeholder="e.g. Hamilton" 
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Input 
                type="text" 
                name="country" 
                value={formData.country} 
                onChange={handleInputChange} 
                placeholder="Bermuda" 
                required 
              />
            </FormGroup>
          </Row>

          <SectionTitle style={{ marginTop: '20px' }}>2. Payment (Mock)</SectionTitle>
          <FormGroup>
            <Label>Card Number</Label>
            <Input 
              type="text" 
              name="card" 
              value={formData.card} 
              onChange={handleInputChange} 
              placeholder="4111 •••• •••• ••••" 
              maxLength="19"
              required 
            />
          </FormGroup>

          <Row>
            <FormGroup>
              <Label>Expiry Date</Label>
              <Input 
                type="text" 
                name="expiry" 
                value={formData.expiry} 
                onChange={handleInputChange} 
                placeholder="MM/YY" 
                maxLength="5"
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label>Security Code (CVV)</Label>
              <Input 
                type="password" 
                name="cvv" 
                value={formData.cvv} 
                onChange={handleInputChange} 
                placeholder="•••" 
                maxLength="3"
                required 
              />
            </FormGroup>
          </Row>

          <GiftSection>
            <GiftCheckboxLabel>
              <input 
                type="checkbox" 
                checked={addGiftWrap} 
                onChange={(e) => setAddGiftWrap(e.target.checked)} 
              />
              <span>Add signature organic linen wrap & custom card (+$5.00)</span>
            </GiftCheckboxLabel>
            {addGiftWrap && (
              <GiftMessageArea
                placeholder="Enter your gift message for the recipient..."
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
                maxLength="300"
              />
            )}
          </GiftSection>

          <SectionTitle style={{ marginTop: '25px' }}>3. Summary</SectionTitle>
          <SummaryBox>
            <SummaryRow>
              <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
              <span>${total.toFixed(2)}</span>
            </SummaryRow>
            {addGiftWrap && (
              <SummaryRow>
                <span>Gift wrapping & card</span>
                <span>$5.00</span>
              </SummaryRow>
            )}
            <SummaryRow>
              <span>Shipping (Bermuda local courier)</span>
              <span>FREE</span>
            </SummaryRow>
            <SummaryRow>
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </SummaryRow>
          </SummaryBox>
        </Content>

        <Footer>
          <CancelBtn type="button" onClick={onClose}>Cancel</CancelBtn>
          <SubmitBtn type="submit" form="checkout-form" disabled={cart.length === 0}>
            Pay ${finalTotal.toFixed(2)}
          </SubmitBtn>
        </Footer>
      </Modal>
    </Overlay>
  );
}

export default CheckoutModal;
