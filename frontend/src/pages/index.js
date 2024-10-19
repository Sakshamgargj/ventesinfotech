import React from "react";
// internal
import SEO from "@components/seo";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import HeroBanner from "@components/hero-banner";
import ShopCategoryArea from "@components/shop-category/shop-category";
import ShopProducts from "@components/products";
import OfferPopularProduct from "@components/offer-product";
import ShopBanner from "@components/shop-banner";
import ShopFeature from "@components/shop-feature";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";
import CustomerReviews from "@components/customer-reviews";
import Popup from "@components/popup";
import MoreArea from "@components/moreArea";

const HomeShop = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Shop"} />
      <Popup />
      <Header />
      <HeroBanner />
      <ShopCategoryArea />
      <ShopProducts />
      <OfferPopularProduct />
      <ShopBanner />
      <ShopFeature />
      <MoreArea/>
      <CustomerReviews />
      <ShopCta />
      <Footer />
    </Wrapper>
  );
};

export default HomeShop;
