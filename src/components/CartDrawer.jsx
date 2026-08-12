import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 34, 30, 0.4);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-450px')};
  width: 100%;
  max-width: 450px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgCream};
  z-index: 1000;
  box-shadow: -10px 0 30px rgba(44, 34, 30, 0.1);
  transition: right 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  flex-direction: column;
`;

const CartHeader = styled.div`
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartHeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.6rem;
  font-weight: 400;
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

const CartItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px;
`;

const CartItem = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const ItemImgWrap = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.sandLight};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemImg = styled.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  mix-blend-mode: multiply;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ItemVariant = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 10px;
`;

const ItemQtyWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QtyBtn = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  width: 24px;
  height: 24px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sand};
  }
`;

const QtyVal = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
`;

const ItemPriceColumn = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(44, 34, 30, 0.4);
  font-size: 0.75rem;
  text-decoration: underline;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;

const EmptyCartWrap = styled.div`
  text-align: center;
  margin-top: 50px;
  color: rgba(44, 34, 30, 0.5);
`;

const StartShoppingBtn = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 25px;
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(220, 168, 66, 0.15);
  margin-top: 20px;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldHover};
    transform: translateY(-2px);
  }
`;

const CartFooter = styled.div`
  padding: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  background-color: ${({ theme }) => theme.colors.sandLight};
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const TotalPrice = styled.span`
  color: ${({ theme }) => theme.colors.gold};
`;

const CheckoutBtn = styled.button`
  width: 100%;
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

function CartDrawer({ isOpen, onClose, cart, onUpdateQty, onRemoveItem, onOpenCheckout }) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    onOpenCheckout();
    onClose();
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <Drawer $isOpen={isOpen}>
        <CartHeader>
          <CartHeaderTitle>Your Bag</CartHeaderTitle>
          <CloseBtn onClick={onClose} aria-label="Close Shopping Bag">
            <Icon icon="ph:x" />
          </CloseBtn>
        </CartHeader>

        <CartItemsContainer>
          {cart.length === 0 ? (
            <EmptyCartWrap>
              <p>Your shopping bag is empty.</p>
              <StartShoppingBtn onClick={onClose}>Start Shopping</StartShoppingBtn>
            </EmptyCartWrap>
          ) : (
            cart.map((item, index) => (
              <CartItem key={`${item.id}-${item.color}-${item.size}`}>
                <ItemImgWrap>
                  <ItemImg src={item.image} alt={item.title} />
                </ItemImgWrap>
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemVariant>{item.color} / {item.size}</ItemVariant>
                  <ItemQtyWrap>
                    <QtyBtn onClick={() => onUpdateQty(index, -1)}>-</QtyBtn>
                    <QtyVal>{item.quantity}</QtyVal>
                    <QtyBtn onClick={() => onUpdateQty(index, 1)}>+</QtyBtn>
                  </ItemQtyWrap>
                </ItemDetails>
                <ItemPriceColumn>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <RemoveBtn onClick={() => onRemoveItem(index)}>Remove</RemoveBtn>
                </ItemPriceColumn>
              </CartItem>
            ))
          )}
        </CartItemsContainer>

        <CartFooter>
          <TotalRow>
            <span>Subtotal</span>
            <TotalPrice>${subtotal.toFixed(2)}</TotalPrice>
          </TotalRow>
          <CheckoutBtn onClick={handleCheckout} disabled={cart.length === 0}>
            Proceed to Checkout
          </CheckoutBtn>
        </CartFooter>
      </Drawer>
    </>
  );
}

export default CartDrawer;
