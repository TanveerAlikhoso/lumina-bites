import { Product } from '../store/useCartStore';

const MENU_PRODUCTS: Product[] = [
  // --- BURGERS ---
  {
    id: 'brioche-wagyu',
    name: 'Brioche Wagyu',
    description: 'Double A5 Wagyu patty, black truffle aioli, aged cheddar, toasted gold-dusted brioche bun.',
    price: 34.00,
    image: '/images/placeholders/burgers.svg',
    category: 'burgers',
    tag: "Chef's Choice",
    isPopular: true
  },
  {
    id: 'truffle-wagyu-large',
    name: 'The Truffle Wagyu',
    description: 'A decadent masterpiece featuring A5 Wagyu beef, triple-cream brie, and freshly shaved Périgord black truffles on a 24k gold-dusted brioche.',
    price: 42.00,
    image: '/images/placeholders/burgers.svg',
    category: 'burgers',
    tag: 'Best Seller',
    isPopular: true
  },
  {
    id: 'golden-royal-burger',
    name: 'Golden Royal Burger',
    description: '24K gold-wrapped double Prime beef, caviar spread, black truffle cheese, champagne-infused glaze on a custom sesame bun.',
    price: 85.00,
    image: '/images/placeholders/burgers.svg',
    category: 'burgers',
    tag: 'Ultra Luxury',
    isPopular: true
  },
  {
    id: 'caviar-lobster-roll-burger',
    name: 'Caviar Lobster Burger',
    description: 'Fresh Maine lobster claw, Ossetra caviar, brown butter mayonnaise, organic microgreens on a toasted milk bun.',
    price: 48.00,
    image: '/images/placeholders/burgers.svg',
    category: 'burgers',
    tag: 'Seafood Special',
    isPopular: false
  },
  {
    id: 'foie-gras-deluxe',
    name: 'Foie Gras Deluxe',
    description: 'Wagyu beef patty topped with pan-seared foie gras, fig compote, and aged balsamic reduction on artisanal brioche.',
    price: 54.00,
    image: '/images/placeholders/burgers.svg',
    category: 'burgers',
    tag: 'Epicurean',
    isPopular: false
  },
  {
    id: 'imperial-bison-burger',
    name: 'Imperial Bison Burger',
    description: 'Organic free-range bison patty, sharp white cheddar, caramelized shallots, house-made wild berry relish.',
    price: 38.00,
    image: '/images/placeholders/burgers.svg',
    category: 'burgers',
    tag: 'Signature',
    isPopular: false
  },

  // --- PIZZA ---
  {
    id: 'truffle-mushroom',
    name: 'Truffle Mushroom',
    description: 'Wild forest mushrooms, charcoal dough, fresh black truffle shavings, creamy burrata.',
    price: 28.00,
    image: '/images/placeholders/pizza.svg',
    category: 'pizza',
    tag: 'New Arrival',
    isPopular: true
  },
  {
    id: 'burrata-bliss',
    name: 'Burrata Bliss',
    description: 'Whole fresh Italian burrata heart on a foundation of San Marzano tomatoes, heirloom confit, and a 20-year aged balsamic drizzle.',
    price: 34.00,
    image: '/images/placeholders/pizza.svg',
    category: 'pizza',
    tag: "Chef's Choice",
    isPopular: true
  },
  {
    id: 'gold-leaf-caviar-pizza',
    name: 'Gold Leaf Caviar Pizza',
    description: '24K gold leaf flakes, Royal Ossetra caviar, smoked salmon carpaccio, crème fraîche base, micro-dill.',
    price: 95.00,
    image: '/images/placeholders/pizza.svg',
    category: 'pizza',
    tag: 'Prestige',
    isPopular: true
  },
  {
    id: 'iberico-fig-pizza',
    name: 'Iberico Fig Pizza',
    description: '36-month cured Jamón Ibérico, fresh Mission figs, gorgonzola dolce, fresh arugula, aged balsamic.',
    price: 36.00,
    image: '/images/placeholders/pizza.svg',
    category: 'pizza',
    tag: 'Classic Italian',
    isPopular: false
  },
  {
    id: 'lobster-thermidor-pizza',
    name: 'Lobster Thermidor Pizza',
    description: 'Butter-poached lobster chunks, cognac cream sauce, gruyère cheese, fresh chives.',
    price: 42.00,
    image: '/images/placeholders/pizza.svg',
    category: 'pizza',
    tag: 'Seafood',
    isPopular: false
  },
  {
    id: 'quattro-formaggi-truffle',
    name: 'Quattro Formaggi Truffle',
    description: 'Fontina, Taleggio, Gorgonzola, Burrata, topped with shaved white Alba truffles.',
    price: 39.00,
    image: '/images/placeholders/pizza.svg',
    category: 'pizza',
    tag: 'White Base',
    isPopular: false
  },

  // --- PASTA ---
  {
    id: 'classic-carbonara',
    name: 'Classic Carbonara',
    description: 'Pecorino Romano, organic egg yolk, crispy house-cured guanciale, perfectly al dente hand-rolled pasta.',
    price: 24.00,
    image: '/images/placeholders/pasta.svg',
    category: 'pasta',
    tag: 'Signature',
    isPopular: false
  },
  {
    id: 'lobster-tagliolini',
    name: 'Lobster Tagliolini',
    description: 'Hand-cut squid ink tagliolini, butter-poached Maine lobster tail, saffron-infused cherry tomato reduction.',
    price: 45.00,
    image: '/images/placeholders/pasta.svg',
    category: 'pasta',
    tag: 'Signature',
    isPopular: true
  },
  {
    id: 'white-truffle-tagliatelle',
    name: 'White Truffle Tagliatelle',
    description: 'House-made egg tagliatelle tossed in Alpine butter, Parmigiano-Reged, covered in shaved white truffles.',
    price: 55.00,
    image: '/images/placeholders/pasta.svg',
    category: 'pasta',
    tag: 'Chef Choice',
    isPopular: true
  },
  {
    id: 'saffron-seafood-linguine',
    name: 'Saffron Seafood Linguine',
    description: 'Saffron linguine with scallops, jumbo prawns, clams, wild garlic, and white wine emulsion.',
    price: 38.00,
    image: '/images/placeholders/pasta.svg',
    category: 'pasta',
    tag: 'Seafood',
    isPopular: false
  },
  {
    id: 'wagyu-bolognese-pappardelle',
    name: 'Wagyu Bolognese Pappardelle',
    description: 'Slow-braised A5 Wagyu beef ragù, hand-rolled wide pappardelle pasta, fresh ricotta cheese.',
    price: 36.00,
    image: '/images/placeholders/pasta.svg',
    category: 'pasta',
    tag: 'Classic',
    isPopular: false
  },
  {
    id: 'wild-mushroom-truffle-ravioli',
    name: 'Mushroom Truffle Ravioli',
    description: 'House-made ravioli stuffed with wild porcini, served in a sage butter sauce with fresh shaved truffles.',
    price: 32.00,
    image: '/images/placeholders/pasta.svg',
    category: 'pasta',
    tag: 'Vegetarian',
    isPopular: false
  },

  // --- DRINKS ---
  {
    id: 'nitro-cold-brew',
    name: 'Nitro Cold Brew',
    description: 'Slow-steeped organic coffee infused with pure nitrogen for a velvety, creamy cascade effect.',
    price: 8.00,
    image: '/images/placeholders/drinks.svg',
    category: 'drinks',
    tag: 'Lumina Elixir',
    isPopular: false
  },
  {
    id: 'gold-espresso-martini',
    name: 'Gold Espresso Martini',
    description: 'Signature single-origin espresso, premium vodka, gold-dusted coffee beans, house coffee liqueur.',
    price: 18.00,
    image: '/images/placeholders/drinks.svg',
    category: 'drinks',
    tag: 'Cocktail',
    isPopular: true
  },
  {
    id: 'saffron-rose-latte',
    name: 'Saffron Rose Latte',
    description: 'Organic milk, organic saffron threads, damask rose water, sweetened with pure acacia honey.',
    price: 12.00,
    image: '/images/placeholders/drinks.svg',
    category: 'drinks',
    tag: 'Elixir',
    isPopular: false
  },
  {
    id: 'smoked-rosemary-old-fashioned',
    name: 'Smoked Old Fashioned',
    description: 'Barrel-aged bourbon, maple syrup, orange bitters, smoked with fresh organic rosemary.',
    price: 20.00,
    image: '/images/placeholders/drinks.svg',
    category: 'drinks',
    tag: 'Cocktail',
    isPopular: false
  },
  {
    id: 'hibiscus-champagne-spritz',
    name: 'Hibiscus Champagne Spritz',
    description: 'Premium Champagne, organic wild hibiscus flower syrup, fresh mint, splash of club soda.',
    price: 22.00,
    image: '/images/placeholders/drinks.svg',
    category: 'drinks',
    tag: 'Sparkling',
    isPopular: true
  },
  {
    id: 'royal-matcha-frappe',
    name: 'Royal Matcha Frappé',
    description: 'Ceremonial grade Uji matcha, organic almond milk, sweet cream, topped with edible silver flakes.',
    price: 14.00,
    image: '/images/placeholders/drinks.svg',
    category: 'drinks',
    tag: 'Wellness',
    isPopular: false
  },

  // --- SIDES ---
  {
    id: 'truffle-fries',
    name: 'Truffle Frites',
    description: 'Gourmet hand-cut fries served in a designer bowl, dusted with truffle zest and freshly grated parmesan cheese.',
    price: 14.00,
    image: '/images/placeholders/sides.svg',
    category: 'sides',
    tag: 'Popular',
    isPopular: false
  },
  {
    id: 'crispy-caviar-tots',
    name: 'Crispy Caviar Tots',
    description: 'Crispy hand-formed potato tots topped with chive crème fraîche and Royal Ossetra caviar.',
    price: 26.00,
    image: '/images/placeholders/sides.svg',
    category: 'sides',
    tag: 'Deluxe',
    isPopular: true
  },
  {
    id: 'parmesan-asparagus-fries',
    name: 'Parmesan Asparagus',
    description: 'Panko-crusted fresh jumbo asparagus spears served with roasted garlic aioli.',
    price: 15.00,
    image: '/images/placeholders/sides.svg',
    category: 'sides',
    tag: 'Vegetarian',
    isPopular: false
  },
  {
    id: 'lobster-mac-cheese-bites',
    name: 'Lobster Mac Bites',
    description: 'Golden crispy bites stuffed with five-cheese macaroni and butter-poached lobster.',
    price: 22.00,
    image: '/images/placeholders/sides.svg',
    category: 'sides',
    tag: 'Seafood',
    isPopular: false
  },
  {
    id: 'wagyu-beef-sliders',
    name: 'Wagyu Beef Sliders',
    description: 'Three mini Wagyu sliders with aged cheddar, caramelized onions, and truffle aioli.',
    price: 28.00,
    image: '/images/placeholders/sides.svg',
    category: 'sides',
    tag: 'Signature',
    isPopular: true
  },
  {
    id: 'sweet-potato-truffle-wedges',
    name: 'Sweet Potato Truffle',
    description: 'Sweet potato wedges dusted with smoked paprika, sea salt, truffle oil, and pecorino romano.',
    price: 14.00,
    image: '/images/placeholders/sides.svg',
    category: 'sides',
    tag: 'Popular',
    isPopular: false
  }
];

export function useMenuData() {
  const getProductsByCategory = (category: Product['category']) => {
    return MENU_PRODUCTS.filter((p) => p.category === category);
  };

  const getPopularProducts = () => {
    return MENU_PRODUCTS.filter((p) => p.isPopular);
  };

  const getProductById = (id: string) => {
    return MENU_PRODUCTS.find((p) => p.id === id);
  };

  return {
    products: MENU_PRODUCTS,
    getProductsByCategory,
    getPopularProducts,
    getProductById,
  };
}
