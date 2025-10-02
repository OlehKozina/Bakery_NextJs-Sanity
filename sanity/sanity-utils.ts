import { createClient, groq } from "next-sanity";
import {
  NavigationType,
  HeroType,
  BakersType,
  FeaturesType,
  FormatType,
  ItemType,
  JoinBakeryType,
  FormType,
} from "@/types";

const client = createClient({
  apiVersion: "2024-07-17",
  dataset: "production",
  projectId: "fqinbqr2",
  useCdn: false,
});

async function fetchSanity<T>(query: string): Promise<T[]> {
  return client.fetch(query, {}, { cache: "no-store" });
}

export function getFormats() {
  return fetchSanity<FormatType>(groq`*[_type == "formats"]{
    _id,
    heading,
    bakeryTypes[]{
      _key,
      name,
      "image": image.asset->url,
      content
    }
  }`);
}

export function getHeader() {
  return fetchSanity<NavigationType>(groq`*[_type == "header"]{
    navigation[]{ title, sectionId },
    "privacyPolicy": privacyPolicy->content,
  }`);
}

export function getFooter() {
  return fetchSanity<NavigationType>(groq`*[_type == "footer"]{
    navigation[]{ title, sectionId },
    phone,
    email,
    address,
    socialLinks,
    footerImages{
    "left": leftImage.asset->url,
    "right": rightImage.asset->url
    },
    "privacyPolicy": privacyPolicy->content,
  }`);
}

export function getBakers() {
  return fetchSanity<BakersType>(groq`*[_type == "bakers"]{
    _id,
    heading,
    bakers[]{_key, name, content, "image": image.asset->url},
  }`);
}

export function getFeatures() {
  return fetchSanity<FeaturesType>(groq`*[_type == "features"]{
    _id,
    heading,
    advantages
  }`);
}

export function getHero() {
  return fetchSanity<HeroType>(groq`*[_type == "hero"]{
    heading,
    "image": image.asset->url,
  }`);
}

export function getJoinBakery() {
  return fetchSanity<JoinBakeryType>(groq`*[_type == "joinBakery"]{
    heading,
    direction,
    form->{
    name, 
    fields,
    buttonLabel
    },
  }`);
}

export function getTraditions() {
  return fetchSanity<ItemType>(groq`*[_type == "traditions"]{
    heading,
    "image": image.asset->url,
    content,
  }`);
}
export function getForm() {
  return fetchSanity<FormType>(groq`*[_type == "form"]{
    name, 
    fields,
    buttonLabel
  }`);
}
