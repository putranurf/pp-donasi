import React from "react";
import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer/footer";
import Carousel from "../../components/carousel/index";
import Card from "../../components/card/index";

const PublicSection = () => {
  return (
    <>
      <Header />
            <Carousel/>
            <Card/>
      <Footer />
    </>
  );
};

export default PublicSection;
