import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Card = styled.div`
  flex: 0 0 calc(33.333% - 20px);
  min-width: 300px;
  display: flex;
  flex-direction: column;
  background: transparent;
  transition: ${({ theme }) => theme.transitions.smooth};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: 0 0 calc(50% - 15px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
  }
`;

const liquidPulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.sandLight};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
  box-shadow: inset 0 0 20px rgba(44, 34, 30, 0.02);
  transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(220, 168, 66, 0.12) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.sand};
  }

  &:hover::before {
    opacity: 1;
    animation: ${liquidPulse} 4s infinite ease-in-out;
  }
`;

const ProductImage = styled.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  mix-blend-mode: multiply;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const QuickAddBtn = styled.button`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 20px);
  background-color: rgba(255, 255, 255, 0.95);
  color: ${({ theme }) => theme.colors.charcoal};
  border: none;
  padding: 10px 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  white-space: nowrap;
  z-index: 5;

  ${ImageWrap}:hover & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const WishlistBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active, theme }) => ($active ? theme.colors.gold : theme.colors.charcoal)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.2s ease;
  z-index: 5;

  svg {
    font-size: 16px;
  }

  &:hover {
    transform: scale(1.15);
  }
`;

const Meta = styled.div`
  text-align: center;
  padding: 0 10px;
`;

const SwatchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Swatch = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(44, 34, 30, 0.1);
  position: relative;
  background-color: ${({ $colorVal }) => $colorVal};
  transform: scale(1);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease;

  &:hover {
    transform: scale(1.25);
  }

  &::after {
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.colors.charcoal};
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.charcoal};
  
  &:hover h3 {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Title = styled.h3`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
  transition: ${({ theme }) => theme.transitions.fast};
`;

const Price = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold};
`;

const SizeSelectWrap = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const SizeButton = styled.button`
  background: none;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.charcoal : theme.colors.sand)};
  padding: 2px 6px;
  font-size: 0.65rem;
  border-radius: 2px;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  color: ${({ theme }) => theme.colors.charcoal};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.charcoal};
  }
`;

function ProductCard({ product, onAddToCart, wishlist = [], onToggleWishlist }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('12-18m');

  const isFavorited = wishlist.some((item) => item.id === product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleWishlist(product);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart({
      id: `${product.id}-${selectedColor.name.toLowerCase().replace(/\s+/g, '-')}`,
      title: product.title,
      price: product.price,
      image: selectedColor.image,
      color: selectedColor.name,
      size: selectedSize
    });
  };

  return (
    <Card>
      <ImageWrap data-cursor="view">
        <WishlistBtn 
          type="button" 
          $active={isFavorited} 
          onClick={handleWishlistToggle}
          aria-label="Add to Favorites"
        >
          <Icon icon={isFavorited ? "ph:heart-fill" : "ph:heart"} />
        </WishlistBtn>
        <Link to={`/product/${product.id}`} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ProductImage src={selectedColor.image} alt={product.title} />
        </Link>
        <QuickAddBtn onClick={handleQuickAdd}>Quick Add</QuickAddBtn>
      </ImageWrap>
      <Meta>
        <SwatchContainer>
          {product.colors.map((c) => (
            <Swatch
              key={c.name}
              title={c.name}
              $colorVal={c.hex}
              $active={selectedColor.name === c.name}
              onClick={() => setSelectedColor(c)}
            />
          ))}
        </SwatchContainer>
        <TitleLink to={`/product/${product.id}`}>
          <Title>{product.title}</Title>
        </TitleLink>
        <Price>${product.price.toFixed(2)}</Price>
        <SizeSelectWrap>
          {['6-12m', '12-18m', '18-24m'].map((size) => (
            <SizeButton
              key={size}
              $active={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </SizeSelectWrap>
      </Meta>
    </Card>
  );
}

export default ProductCard;
