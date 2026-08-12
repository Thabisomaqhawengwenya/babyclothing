import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard.jsx';
import { Icon } from '@iconify/react';

const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 60px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 20px;
  }
`;

const Breadcrumb = styled.div`
  margin-bottom: 30px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    color: ${({ theme }) => theme.colors.charcoal};
    text-decoration: none;
    font-weight: 500;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }

  span {
    margin: 0 8px;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ImageColumn = styled.div`
  flex: 1.2;
  background-color: ${({ theme }) => theme.colors.sandLight};
  border-radius: 6px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 30px rgba(44, 34, 30, 0.03);
`;

const ProductImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  mix-blend-mode: multiply;
`;

const DetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 25px;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  margin: 25px 0;
`;

const SelectionLabel = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: none;
    margin-left: 5px;
  }
`;

const SwatchContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
`;

const Swatch = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(44, 34, 30, 0.15);
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};
  background-color: ${({ $colorVal }) => $colorVal};

  &::after {
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.colors.charcoal};
  }
`;

const SizeSelectWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;

const SizeButton = styled.button`
  background: none;
  border: 1.5px solid ${({ $active, theme }) => ($active ? theme.colors.charcoal : theme.colors.sand)};
  padding: 10px 20px;
  font-size: 0.8rem;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.charcoal};
  }
`;

const PurchaseControls = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const QtyPicker = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.colors.sand};
  border-radius: 2px;
`;

const QtyBtn = styled.button`
  background: none;
  border: none;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.charcoal};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sandLight};
  }
`;

const QtyVal = styled.span`
  width: 40px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
`;

const AddBtn = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 14px;
  font-size: 0.85rem;
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

const ReviewBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gold};
  margin-top: 10px;
  margin-bottom: 20px;
  
  span {
    color: ${({ theme }) => theme.colors.textMuted};
    margin-left: 5px;
    font-size: 0.8rem;
  }
`;

const DetailWishlistBtn = styled.button`
  background: none;
  border: 1.5px solid ${({ theme }) => theme.colors.sand};
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active, theme }) => ($active ? theme.colors.gold : theme.colors.charcoal)};
  transition: ${({ theme }) => theme.transitions.fast};

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.charcoal};
    transform: scale(1.03);
  }
`;

const ProductDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(44, 34, 30, 0.8);
  margin-bottom: 30px;
`;

/* Collapsible Accordion Styles */
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
  padding: 15px 0;
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
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '15px' : '0')};
`;

/* Related Products Section */
const RelatedSection = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding-top: 60px;
`;

const RelatedTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
`;

const RelatedGrid = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

function ProductDetail({ onAddToCart, wishlist = [], onToggleWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('12-18m');
  const [quantity, setQuantity] = useState(1);

  // Accordion open/close states
  const [openPanel, setOpenPanel] = useState(null);

  const isFavorited = product ? wishlist.some((item) => item.id === product.id) : false;

  const handleWishlistToggle = () => {
    if (product) {
      onToggleWishlist(product);
    }
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const foundProduct = data.find((p) => p.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedColor(foundProduct.colors[0]);
          setQuantity(1);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch product details:', err);
        setLoading(false);
      });
    // Scroll to top when routing to detail page
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <PageContainer style={{ textAlign: 'center', padding: '100px 20px', color: '#8F9E8B' }}>
        <h2>Curating garment details...</h2>
      </PageContainer>
    );
  }

  if (!product) {
    return (
      <PageContainer style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Product not found</h2>
        <Link to="/shop" style={{ color: '#DCA842', textDecoration: 'underline', marginTop: '20px', display: 'block' }}>Return to Shop</Link>
      </PageContainer>
    );
  }

  const handleQtyChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart({
        id: `${product.id}-${selectedColor.name.toLowerCase().replace(/\s+/g, '-')}`,
        title: product.title,
        price: product.price,
        image: selectedColor.image,
        color: selectedColor.name,
        size: selectedSize
      });
    }
  };

  const toggleAccordion = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  // Select 3 related products
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <PageContainer>
      <Breadcrumb>
        <Link to="/">Home</Link>
        <span>—</span>
        <Link to="/shop">Shop</Link>
        <span>—</span>
        <span>{product.title}</span>
      </Breadcrumb>

      <ProductGrid>
        {/* Left Column: Image */}
        <ImageColumn>
          {selectedColor && (
            <ProductImg src={selectedColor.image} alt={product.title} />
          )}
        </ImageColumn>

        {/* Right Column: Details */}
        <DetailsColumn>
          <CategoryLabel>{product.category}</CategoryLabel>
          <Title>{product.title}</Title>
          <Price>${product.price.toFixed(2)}</Price>
          <ReviewBadge>
            <Icon icon="ph:star-fill" />
            <Icon icon="ph:star-fill" />
            <Icon icon="ph:star-fill" />
            <Icon icon="ph:star-fill" />
            <Icon icon="ph:star-fill" />
            <span>4.9 (3 reviews)</span>
          </ReviewBadge>
          <ProductDesc>{product.description}</ProductDesc>

          <Divider />

          {/* Color swatches */}
          {selectedColor && (
            <>
              <SelectionLabel>
                Color: <span>{selectedColor.name}</span>
              </SelectionLabel>
              <SwatchContainer>
                {product.colors.map((c) => (
                  <Swatch
                    key={c.name}
                    $colorVal={c.hex}
                    $active={selectedColor.name === c.name}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </SwatchContainer>
            </>
          )}

          {/* Sizes picker */}
          <SelectionLabel>
            Size: <span>{selectedSize}</span>
          </SelectionLabel>
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

          {/* Purchase qty and action */}
          <PurchaseControls>
            <QtyPicker>
              <QtyBtn onClick={() => handleQtyChange(-1)}>-</QtyBtn>
              <QtyVal>{quantity}</QtyVal>
              <QtyBtn onClick={() => handleQtyChange(1)}>+</QtyBtn>
            </QtyPicker>
            <AddBtn onClick={handleAdd}>Add to Bag</AddBtn>
            <DetailWishlistBtn 
              type="button" 
              $active={isFavorited} 
              onClick={handleWishlistToggle}
              aria-label="Add to Favorites"
            >
              <Icon icon={isFavorited ? "ph:heart-fill" : "ph:heart"} />
            </DetailWishlistBtn>
          </PurchaseControls>

          {/* Accodion lists */}
          <Accordion>
            <AccordionItem>
              <AccordionHeader 
                $isOpen={openPanel === 'materials'} 
                onClick={() => toggleAccordion('materials')}
              >
                <span>Materials & Care</span>
                <Icon icon="ph:caret-down" />
              </AccordionHeader>
              <AccordionContent $isOpen={openPanel === 'materials'}>
                <p>{product.materials}</p>
                <p style={{ marginTop: '10px' }}>Wash with similar colors on a cool, gentle cycle. Hang or lay flat to dry. Low iron if needed.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader 
                $isOpen={openPanel === 'shipping'} 
                onClick={() => toggleAccordion('shipping')}
              >
                <span>Shipping & Returns</span>
                <Icon icon="ph:caret-down" />
              </AccordionHeader>
              <AccordionContent $isOpen={openPanel === 'shipping'}>
                <p>{product.shipping}</p>
                <p style={{ marginTop: '10px' }}>We want you to love your purchase. Unworn and unwashed items can be returned within 14 days of delivery.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader 
                $isOpen={openPanel === 'reviews'} 
                onClick={() => toggleAccordion('reviews')}
              >
                <span>Customer Reviews (3)</span>
                <Icon icon="ph:caret-down" />
              </AccordionHeader>
              <AccordionContent $isOpen={openPanel === 'reviews'}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '10px' }}>
                  <div>
                    <div style={{ display: 'flex', color: '#DCA842', gap: '2px', fontSize: '0.75rem', marginBottom: '4px' }}>
                      <Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" />
                    </div>
                    <strong style={{ fontSize: '0.85rem', color: '#2C221E' }}>Wonderfully soft cotton!</strong>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(44, 34, 30, 0.7)', marginTop: '4px' }}>&ldquo;This garment exceeded my expectations. The organic cotton is so soft and holds its shape perfectly after washing.&rdquo; — Emily S.</p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', color: '#DCA842', gap: '2px', fontSize: '0.75rem', marginBottom: '4px' }}>
                      <Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" />
                    </div>
                    <strong style={{ fontSize: '0.85rem', color: '#2C221E' }}>Perfect fit and lovely color</strong>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(44, 34, 30, 0.7)', marginTop: '4px' }}>&ldquo;The color is beautiful and earthy. Snap fasteners make diaper changes very easy.&rdquo; — Clara R.</p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', color: '#DCA842', gap: '2px', fontSize: '0.75rem', marginBottom: '4px' }}>
                      <Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-light" />
                    </div>
                    <strong style={{ fontSize: '0.85rem', color: '#2C221E' }}>Highly recommended!</strong>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(44, 34, 30, 0.7)', marginTop: '4px' }}>&ldquo;Keeps my baby cozy and looks very stylish. Delivery to Hamilton was super fast.&rdquo; — Liam N.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DetailsColumn>
      </ProductGrid>

      {/* Related Products Carousel */}
      <RelatedSection>
        <RelatedTitle>You may also like</RelatedTitle>
        <RelatedGrid>
          {relatedProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAddToCart={onAddToCart} 
              wishlist={wishlist}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </RelatedGrid>
      </RelatedSection>
    </PageContainer>
  );
}

export default ProductDetail;
