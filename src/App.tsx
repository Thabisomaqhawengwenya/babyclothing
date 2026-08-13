import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { theme } from './styles/theme.js';
import { GlobalStyles } from './styles/GlobalStyles.js';

// Component imports
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import WishlistDrawer from './components/WishlistDrawer.jsx';
import CheckoutModal from './components/CheckoutModal.jsx';
import SearchOverlay from './components/SearchOverlay.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Page imports
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageTransitionWrap = styled.div`
  animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

function App() {
  const [cart, setCart] = useState([
    {
      id: 'oatmeal-set',
      title: 'Short Sleeve Pocket Set',
      color: 'Oatmeal',
      size: '6-12m',
      price: 18.00,
      quantity: 1,
      image: '/images/product_oatmeal.png'
    }
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize wishlist from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load wishlist from localStorage:', e);
    }
  }, []);

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.color === product.color && item.size === product.size
      );
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (index, delta) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity += delta;
      if (newCart[index].quantity <= 0) {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  };

  const handleRemoveItem = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      let updated;
      if (exists) {
        updated = prev.filter((item) => item.id !== product.id);
      } else {
        updated = [...prev, product];
      }
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  const handleMoveToBag = (item) => {
    handleAddToCart({
      id: `${item.id}-${item.colors[0].name.toLowerCase().replace(/\s+/g, '-')}`,
      title: item.title,
      price: item.price,
      image: item.colors[0].image,
      color: item.colors[0].name,
      size: '12-18m'
    });
    handleRemoveFromWishlist(item.id);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomCursor />
      <Router>
        <ScrollToTop />
        <AnnouncementBar />
        <Header 
          cartCount={totalItemsCount} 
          wishlistCount={wishlist.length}
          onOpenCart={() => setIsCartOpen(true)} 
          onOpenWishlist={() => setIsWishlistOpen(true)} 
          onOpenSearch={() => setIsSearchOpen(true)} 
        />
        
        <Routes>
          <Route path="/" element={<PageTransitionWrap><Home onAddToCart={handleAddToCart} wishlist={wishlist} onToggleWishlist={handleToggleWishlist} /></PageTransitionWrap>} />
          <Route path="/shop" element={<PageTransitionWrap><Shop onAddToCart={handleAddToCart} wishlist={wishlist} onToggleWishlist={handleToggleWishlist} /></PageTransitionWrap>} />
          <Route path="/product/:id" element={<PageTransitionWrap><ProductDetail onAddToCart={handleAddToCart} wishlist={wishlist} onToggleWishlist={handleToggleWishlist} /></PageTransitionWrap>} />
          <Route path="/about" element={<PageTransitionWrap><About /></PageTransitionWrap>} />
          <Route path="/contact" element={<PageTransitionWrap><Contact /></PageTransitionWrap>} />
        </Routes>
        
        <Footer />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart}
          onUpdateQty={handleUpdateQty}
          onRemoveItem={handleRemoveItem}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        <WishlistDrawer
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          wishlist={wishlist}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          onMoveToBag={handleMoveToBag}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cart={cart}
          total={cartSubtotal}
          onClearCart={handleClearCart}
        />
        
        <SearchOverlay 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
