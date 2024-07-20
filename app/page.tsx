"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pros from "./components/Pros";
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
      <Pros />
      <Traditions />
      <Bakers />
      <Formats />
      <JoinBakery />
      <Footer />
    </div>
  );
}
