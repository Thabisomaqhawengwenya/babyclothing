import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.jsx';

const Section = styled.section`
  padding: 80px 40px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const ViewAllLink = styled(Link)`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.charcoal};
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.08em;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.charcoal};
  padding-bottom: 2px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const CarouselViewport = styled.div`
  overflow-x: auto;
  scroll-behavior: auto; /* Disabled smooth to allow drag/momentum to take control */
  scrollbar-width: none; /* Firefox */
  display: flex;
  gap: 30px;
  padding-bottom: 15px;
  user-select: none;

  &::-webkit-scrollbar {
    display: none; /* Safari / Chrome */
  }
`;

const ScrollbarTrack = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.sand};
  margin-top: 40px;
  position: relative;
  border-radius: 1px;
`;

const ScrollbarThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.333%; /* Matches view ratio roughly */
  background-color: ${({ theme }) => theme.colors.charcoal};
  border-radius: 1px;
  transition: left 0.1s ease-out;
`;

function FeaturedCollection({ onAddToCart, wishlist, onToggleWishlist }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const requestRef = useRef(null);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch featured products:', err);
        setLoading(false);
      });
  }, []);

  // Show first 3 products in carousel
  const featuredProducts = products.slice(0, 3);

  const updateIndicator = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!viewport || !track || !thumb) return;

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (maxScroll <= 0) return;

    const scrollPercent = viewport.scrollLeft / maxScroll;
    const trackWidth = track.clientWidth;
    const thumbWidth = thumb.clientWidth;
    const offset = scrollPercent * (trackWidth - thumbWidth);

    thumb.style.left = `${offset}px`;
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.addEventListener('scroll', updateIndicator);
    window.addEventListener('resize', updateIndicator);

    // Initial position trigger
    const timer = setTimeout(updateIndicator, 100);

    return () => {
      viewport.removeEventListener('scroll', updateIndicator);
      window.removeEventListener('resize', updateIndicator);
      cancelAnimationFrame(requestRef.current);
      clearTimeout(timer);
    };
  }, []);

  const handleMouseDown = (e) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    cancelAnimationFrame(requestRef.current); // Stop any active momentum
    setIsDown(true);
    setStartX(e.pageX - viewport.offsetLeft);
    setScrollLeftState(viewport.scrollLeft);
    lastXRef.current = e.pageX;
    velocityRef.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDown) {
      setIsDown(false);
      startInertia();
    }
  };

  const handleMouseUp = () => {
    if (isDown) {
      setIsDown(false);
      startInertia();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const viewport = viewportRef.current;
    if (!viewport) return;

    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 1.2; // Drag multiplier
    viewport.scrollLeft = scrollLeftState - walk;

    // Calculate drag velocity
    velocityRef.current = e.pageX - lastXRef.current;
    lastXRef.current = e.pageX;
  };

  const startInertia = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const animateInertia = () => {
      viewport.scrollLeft -= velocityRef.current;
      velocityRef.current *= 0.92; // Inertial decay multiplier

      if (Math.abs(velocityRef.current) > 0.2) {
        requestRef.current = requestAnimationFrame(animateInertia);
      }
    };
    requestRef.current = requestAnimationFrame(animateInertia);
  };

  return (
    <Section id="shop">
      <SectionHeader>
        <Title>Featured collection</Title>
        <ViewAllLink to="/shop">View all</ViewAllLink>
      </SectionHeader>

      <CarouselViewport
        ref={viewportRef}
        className="carousel-viewport"
        data-cursor="drag"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {loading ? (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '40px 0', color: '#8F9E8B' }}>
            Curating featured collection...
          </div>
        ) : (
          featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              wishlist={wishlist}
              onToggleWishlist={onToggleWishlist}
            />
          ))
        )}
      </CarouselViewport>

      <ScrollbarTrack ref={trackRef}>
        <ScrollbarThumb ref={thumbRef} />
      </ScrollbarTrack>
    </Section>
  );
}

export default FeaturedCollection;
