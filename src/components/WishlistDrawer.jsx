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

const Header = styled.div`
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.6rem;
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

const ItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px;
`;

const WishlistItem = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const ItemPrice = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
`;

const ActionRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const AddToBagBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 6px 12px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.65rem;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;

const EmptyWishlistWrap = styled.div`
  text-align: center;
  padding: 80px 0;
  color: ${({ theme }) => theme.colors.textMuted};

  p {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
`;

const StartShoppingBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 12px 30px;
  font-size: 0.75rem;
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

function WishlistDrawer({ isOpen, onClose, wishlist, onRemoveFromWishlist, onMoveToBag }) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <Drawer $isOpen={isOpen}>
        <Header>
          <HeaderTitle>Your Favorites</HeaderTitle>
          <CloseBtn onClick={onClose} aria-label="Close Favorites">
            <Icon icon="ph:x" />
          </CloseBtn>
        </Header>

        <ItemsContainer>
          {wishlist.length === 0 ? (
            <EmptyWishlistWrap>
              <p>Your favorites list is empty.</p>
              <StartShoppingBtn onClick={onClose}>Start Exploring</StartShoppingBtn>
            </EmptyWishlistWrap>
          ) : (
            wishlist.map((item) => (
              <WishlistItem key={item.id}>
                <ItemImgWrap>
                  <ItemImg src={item.image} alt={item.title} />
                </ItemImgWrap>
                <ItemDetails>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                  </div>
                  <ActionRow>
                    <AddToBagBtn onClick={() => onMoveToBag(item)}>
                      Move to Bag
                    </AddToBagBtn>
                    <RemoveBtn onClick={() => onRemoveFromWishlist(item.id)}>
                      Remove
                    </RemoveBtn>
                  </ActionRow>
                </ItemDetails>
              </WishlistItem>
            ))
          )}
        </ItemsContainer>
      </Drawer>
    </>
  );
}

export default WishlistDrawer;
