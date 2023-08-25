import React from "react";
import Slider from "../../components/sliders/Slider";
import Products from "../../components/products/Products";
import Collection from "../../components/collections/Collection";
import { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Section from "../../components/section/Section ";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-blue text-white">
      <Slider />
      <Hero />
      <h2 className="mx-4 mb-4 mt-16 flex items-center justify-center text-2xl font-light tracking-tight text-white border-4 border-x-blue rounded-sm p-4">
        Collection
      </h2>
      <Collection />
      <h2 className="mx-4 flex items-center justify-center text-2xl font-light tracking-tight text-white border-4 border-x-blue rounded-sm p-4">
        Featured Products
      </h2>
      <Products />
     <div className="bg-white text-blue">
     <Section />
     </div>
      {/* <Link to="/collection" className="bg-blue  max-w-[130px] text-light ml-[550px] mb-8 py-3 px-16">
        View all
      </Link> */}
      
    </div>
  );
}

export default Home;
