import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppLayout from '../components/AppLayout';
import { useCart, useMenuData, Product } from '@lumina/core';
import { FoodHero, CategoryCards, MenuCard } from '@lumina/ui';

type Category = Product['category'];

/**
 * Home page — native React, built from the template's own components.
 * Replaces the previous static-mockup iframe. Shows the hero, the category
 * cards, and a featured row from the selected category with working cart
 * controls. Checkout remains a front-end demo: nothing is charged or stored.
 */
export default function HomePage() {
  const router = useRouter();
  const { getProductsByCategory, getPopularProducts } = useMenuData();
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const [activeCategory, setActiveCategory] = useState<Category>('burgers');

  const featured = getProductsByCategory(activeCategory).slice(0, 4);
  const popular = getPopularProducts().slice(0, 4);

  const getCartItem = (productId: string) =>
    cart.find((item) => item.id === productId || item.productId === productId);

  const handleAdd = (product: Product) => {
    addToCart({
      id: product.id,
      productId: product.id,
      name: product.name,
      basePrice: product.price,
      price: product.price,
      image: product.image,
    });
  };

  const handleIncrement = (product: Product) => {
    const item = getCartItem(product.id);
    if (item) updateQuantity(item.id, item.quantity + 1);
    else handleAdd(product);
  };

  const handleDecrement = (product: Product) => {
    const item = getCartItem(product.id);
    if (item) {
      if (item.quantity <= 1) removeFromCart(item.id);
      else updateQuantity(item.id, item.quantity - 1);
    }
  };

  const cardProps = (product: Product) => {
    const item = getCartItem(product.id);
    return {
      product,
      quantity: item ? item.quantity : 0,
      onIncrement: () => handleIncrement(product),
      onDecrement: () => handleDecrement(product),
      onCustomize: () => handleAdd(product),
    };
  };

  return (
    <AppLayout title="Lumina Bites | Premium Fast Food & Dining">
      <Head>
        <title>Lumina Bites | Premium Fast Food &amp; Dining</title>
        <meta
          name="description"
          content="Premium fast food reimagined. Browse the menu, build your order, and check out — a front-end template demo."
        />
      </Head>

      <FoodHero
        onExploreMenu={() => router.push('/menu-dashboard')}
        onOurStory={() => router.push('/experience')}
      />

      {/* ── Browse by category ── */}
      <section
        style={{
          background: '#131313',
          padding: '64px 0 16px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px 24px',
          }}
        >
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              color: '#ff7a00',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Browse the menu
          </span>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 900,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              margin: '8px 0 0',
            }}
          >
            Pick your craving
          </h2>
        </div>
        <CategoryCards
          activeCategory={activeCategory}
          onSelectCategory={(id) => setActiveCategory(id as Category)}
        />
      </section>

      {/* ── Featured from the selected category ── */}
      <section
        style={{
          background: '#131313',
          padding: '32px 0 80px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '18px',
                fontWeight: 800,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Featured {activeCategory}
            </h3>
            <button
              onClick={() => router.push('/menu-dashboard')}
              style={{
                background: 'none',
                border: '1px solid rgba(255,182,139,0.3)',
                borderRadius: '9999px',
                color: '#ffb68b',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                padding: '10px 20px',
                cursor: 'pointer',
              }}
            >
              View full menu →
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {featured.map((product) => (
              <MenuCard key={product.id} {...cardProps(product)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular picks ── */}
      <section
        style={{
          background: '#0e0e10',
          padding: '64px 0 80px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <h3
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '18px',
              fontWeight: 800,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}
          >
            Most loved
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {popular.map((product) => (
              <MenuCard key={product.id} {...cardProps(product)} />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => router.push('/catering')}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '18px 24px',
                borderRadius: '16px',
                background: 'rgba(249,115,22,0.1)',
                border: '1px solid rgba(249,115,22,0.25)',
                color: '#ffb68b',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              Planning an event? → Explore catering
            </button>
            <button
              onClick={() => router.push('/locations')}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '18px 24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,182,139,0.8)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              Dine with us → Find a location
            </button>
          </div>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              textAlign: 'center',
              marginTop: '48px',
            }}
          >
            © 2026 Lumina Bites. Front-end template demo — checkout does not
            charge, store, or fulfil orders.
          </p>
        </div>
      </section>
    </AppLayout>
  );
}
