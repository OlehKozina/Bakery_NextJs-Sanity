import { createClient, groq } from "next-sanity";

import { Bakers } from "@/types/Bakers";
import { Features } from "@/types/Features";
import { Format } from "@/types/Formats";
import { Header } from "@/types/Header";
import { Hero } from "@/types/Hero";
import { Item } from "@/types/Item";

const client = createClient({
  apiVersion: "2024-07-17",
  dataset: "production",
  projectId: "fqinbqr2",
});

async function fetchSanity<T>(query: string): Promise<T[]> {
  return client.fetch(query);
}

export function getFormats() {
  return fetchSanity<Format>(groq`*[_type == "formats"]{
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
  return fetchSanity<Header>(groq`*[_type == "header"]{
    navigation[]{ title, sectionId },
    "privacyPolicy": privacyPolicy->content,
  }`);
}

export function getFooter() {
  return fetchSanity<Header>(groq`*[_type == "footer"]{
    navigation[]{ title, sectionId },
    phone,
    email,
    address,
    "privacyPolicy": privacyPolicy->content,
  }`);
}

export function getBakers() {
  return fetchSanity<Bakers>(groq`*[_type == "bakers"]{
    _id,
    heading,
    "bakersList": *[_type == "baker"]{
      ...,
      _id,
      name,
      "image": image.asset->url,
      content
    }
  }`);
}

export function getFeatures() {
  return fetchSanity<Features>(groq`*[_type == "features"]{
    _id,
    heading,
    advantages
  }`);
}

export function getHero() {
  return fetchSanity<Hero>(groq`*[_type == "hero"]{
    _id,
    _createdAt,
    heading,
    "image": image.asset->url,
  }`);
}

export function getTraditions() {
  return fetchSanity<Item>(groq`*[_type == "traditions"]{
    heading,
    "image": image.asset->url,
    content,
  }`);
}
