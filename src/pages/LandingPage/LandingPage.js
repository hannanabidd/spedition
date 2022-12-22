// import { Footer } from "antd/lib/layout/layout";
import React from "react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import HeroSection from "../../components/HomeScreen/HeroSection";
import OnlineTransport from "../../components/HomeScreen/OnlineTransport";
import OurServices from "../../components/HomeScreen/OurServices";
import Steps from "../../components/HomeScreen/Steps";
import Testimonials from "../../components/HomeScreen/Testimonials";
import TransportNetwork from "../../components/HomeScreen/TransportNetwork";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OnlineTransport />
      <OurServices />
      <Steps />
      <Testimonials />
      <TransportNetwork />
      <Footer />
    </>
  );
};

export default LandingPage;
