import * as React from 'react';
import { Link, navigate } from 'gatsby';

import AttributeGrid from '../components/AttributeGrid';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';
import { toOptimizedImage } from '../helpers/general';

import * as styles from './index.module.css';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero */}
      <Hero
        maxWidth="500px"
        image={toOptimizedImage('/blurred-gallery.webp')}
        title="Art by Hertling"
        subtitle="Discover the Gallery"
        ctaText="shop now"
        ctaAction={goToShop}
      />

      {/* Message */}
      <div className={styles.messageContainer}>
        <p>
          Creating art since <span className={styles.gold}>1967.</span>
        </p>
        <p>
          Born in Berlin’s creative underground, we’ve carried forward a{' '}
          <span className={styles.gold}>tradition</span> of bold,{' '}
          <span className={styles.gold}>expressive art</span> that speaks to its
          time
        </p>
      </div>

      {/* Collection */}
      <div className={styles.collectionContainer}>
        <Container size="large">
          <Title name="Newest Work" />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name="New Arrivals" link="/shop" textLink="view all" />
          <ProductCardGrid
            spacing
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight */}
      <div className={styles.highlightContainer}>
        <Container size="large" fullMobile>
          <Highlight
            image={toOptimizedImage('/artworks-highlight.jpg')}
            altImage="highlight image"
            miniImage={toOptimizedImage('/avatar-highlight.jpg')}
            miniImageAlt="mini highlight image"
            title="One of One"
            description="Each piece in this collection is completely unique — one of a kind, never to be repeated."
            textLink="discover"
            link="/shop"
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('/made-in-berlin.jpg')}
          title="Made in Berlin"
        />
        <div className={styles.linkContainers}>
          <Link to="/shop">Physical Originals</Link>
          <Link to="/shop">Digital Originals</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor="var(--standard-light-grey)"
        title="about Hertling"
        quote='"I believe in two things: creating art that speaks for itself, and valuing the people who experience it. Everything else will follow naturally."'
      />

      {/* Blog */}
      <div className={styles.blogsContainer}>
        <Container size="large">
          <Title name="Journal" subtitle="Notes on life and style" />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Materials */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/materials-process.jpg')}
          title="Materials & Process"
          subtitle="Every piece is crafted with care, using high-quality materials and thoughtful techniques. From start to finish, the process is designed to bring each unique vision to life."
          ctaText="read more"
          maxWidth="660px"
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social */}
      <div className={styles.socialContainer}>
        <Title
          name="Newest inspirations"
          subtitle="Tag @hertling to be featured."
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage('/green-man.jpg')} alt="social media 1" />
          <img src={toOptimizedImage('/classic-poster.jpg')} alt="social media 2" />
          <img
            src={toOptimizedImage('/guy-buffet-martini.jpg')}
            alt="social media 3"
          />
          <img src={toOptimizedImage('/abstract-7.jpg')} alt="social media 4" />
        </div>
      </div>

      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;

