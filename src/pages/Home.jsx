import Hero from '../components/Hero.jsx';
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import BrandBanner from '../components/BrandBanner.jsx';
import Story from '../components/Story.jsx';
import Categories from '../components/Categories.jsx';
import Testimonials from '../components/Testimonials.jsx';

function Home({ onAddToCart, wishlist, onToggleWishlist }) {
  return (
    <>
      <Hero />
      <FeaturedCollection onAddToCart={onAddToCart} wishlist={wishlist} onToggleWishlist={onToggleWishlist} />
      <BrandBanner />
      <Testimonials />
      <Story />
      <Categories />
    </>
  );
}

export default Home;
