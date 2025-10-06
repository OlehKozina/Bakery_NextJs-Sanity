import {
  getHeader,
  getHero,
  getFeatures,
  getTraditions,
  getJoinBakery,
  getBakers,
  getFormats,
  getFooter,
  getForm,
} from "@/sanity/sanity-utils";
import Bakers from "./components/Bakers";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Formats from "./components/Formats";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinBakery from "./components/JoinBakery";
import Traditions from "./components/Traditions";
import Background from "./components/Background";

export default async function Home() {
  const [
    header,
    hero,
    features,
    traditions,
    bakers,
    formats,
    footer,
    joinBakery,
    form,
  ] = await Promise.all([
    getHeader(),
    getHero(),
    getFeatures(),
    getTraditions(),
    getBakers(),
    getFormats(),
    getFooter(),
    getJoinBakery(),
    getForm(),
  ]);

  return (
    <div>
      <Header header={header[0]} form={form[0]} />
      <Hero
        hero={hero[0]}
        form={form[0]}
        privacyPolicy={header[0].privacyPolicy}
      />
      <Features features={features[0]} />
      <Background>
        <Traditions traditions={traditions[0]} />
        <Bakers bakers={bakers[0]} />
        <Formats formats={formats[0]} />
        <JoinBakery joinBakery={joinBakery[0]} />
        <Footer footer={footer[0]} />
      </Background>
    </div>
  );
}
