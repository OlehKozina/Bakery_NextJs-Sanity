"use client";
import Bakers from "./components/Bakers";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Formats from "./components/Formats";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinBakery from "./components/JoinBakery";
import Traditions from "./components/Traditions";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Traditions />
      <Bakers />
      <Formats />
      <JoinBakery />
      <Footer />
    </div>
  );
}
