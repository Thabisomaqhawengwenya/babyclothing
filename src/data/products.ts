export const PRODUCTS = [
  {
    id: 'oatmeal-set',
    title: 'Short Sleeve Pocket Set',
    price: 18.00,
    image: '/assets/product_oatmeal.png',
    category: 'Sets',
    colors: [
      { name: 'Oatmeal', hex: '#EFECE6', image: '/assets/product_oatmeal.png' },
      { name: 'Charcoal', hex: '#333333', image: '/assets/product_charcoal_set.png' }
    ],
    description: 'A cozy and minimalist short sleeve set made from premium organic ribbed cotton. Features a chest pocket and matching elastic shorts. Ideal for everyday adventures and active play.',
    materials: '95% Organic Cotton, 5% Spandex. GOTS certified.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'honey-set',
    title: 'Honey Rainbows 2-Piece Set',
    price: 19.50,
    image: '/assets/product_honey.png',
    category: 'Sets',
    colors: [
      { name: 'Honey', hex: '#DCA842', image: '/assets/assets/product_honey.png' }, // wait, /assets/product_honey.png
      { name: 'Cream', hex: '#EFECE6', image: '/assets/product_cream_set.png' }
    ],
    description: 'An adorable two-piece set featuring warm honey-colored rainbow prints on a soft ribbed base. Includes a long sleeve top and matching pants with cozy ankle cuffs.',
    materials: '100% Organic Ribbed Cotton. GOTS certified.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'tiedye-set',
    title: 'Tie Dye Set',
    price: 20.00,
    image: '/assets/product_tiedye.png',
    category: 'Sets',
    colors: [
      { name: 'Marble Black', hex: '#333333', image: '/assets/product_tiedye.png' },
      { name: 'Marble White', hex: '#EFECE6', image: '/assets/product_tiedye_white.png' }
    ],
    description: 'A stylish and trendy tie dye set in classic marble washes. Composed of a comfy short sleeve crewneck and matching shorts, crafted for neutral and comfortable wear.',
    materials: '95% Cotton, 5% Elasthan.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'knit-socks',
    title: 'Soft Cotton Knit Socks',
    price: 8.50,
    image: '/assets/product_socks_white.png',
    category: 'Accessories',
    colors: [
      { name: 'Chalk White', hex: '#FFFFFF', image: '/assets/product_socks_white.png' },
      { name: 'Warm Sand', hex: '#EAE3D2', image: '/assets/product_socks_sand.png' }
    ],
    description: 'High-quality knit textured socks designed to keep baby feet cozy. Features a soft ribbed ankle cuff that stays in place without pinching or slipping.',
    materials: '85% Cotton, 12% Polyester, 3% Spandex.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'ribbed-onesie',
    title: 'Minimalist Ribbed Onesie',
    price: 16.00,
    image: '/assets/product_onesie_sage.png',
    category: 'Onesies',
    colors: [
      { name: 'Sage Green', hex: '#8F9E8B', image: '/assets/product_onesie_sage.png' },
      { name: 'Desert Sand', hex: '#EAE3D2', image: '/assets/product_onesie_sand.png' },
      { name: 'Oatmeal', hex: '#EFECE6', image: '/assets/product_onesie_oatmeal.png' }
    ],
    description: 'A classic gender-neutral ribbed bodysuit featuring easy-snap bottom closures and envelope shoulders for quick diaper changes. Ultra-soft and breathable.',
    materials: '98% Organic Cotton, 2% Spandex.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'snap-bib',
    title: 'Organic Cotton Snap Bib',
    price: 12.00,
    image: '/assets/product_bib_sage.png',
    category: 'Accessories',
    colors: [
      { name: 'Sage Green', hex: '#8F9E8B', image: '/assets/product_bib_sage.png' },
      { name: 'Desert Sand', hex: '#EAE3D2', image: '/assets/product_bib_sand.png' },
      { name: 'Honey', hex: '#DCA842', image: '/assets/product_bib_honey.png' }
    ],
    description: 'Our organic snap bibs are designed to protect baby clothes with a modern aesthetic. Features double snaps for adjustable sizing and double-layered GOTS cotton.',
    materials: '100% Organic GOTS Cotton.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'ribbed-beanie',
    title: 'Cozy Ribbed Knit Beanie',
    price: 10.00,
    image: '/assets/product_beanie_oatmeal.png',
    category: 'Accessories',
    colors: [
      { name: 'Oatmeal', hex: '#EFECE6', image: '/assets/product_beanie_oatmeal.png' },
      { name: 'Sage Green', hex: '#8F9E8B', image: '/assets/product_beanie_sage.png' }
    ],
    description: 'A premium ribbed knit beanie designed to protect baby heads from cool drafts. Handcrafted from organic cotton threads with a folded brim layout.',
    materials: '100% Organic Cotton. GOTS certified.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'organic-tee',
    title: 'Organic Ribbed Pocket Tee',
    price: 14.50,
    image: '/assets/product_oatmeal.png',
    category: 'Tops',
    colors: [
      { name: 'Oatmeal', hex: '#EFECE6', image: '/assets/product_oatmeal.png' },
      { name: 'Charcoal', hex: '#333333', image: '/assets/product_charcoal_set.png' }
    ],
    description: 'A simple yet stylish short-sleeve pocket t-shirt. Features soft ribbing, neutral colors, and organic fibers for comfortable day-long wear.',
    materials: '95% Organic Cotton, 5% Elastane.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'cotton-romper',
    title: 'Ribbed Play Romper',
    price: 17.00,
    image: '/assets/product_onesie_sage.png',
    category: 'Rompers',
    colors: [
      { name: 'Sage Green', hex: '#8F9E8B', image: '/assets/product_onesie_sage.png' },
      { name: 'Desert Sand', hex: '#EAE3D2', image: '/assets/product_onesie_sand.png' },
      { name: 'Oatmeal', hex: '#EFECE6', image: '/assets/product_onesie_oatmeal.png' }
    ],
    description: 'An all-in-one play suit designed for busy little ones. Features soft organic ribbed knit cotton, snap fasteners for easy diaper changes, and tagless construction.',
    materials: '98% Organic Cotton, 2% Spandex.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  },
  {
    id: 'ruffle-socks',
    title: 'Ruffle Trim Knit Socks',
    price: 9.00,
    image: '/assets/product_socks_white.png',
    category: 'Accessories',
    colors: [
      { name: 'Chalk White', hex: '#FFFFFF', image: '/assets/product_socks_white.png' },
      { name: 'Warm Sand', hex: '#EAE3D2', image: '/assets/product_socks_sand.png' }
    ],
    description: 'Beautiful knit crew socks with a delicate ruffled cuff. Adds a sweet, nostalgic finish to any baby boutique outfit.',
    materials: '80% Cotton, 17% Nylon, 3% Spandex.',
    shipping: 'Ships in 1-3 business days. Free delivery on orders over $50.'
  }
];
