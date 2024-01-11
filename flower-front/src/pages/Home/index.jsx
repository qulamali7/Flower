import React from "react";
import Flowers from "../../components/Flowers";
import Mission from "../../components/Mission";
import Events from "../../components/Events";
import Team from "../../components/Team";
import SliderSection from "../../components/SliderSection";

const Home = () => {
  return (
    <>
      <SliderSection />
      <Mission />
      <Flowers />
      <Events />
      <Team />
    </>
  );
};

export default Home;
