"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Traditions from "./components/Traditions";
import Bakers from "./components/Bakers";
import JoinBakery from "./components/JoinBakery";
import Formats from "./components/Formats";
import Footer from "./components/Footer";

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
