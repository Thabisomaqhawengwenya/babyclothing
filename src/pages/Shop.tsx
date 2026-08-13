import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard.jsx';
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

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  z-index: 1;
`;

const BoldBgText = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sand};
  opacity: 0.25;
  pointer-events: none;
  white-space: nowrap;
  z-index: 0;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 5.5rem;
    top: -15px;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 15px;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
  position: relative;
  z-index: 2;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const SearchInputWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.sandLight};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const SearchIconWrap = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterSelect = styled.select`
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.colors.sand};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;

  /* Asymmetric editorial offsets */
  & > div:nth-child(3n + 2) {
    margin-top: 40px;
  }
  & > div:nth-child(3n + 3) {
    margin-top: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    & > div:nth-child(3n + 2),
    & > div:nth-child(3n + 3) {
      margin-top: 0;
    }
    & > div:nth-child(2n) {
      margin-top: 30px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    & > div:nth-child(2n) {
      margin-top: 0;
    }
    gap: 30px;
  }
`;

const NoResults = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.sand};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.charcoal};
    margin-bottom: 10px;
  }
`;

const LoadingWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.gold};
    animation: spin 1.5s linear infinite;
    margin-bottom: 15px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

function Shop({ onAddToCart, wishlist, onToggleWishlist }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Default');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  // Filter and sort items
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOrder === 'PriceLowHigh') return a.price - b.price;
    if (sortOrder === 'PriceHighLow') return b.price - a.price;
    return 0; // Default ordering
  });

  return (
    <PageContainer>
      <BoldBgText>ORGANIC</BoldBgText>
      <PageHeader>
        <Title>Our Collection</Title>
        <Subtitle>Speciality, GOTS certified gender-neutral garments</Subtitle>
      </PageHeader>

      <ControlsContainer>
        {/* Search */}
        <SearchInputWrap>
          <SearchInput 
            type="text" 
            placeholder="Search our boutique..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIconWrap>
            <Icon icon="ph:magnifying-glass" />
          </SearchIconWrap>
        </SearchInputWrap>

        {/* Filters and Sorting */}
        <FilterGroup>
          <FilterSelect 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="All">All Categories</option>
            <option value="Sets">Sets</option>
            <option value="Onesies">Onesies</option>
            <option value="Accessories">Accessories</option>
            <option value="Tops">Tops</option>
            <option value="Rompers">Rompers</option>
          </FilterSelect>

          <FilterSelect 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            aria-label="Sort products"
          >
            <option value="Default">Featured</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
          </FilterSelect>
        </FilterGroup>
      </ControlsContainer>

      {/* Grid */}
      {loading ? (
        <LoadingWrap>
          <Icon icon="ph:spinner-gap" />
          <p>Curating our premium organic garments...</p>
        </LoadingWrap>
      ) : filteredProducts.length === 0 ? (
        <NoResults>
          <Icon icon="ph:smiley-sad" />
          <h3>No items found</h3>
          <p>Try searching for a different keyword or adjusting your filters.</p>
        </NoResults>
      ) : (
        <ProductsGrid>
          {filteredProducts.map((prod) => (
            <ProductCard 
              key={prod.id} 
              product={prod} 
              onAddToCart={onAddToCart} 
              wishlist={wishlist}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </ProductsGrid>
      )}
    </PageContainer>
  );
}

export default Shop;
